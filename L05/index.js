var express = require("express");
var bodyParser = require("body-parser");
var port = (process.env.PORT || 1607);

var app = express();

var BASE_API_PATH="/api/v1";

app.use("/",express.static(__dirname+"/public"));

app.get("/time",(req,res)=>{
    console.log("New request to /time");
    res.send(new Date()); 
});

var contacts= [
    {
        "name": "pablo",
        "phone": "12345"
    },
    {
        "name":"pepe",
        "phone":"54321"
    }
];

app.get(BASE_API_PATH+"/contacts",(req,res)=>{
    res.send(contacts); 
});

app.post(BASE_API_PATH+"/contacts",(req,res)=>{
    var contact = req.body;
    contacts.push(contact);
    res.sendStatus(201); 
});

app.listen(port,()=>{
    console.log("server ready on port " + port);
}).on("error",(e)=>{
    console.log("Server not ready "+ e);
});

console.log("Server setting up...");