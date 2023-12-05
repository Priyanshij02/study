import express from "express";
 import { db } from "../Config/db.config";
import { router } from "../Routes/post.routes";

const app= express();
// middlewares
app.use(express.json())
app.use(express.urlencoded({  extended:true}))
 
// routes 
app.use('/api/v1/posts', router)

// db connection then server connection 
 db.then (()=>{
    app.listen(7070, ()=>
    console.log('Server listening on port 7070'))
 })
 