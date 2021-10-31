const User=require('../models/user.model')
const jwt=require('jsonwebtoken');
const config=require('../config')
exports.register = async(req,res) =>{
    try{
        const newUser=new User(req.body);
        newUser.save()
        .then(res.send("user saved"))
    }catch(err){
        res.send(err);
    }
}


exports.login = async(req,res)=>{
    try{
        const user=await User.findUser(req.body)
        payload={_id:user.id}
        const token=jwt.sign(payload,config.jwt.secretKey,{expiresIn:'1d'})

        res.json({message:'user logged in',token:token,user:user})
    }catch(err){
        res.send(`Error found ${err}`)
    }
}