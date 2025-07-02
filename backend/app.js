const express=require('express')
const app=express()
app.set("view engine","ejs")
app.get("/",(request,response)=>{
    response.render("home.ejs")
})
app.listen(4000,(request,response)=>{
    console.log("backend has started at port number 4000")
})