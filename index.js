const express = require("express");
const port = process.env.PORT||3000

const app = express();
const ejs = require("ejs");

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('links');
})


app.listen(port,(req,res)=>{
    console.log(`listening to port ${port}`)
})