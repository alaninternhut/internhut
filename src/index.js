require('dotenv').config()
const mongoose=require('./services/mongoose');
const app=require('./services/express')

app.start()
mongoose.connect()
