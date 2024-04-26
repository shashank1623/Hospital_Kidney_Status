const express = require('express');
const app = express();

const port = 3001


function calcluateSum(n){
    let ans = 0;
    for(let i = 0;i<=n;i++){
        ans+=i;
    }

    return ans;
}
app.get('/',function(req,res) {
    const n = req.query.n
    const ans = calcluateSum(n);
    res.send(ans.toString());
})

app.listen(port,()=>{
    console.log(`Example server is listening on Port: ${port}`);
})
