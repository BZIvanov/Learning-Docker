const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'my-redis-server', // this is the name of our redis container
  port: 6379, // this is the default redis port number
});

// set initial value
client.set('count', 0);

app.get('/', (req, res) => {
  client.get('count', (err, count) => {
    res.send('Counter equals: ' + count);

    client.set('count', parseInt(count, 10) + 1);
  });
});

app.listen(3000, () => console.log('Listening on port 3000...'));
