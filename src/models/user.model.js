const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt');

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:'applicant'

    }
})

userSchema.pre('save', async function(next){
    const salt = bcrypt.genSaltSync(10);
    this.password=bcrypt.hashSync(this.password,salt);
    next()
  })
  userSchema.methods.passwordMatches=function(password){
        return bcrypt.compareSync(password,this.password)
  }
  userSchema.statics.findUser=async function(payload){
          try{
          const {username,password}=payload
          const user=await this.findOne({username}).exec()
          const passwordOk=await user.passwordMatches(password)
          return user
          }
          catch(err){
              return err
          }
      }


module.exports=mongoose.model('User',userSchema);