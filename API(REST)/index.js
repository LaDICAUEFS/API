const express = require("express");//express
const bodyParser = require("body-parser");//body-parser
const app = express(); //gerenciador express
const cors = require('cors'); 
const fs = require("fs"); // gerenciador leitura e escrita de arquivo
const Processor = require('./controller/Processor');

//configuração do body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/public", express.static('public')); 

app.set('view engine','ejs');
app.use(express.static('public'));

//cors
app.use(cors());

app.get("/",(req,res)=>{
    fs.readFile("../Dados/data.txt","utf-8", function(err,dados){
        if(err){
            console.log(err);
            res.status(404);
        }else{
            let ad = JSON.parse(dados);
            res.json(ad);
        }
    });
});

app.post("/",(req,res) => {
    let dado = req.body.dado;
    let json = Processor.Process(dado);
    fs.writeFile("../Dados/data.txt", JSON.stringify(json), (error) =>{
        if(error){
            console.log(error);
        }else{
            console.log("dados foram escrito em arquivos .txt");
        }
    });
    res.sendStatus(200);  
});

//start do server
app.listen(8080,() =>{ console.log("Esta rodando 8080 ");});