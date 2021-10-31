require('dotenv').config()

module.exports={
    port:process.env.PORT||5000,
    mongo:{
        uri:process.env.MONGO_URI
    },
    jwt:{
        secretKey:process.env.JWT_SECRET_KEY
    },
    redis:{
        port:process.env.REDIS_PORT
    },
    testUser:{
        username:process.env.TEST_RECRUITER,
        password:process.env.TEST_RECRUITER_PASSWORD
    }
}