const express = require('express')
const app =express()
app.get('/',function (req,res){
    res.send('Helloworld')
})
app.get('/profile',function(req,res){
    res.send('NBA yb')
})
app.listen(2828);