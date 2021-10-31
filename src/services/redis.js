const redis=require('redis');
const config=require('../config');

const redisClient=redis.createClient(config.redis.port)

redisClient.on('connect',()=>{
    console.log("connected to redis");
})

redisClient.on('error',(err)=>{
    console.log(`error connnecting to redis ${err}`);
})

module.exports=redisClient