const router=require('express').Router();
const companyController=require('../../controllers/company.controller');
router.post('/add-company',companyController.addCompany);

module.exports=router;