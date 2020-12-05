const express=require('express')
const app=express()
const mongoose=require('mongoose')
const Feedbacks = require('./models/feedback')
const {about,cart,contact,products} = require('./paths')

const {dburl} = require('./keys')

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
    const fi=  new Feedbacks(req.body)
    fi.save()
    res.json("saved")
    res.end()
})


app.get('/showdatabase',(req,res)=>{
    Feedbacks.find()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>res.json(err))
})

app.use((req,res)=>{
    // res.send("404")
    
    switch (req.url) {
        case contact:
            res.redirect('/#/contact')
            break;
        case about:
            res.redirect('/#/about')
            break;
        case cart:
            res.redirect('/#/cart')
            break;
        case products:
            res.redirect('/#/products')
            break;
        default:
            break;
    }

// console.log(req.url)
    res.end()

})
app.listen(5000,()=>{
    console.log("port connectd")
})