const company=require('../models/company.model');
exports.addCompany=async (req,res)=>{
    const newCompany=new company({
        name:req.body.name
    })
    newCompany.save() 
    .then(()=>{res.send("new company saved")})
    .catch((err)=>{console.log(err)});
}