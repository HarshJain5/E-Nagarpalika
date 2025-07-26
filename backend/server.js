const express=require('express')
const cors = require('cors');
const app=express()
app.use(express.json());
require('dotenv').config()
require('./dbconfiguration/dbconfiguration')
const userRouter=require('./routers/userrouter')


app.use('/user',userRouter)

app.use(cors({origin: 'https://e-nagarpalika-frontend.onrender.com'}));



app.listen(process.env.PORT,()=>{console.log(`server is running on Port ${process.env.PORT}`)})
