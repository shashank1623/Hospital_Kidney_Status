const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function(req,res){
    res.send(`Hello World!`);
})

function usernameValidator(username,password){
    if(username!= "shashank1623" || password!="alias1623"){
        return false;
    }
    return true;
}

function kidneyValidator(kidneyId){
    if(kidneyId!= 1 && kidneyId!=2){
        return false;
    }
    return true;
}
app.get('/healthy-checkup',function(req,res){

    const kidneyId = req.query.kidneyId;
    
    if(!usernameValidator(req.headers.username,req.headers.password)){
        res.status(403).json({
            msg : "User does not exist!"
        })
        return ;
    }

    if(!(kidneyValidator(kidneyId))){
        res.status(403).json({
            msg : "wrong inputs"
        })

        return 
    }

    res.send("Your heart is healthy")
})
app.put('/replace-kidney' , (req,res)=>{
    const kidneyId = req.query.kidneyId;
     
    if(!usernameValidator(req.headers.username,req.headers.password)){
        res.status(403).json({
            msg : "User does not exist!"
        })
        return ;
    }

    if(!(kidneyValidator(kidneyId))){
        res.status(403).json({
            msg : "wrong inputs"
        })

        return 
    }
    res.send("Your kidney has been replaced!")
})

app.listen(PORT, function (req,res){
    console.log(`Server runing on port: ${PORT}`);
})