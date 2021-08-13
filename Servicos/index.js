const express = require("express");//express
const bodyParser = require("body-parser");//body-parser
const app = express(); //gerenciador express

const axios = require('axios');

app.use("/public", express.static('public')); 

//configuração do body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configuração do ejs
app.set('view engine','ejs');
app.use(express.static('public'));

//rota principal
app.get("/",function(req,res){
    res.render("index");
});

//start do server
app.listen(8050,() =>{ console.log("Esta rodando 8050 "); });