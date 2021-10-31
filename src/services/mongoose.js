
const mongoose = require('mongoose');
const config=require('../config');



exports.connect = () => {
    var mongoURI =config.mongo.uri
    mongoose.connect(mongoURI)
    .then(()=>{console.log("connected to database")})
    .catch((err)=>{console.log(err)});
}
