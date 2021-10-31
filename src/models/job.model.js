const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const User=require('../models/user.model')
const jobSchema=new Schema({
    recruiter:{
        type:mongoose.Types.ObjectId,
        ref:User,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    description:String,
    primary_role:{
        type:String,
        required:true
    },
    additional_roles:[{
        type:String,
        required:false
    }],
    skills:[String],
    salary:[],
    equity:[],
    work_experience:{
        type:String,
        require:true
    },
    visa_required:{
        type:Boolean,
        default:false
    },
    in_office:{
        type:Boolean,
        default:false
    },
    auto_skip_applicants:{
        type:Boolean,
        default:false
    },
    location:{
        type:String,
        required:true
    },
    secondary_recruiters:[{
        type:mongoose.Types.ObjectId,
        ref:User,
        required:false
    }]
})

module.exports=mongoose.model('Job',jobSchema);