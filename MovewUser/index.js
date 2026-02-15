import movie from "./src/Movie.js";
import user from "./src/user.js";
import express from "express";
let app=express()
let port= 8001;
app.use(express.json())
app.post('/name',movie)
    //res.status()
    //res.json()
app.listen(port, ()=>{
    console.log("connect");
})