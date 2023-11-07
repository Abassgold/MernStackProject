const express = require('express')
const mongoose = require('mongoose')
const submit =  require('./Router/Router.user')
const dotenv = require('dotenv');
const corse = require('cors')
dotenv.config();
const app = express()
let Port = process.env.PORT
let URI = process.env.URI
mongoose.connect(URI)
.then(()=>{
    console.log('db connected');
    app.listen(Port, ()=>{
        console.log(`server connected on port ${Port}`);
    })
})
app.use(express.json({limit: '30mb'}))
app.use(corse())
app.use(express.urlencoded({extended: true, limit: '30mb'}))
app.use('/user', submit)