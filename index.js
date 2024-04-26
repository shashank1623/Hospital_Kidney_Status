
const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;
var users = [{
    name : "jhon",
    kidneys : [{
        healthy : false
    }]
}]

//get all the kidneys
app.get('/',function(req,res){

    //user want to check their number of kidenys and their health
    const jhonkidneys = users[0].kidneys;
    const numberOfKidneys = users[0].kidneys.length;
    //number of helathy kidneys
    // const numberOfHealthyKidneys = jhonkidneys.filter((kidney)=>kidney.healthy==="true").length;

    //using iteration to find number of healthy kidneys
    let numberOfHealthyKidneys = 0;
    for(let i = 0;i<numberOfKidneys;i++){
        if(jhonkidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})
//adding a new kidney
app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "Kidney Added Successfully"
    })
})

//updating all the kidneys to healthy
app.put('/',function(req,res){
    //if all kideys are healthy then return this message
    if(users[0].kidneys[0].healthy){
        res.sendStatus(411).json({
            msg : "All Kidneys Are Healthy"
        })
    }

    for(let i = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg : "All Kidneys Are Now Healthy"
    })  
})

//removing all the unhealthy kidneys
app.delete('/',function(req,res){
    //if all kideys are healthy then return this message
    if(users[0].kidneys[0].healthy){
        res.sendStatus(411).json({
            msg : "All Kidneys Are Healthy"
        })
    }
    const newKidenys = [];
    for(let i = 0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidenys.push({
                healthy : true
            });
        }
    
    }
    users[0].kidneys = newKidenys;
    res.json({
        msg : "All Unhealthy Kidneys Removed"
    })
})
app.listen(port,()=>{
    console.log(`App Listening On Port ${port}`);
})