const express=require('express')
const app=express()
const mongoose=require('mongoose')



app.post('/sendfeedback',(req,res)=>{
    console.log(req.body)
    res.json("saved")
    res.end()
})
app.listen(5000)