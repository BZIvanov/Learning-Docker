const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const redis = require('redis');

const app = express();

app.use(cors());
app.use(express.json());

// PG setup
const pgClient = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
});

pgClient.on('error', () => console.log('PG Client error occured!'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS prices (number INT)')
  .catch((err) => console.log(err));

// Redis setup
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: () => 1000,
});

const subscription = redisClient.duplicate();

// API setup
app.get('/', (req, res) => {
  res.send('Root route');
});

app.get('/prices/all', async (req, res) => {
  const prices = await pgClient.query('SELECT * FROM prices');
  res.send(prices.rows);
});

app.get('/prices/current', async (req, res) => {
  redisClient.hgetall('prices', (err, prices) => {
    res.send(prices);
  });
});

app.post('/prices', async (req, res) => {
  const { price } = req.body;

  redisClient.hset('prices', price, 'Working on it!');
  subscription.publish('insert', price);

  pgClient.query('INSERT INTO prices(number) VALUES($1)', [price]);

  res.send({ success: true });
});

app.listen(3001, () => console.log('Listening on port 3001'));
