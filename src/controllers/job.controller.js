const Job=require('../models/job.model');
const User=require('../models/user.model')
const config=require('../config');
exports.addJob=async (req,res)=>{
    payload={username:config.testUser.username,password:config.testUser.password}
    const recruiter=await User.findUser(payload)
    req.body.recruiter=recruiter._id
    const salary={
        "currency":req.body.salary[0],
        "salary_lower_range":req.body.salary[1],
        "salary_upper_range":req.body.salary[2]
    }
    const equity={
        "equity_lower_range":req.body.equity[0],
        "equity_upper_range":req.body.equity[1]
    }

    req.body.salary=salary
    req.body.equity=equity
    const newJob=new Job(req.body)

    const createdJob=await newJob.save()

    res.json(createdJob);
}

exports.getAllJobs=async(req,res)=>{
    payload={username:'rtest',password:'rtest@123'}
    const recruiter=await User.findUser(payload)
    const allJobs=await Job.find({recruiter:recruiter._id})
    res.json(allJobs)
}

exports.deleteJob=async (req,res)=>{
    jobtToDelete=req.body
    Job.deleteOne(jobtToDelete)
    .then((data)=>{res.json({message:`success`})})
    .catch((err)=>{res.json({message:'failed'})})
}