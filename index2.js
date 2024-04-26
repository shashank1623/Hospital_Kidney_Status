const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());

const port = 3000


app.post('/transfer',(req,res)=>{
  console.log(req.body)
  console.log(req.headers)
  res.send("<b>kya be Gandu<b>")
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
