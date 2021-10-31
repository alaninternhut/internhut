const router=require('express').Router()
const companyRouter=require('./company.route')
const authRouter=require('./auth.route')
const jobRouter=require('./job.route')


router.use('/company',companyRouter);
router.use('/auth',authRouter);
router.use('/job',jobRouter)

module.exports=router;