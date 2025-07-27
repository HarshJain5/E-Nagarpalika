const express=require('express')
const cors = require('cors');
const app=express()
app.use(express.json());
require('dotenv').config()
require('./dbconfiguration/dbconfiguration')
const userRouter=require('./routers/userrouter')


app.use('/user',userRouter)

const corsOptions = {
  origin: [
    'http://localhost:3000', // स्थानीय विकास के लिए
    'https://e-nagarpalika-frontend.onrender.com' // आपके डिप्लॉयड फ्रंटएंड का URL
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // यदि आप कुकीज़ या ऑथराइजेशन हेडर भेज रहे हैं
  optionsSuccessStatus: 204
};



app.listen(process.env.PORT,()=>{console.log(`server is running on Port ${process.env.PORT}`)})
