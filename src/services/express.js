const express=require('express')
const config=require('../config')
const app=express()
const apiRouter=require('../routes/api');
const cors=require('cors')
const path=require('path')
var server = require('http').Server(app);

exports.start=()=>{
    server.listen(config.port,(err)=>{
        if (err){
            console.log(err);
            process.exit(-1)
        }
        console.log(`Server started at ${config.port}`);
    })
}
app.use(express.json());
app.use(cors());
app.use('/api',apiRouter);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

exports.app=app