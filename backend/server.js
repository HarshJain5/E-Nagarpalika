const express=require('express')
const cors = require('cors');
const app=express()
app.use(express.json());
require('dotenv').config()
require('./dbconfiguration/dbconfiguration')
const userRouter=require('./routers/userrouter')


app.use('/user',userRouter)

app.use(cors({origin: 'http://localhost:3000'}));



app.listen(process.env.PORT,()=>{console.log(`server is running on Port ${process.env.PORT}`)})