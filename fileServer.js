const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files',function (req,res){
    fs.readdir('./files',(err,files)=>{
        if(err){
            res.status(500).send('Internal server error');
        }
        res.status(200).json(files);
    })
})

app.get('/files/:filename',function (req,res){
    const filename = req.params.filename;
    const filePath = path.join(__dirname,'files',filename);
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            res.status(404).send('File not found');
        }
        res.status(200).send(data);
    })
});

app.get('*',function(req,res){
    res.status(404).send("Page Not Found!")
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});