const express = require('express')
const app =express()

app.get("/",function(req,res ,next){
return next(new Error("something borke again"))
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
    




app.listen(2828);