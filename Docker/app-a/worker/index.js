const redis = require('redis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: () => 1000, // if we lose connection we will retry to connect every second
});

const subscription = redisClient.duplicate();

function calculateVAT(value) {
  return value * 1.2;
}

subscription.on('message', (channel, message) => {
  redisClient.hset('prices', message, calculateVAT(parseInt(message, 10)));
});

subscription.subscribe('insert');
