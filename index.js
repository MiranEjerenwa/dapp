const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("Hi")
});

app.listen(3000, function(){
    console.log("App is Liuve on 3000");
})