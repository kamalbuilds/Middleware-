const express = require("express");
const app =express();
const port=3000;

app.use(logger);

app.get('/',(req,res,next)=>{
    console.log(`server started at ${port}`);
    res.send('hello')
})
app.get('/users',(req,res)=>{
    console.log(`users`);
    res.send('users')
})

function logger(req,res,next){
    console.log('before');
    next()
    console.log('after');
}
function auth(req,res,next){
    if(req.query.admin === 'true'){
        req.admin = true
        next()
        return
    } 
    res.send("no auth")
    
}

app.listen(port);