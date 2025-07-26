const router=require('express').Router()
const userformC=require('../controller/userformcontroller')
const loginC=require('../controller/logincontroller')
const officerC=require('../controller/officercontroller')

// 🔹 Step 1 data route (used by Step1form.jsx)
router.post('/form', userformC.handleStep1);

// 🔹 Step 2 final data submission (used by Step2form.jsx)
router.post('/step2', userformC.submitForm);

router.get('/track/:ticketNo',userformC.track)

router.post('/login',loginC.login)

router.get("/dashforms", officerC.dashforms )

// routes/officerrouter.js
router.post("/approve/:id", officerC.approve);

router.post("/reject/:id", officerC.reject);


module.exports=router