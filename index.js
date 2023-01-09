const express=require("express");
const app=express();


app.get('/api/main',(req,res)=>{

    res.send(
         `<h1>What is express?</h1>
          <hr>
          <p>Express is a fast, unopinionated, minimalist web framework for Node.js</p>
          <ul>
          <li>It is used to build a single page, multipage, and hybrid web application.</li>
          <li>It's a layer built on the top of the Node js that helps manage servers and routes.</li>
          </ul>

`)
})

app.listen(5050,(req,res)=>{
    console.log("Server is Running on the 5050 port");
})