const express = require('express')
const app =express()

app.get("/",function(req,res){
res.send("helloworld");
});

    




app.listen(2828);