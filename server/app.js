const express=require('express')
const app=express()
const mongoose=require('mongoose')
const {
    Feedback,
    Kart
} = require('./models/feedback')

const {dburl} = requre('./keys')

mongoose.connect(dburl,{ useFindAndModify: false ,useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{console.log('connected');})
.catch((err)=>console.log(err))


//
app.set('view engine','ejs')
app.set('views','templates')
app.use(express.static('static'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
    res.render('index')
    res.end()
})
app.post('/sendfeedback',async (req,res)=>{
    const fi= await new Feedback(req.body).save()
    res.json("saved")
    res.end()
})
app.use((req,res)=>{
    res.send("404")
    res.end()

})
app.listen(5000,()=>{
    console.log("connectd")
})