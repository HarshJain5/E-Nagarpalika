const express=require('express')
const cors = require('cors');
const app=express()
app.use(express.json());
require('dotenv').config()
require('./dbconfiguration/dbconfiguration')
const userRouter=require('./routers/userrouter')


app.use(cors({
    origin: "https://e-nagarpalika.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use('/user',userRouter)

app.listen(process.env.PORT,()=>{console.log(`server is running on Port ${process.env.PORT}`)})
