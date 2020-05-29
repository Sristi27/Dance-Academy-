const express=require('express');
//const fs=require("fs");
const app=express();
const path =require("path");
const port=80;

//Express

//for serving static files
app.use('/static',express.static('static'));//url 1st folder 2nd
app.use(express.urlencoded());


app.set('view engine','pug');
//set views directory
app.set('views',path.join(__dirname, 'views'));

app.get('/',(req,res)=>{

const con="hi";
const params ={'title':"head","content":con};
res.render("index.pug",params);
});
app.listen(port,()=>{
    console.log(`running on ${port}`);
    });
    