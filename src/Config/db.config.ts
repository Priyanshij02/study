import dotnev from 'dotenv';
import mongoose from 'mongoose';

 dotnev.config();

 // details from env
  const username= process.env.username;
  const password= process.env.password;
   const dbName='Post';
   //connection string to mongo atlas

const connectionString = `mongodb+srv://${username}:${password}@cluster0.tjh8e.mongodb.net/${dbName}?retryWrites=true&w=majority`;


const options ={
    autoIndex:false,
    maxPoolSize:10, // 10 socket connection
    serverSelectionTimeoutMS: 5000, // trying to send operation in 5 secs
    socketTimeoutMS:45000, //close sockets after 45 sec
    family:4 // Use IPv4 

};
// db connect
 export const db= mongoose.connect(connectionString,options)
 .then(res=>{
    if(res) {
        console.log(`Database connected! ${dbName}`);

    }
 })
 .catch(err=>{
    console.log(err);
    
 })