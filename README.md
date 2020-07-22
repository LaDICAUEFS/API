# API

Application Programming Interface **A.P.I.**  *(Interface de Programação de Aplicações)*  de comunicação e interconexão que unificar as [APICarcara](https://github.com/LaDICAUEFS/APICarcara) e [API-Servicos](https://github.com/LaDICAUEFS/API-Servicos) e  em uma só aplicação


## Estuturação de diretórios
API está estruturada da seguinte forma :

>![Estuturação de diretórios](https://github.com/LaDICAUEFS/API/blob/master/img/img.PNG)
>
>*  **API(REST)** : nele se encontrar o core da api, responsável por realizar os processos serialização e desserialização com os dados que são enviados para analise, produzindo assim os a lista de dados que vão se analisados matematicamente e também  a realização de  cadastros , exibição , edição , deleção *(C.R.U.D.)* de módulos de analise matemática  pelo protocolo TCP/IP  ou for arquivo.
>
>*  **Dados** : nele fica armazenados que foram serializados pela api, é nele onde os módulos de analise matemática pegará as listas de dados a ser analisados, e é nele que os módulos serialização os resultados das analise matemática.
>
>*  **Servicos** : nele está a interface simples e intuitiva que  consome  o os endpoints do core da API permitindo  que os desenvolvedores realizem testes rápidos e assim comece a elaboração de interface mais complexa para o simulador , e também  possibilite  cadastra , atualizar , exibir  e  deletas os   módulos matemáticos  


## Módulos
* [Body Parser]( https://www.npmjs.com/package/body-parser ) - Pegar as informações do formulário.
* [Express](https://expressjs.com/pt-br/ ) - Framework que gerencia as rotas
* [EJS]( https://ejs.co/)  -  é uma engine de visualização, com ele conseguimos de uma maneira fácil e simples transportar dados do back-end para o front-end. 
* [Cors](https://www.npmjs.com/package/cors ) - Mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens.
* [Axios ](https://github.com/axios/axios ) - É um cliente HTTP, que funciona tanto no browser quanto em node.js. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor.
* [Bootstrap](https://getbootstrap.com/) - É um framework web com para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript.
* [Firebase]( https://firebase.google.com/?hl=pt-br) - Banco de dados não relacional



## Endpoints

### GET /
 Esse endpoint é responsável por retornar 

#### Parametros

#### Respostas

####  Exemplo de resposta

 ```


 
 

 
```

### POST /


#### Parametros

#### Respostas

####  Exemplo de resposta

 ```


 
 

 
```







## End-Points

#### GET (/services) : Listagem dos serviços cadastrados (Time: 222ms Status: 200 OK)

##### Exemplo( Saida ):
 ```
{
    "services": {
        "-M1RhOP4173L9dgO6bQv": {
            "diretorio": "",
            "id": "-M1RhOP4173L9dgO6bQv",
            "ip": "192.0.0.1",
            "nome": "circuitos",
            "porta": "1010"
        },
        "-M1RpPZa9ILIpazal9TQ": {
            "diretorio": "",
            "id": "-M1RpPZa9ILIpazal9TQ",
            "ip": "190.0.0.1",
            "nome": "circuitos eletronicos",
            "porta": 1010
        },
        "-M6q0p2DNgmzpJy9J8pL": {
            "diretorio": "C:\\Users\\lsjsa\\OneDrive\\Área de Trabalho\\Codigo\\projetoLadica\\API-Servicos\\files\\teste.json",
            "id": "-M6q0p2DNgmzpJy9J8pL",
            "ip": "",
            "nome": "Capacito e Indutor",
            "porta": ""
        }
    }
}

```


#### GET (/services/:id) : Dados de um serviço cadastrado [Params: id] (Time: 27ms Status: 200 OK)

##### Exemplo( Saida ):

 ```
{
    "service": {
        "diretorio": "",
        "id": "-M1RhOP4173L9dgO6bQv",
        "ip": "192.0.0.1",
        "nome": "api",
        "porta": "1010"
    }
}
```

#### DELETE (/services/:id) : Deleta um serviço cadastrado [Params: id] (Time: 43ms Status: 200 OK)

### Archives Services

#### POST (/service/Arquivo): Cadastra um modulo que utiliza arquivo para comunicação com a api 
##### Exemplo (Dados Corretos): (Time: 15ms Status 200 OK)
##### Exemplo( Entrada) :

 ```
{
    "nome": "Mosfet",
    "dir": "C:\\Users\\lsjsa\\OneDrive\\Documentos\\Mosfet.txt"
}
 
```

##### Exemplo (Nome já cadastrado ou não existe o arquivo no servidor):
##### Entrada: (Time: 27ms Status 200 Bad Request)

 ```
{
    "nome": "TransistorTBJ",
    "dir": "C:\\Users\\lsjsa\\OneDrive\\Documentos\\Mosfet.txt"
}
 
```


#### PUT (/service/Arquivo/:id): Edita um modulo que utiliza arquivo para comunicação com a api
#### Entrada:(Dados Corretos): (Time: 16ms Status 200 OK)
```
{
    "nome": "Resistor",
    "dir": "C:\\Users\\lsjsa\\OneDrive\\Documentos\\Resistor.txt"
}
```

#### Exemplo (Não existe o arquivo no servidor):
#### Entrada: (Time: 85ms Status 200 Bad Request)
```
{
    "nome": "TransistorTBJ",
    "dir": "C:\\Users\\lsjsa\\OneDrive\\Documentos\\Mosfet.txt"
}
```
#### TCP Services
#### POST (/service/TCP): Cadastra um modulo que utiliza TCP/IP para comunicação com a api
#### Exemplo (Dados Corretos): (Time: 270ms Status 200 OK)
```
Entrada:
{
    "nome": "Diodo",
    "ip": "129.0.0.1",
    "porta": "1020"		
}
```
#### Exemplo (Nome já cadastrado, porta sem receber um inteiro, ou o formato da string do IP esteja incorreto):(Time: 23ms Status 400 Bad Request)
 ```
{
    "nome": "Diodo",
    "ip": "127.0.0.1",
    "porta": "1010"		
}
```
#### PUT (/service/TCP/:id): Edita um modulo que utiliza TCp/IP para comunicação com a api
#### Exemplo (Dados Corretos): (Time: 25ms Status 200 OK)
#### Entrada:
```
{
    "nome": "Diodo Zener",
    "ip": "10.0.0.1",
    "porta": "1010"		
}
```
#### Exemplo (Nome já cadastrado):(Time: 51ms Status 400 Bad Request)
``` 
{
    "nome": "TransistorTBJ",
    "ip": "127.0.0.1",
    "porta": "1010"		
}
```
>> **(Obs na rota PUT tem que colocar a validação (no testei ajeitei o meu mas tem que ajeitar no git))**

_____________________________________________________________________



_____________________________________________________________________

# Orientadora 
* Professora Ana Cláudia Fiorin 

# Laboratório
* [LaDICA](https://github.com/LaDICAUEFS)

# Instituição 
* [UEFS](https://github.com/UEFS)

# Desenvolvedores 
* [Marcos Ramos](https://github.com/themarcosramos)
* [Samuel Lima ](https://github.com/SamuelLima0610)

# colaboradores 
* [Lara Esquivel ](https://github.com/Laikel)