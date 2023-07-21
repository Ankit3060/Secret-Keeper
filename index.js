const express = require("express");
const bodyParser = require("body-parser");


const app = express();

// var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended: true}));


app.use((req, res, next) => {
    // Initialize userIsAuthorised to false for each request
    req.userIsAuthorised = false;
    next();
  });

function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
      userIsAuthorised = true;
    }
    next();
}

app.use(passwordCheck);


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});


app.post("/check", (req, res) => {
    if (userIsAuthorised) {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      res.redirect("/"); 
      //Alternatively res.redirect("/");
    }
  });

app.listen(3000, function()
{
    console.log("Server has started");
})