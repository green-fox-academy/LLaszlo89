const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('assets'));
app.get('/', (req, res) => {
 
 res.sendFile(path.join(__dirname, 'index.html'));
 
});
// doubling
app.get('/doubling', (req, res) => {
   let input = req.query.input *1
   let output = {}
   
   if (!input){
output.error = "Not a number"
   }else {

     
     output.received = input;
     output.result = input*2;
    }

   return res.send(output);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//-----------------..............----------------

app.get('/greeter', (req, res) => {
let output ={};



 if(input) {
  
 output = {"welcome_message": `Oh, hi there ${}, my dear ${}!`}
} else if (!input){
  output = {"error": "Please provide a name and a title!"}
}
  return res.send(output);
})