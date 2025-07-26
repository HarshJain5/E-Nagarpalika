const loginTable=require('../models/login')

exports.login=async(req,res)=>{
    const{email,password}=req.body
    try{
    const emailCheck=await loginTable.findOne({email:email})
    if(!emailCheck){
        throw new Error("Email is Wrong!!")
    }
    if(emailCheck.password !== password){
        throw new Error("Incorrect Password!!")
    }
    res.status(200).json({
        status:200,
        email:email,
        role:emailCheck.role
    })
}catch(error){
    res.status(400).json({
        status:400,
        message:error.message
    })
}
}