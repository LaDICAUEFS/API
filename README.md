# API
Application Programming Interface **A.P.I.**  *(Interface de Programação de Aplicações)*  de comunicação e interconexão que unificar as [APICarcara](https://github.com/LaDICAUEFS/APICarcara) e [API-Servicos](https://github.com/LaDICAUEFS/API-Servicos) e  em uma só aplicação

## Estuturação de diretórios
API está estruturada da seguinte forma:

>![Estuturação de diretórios](https://github.com/LaDICAUEFS/API/blob/master/img/img.PNG)
>
>*  **API(REST)** : nele se encontrar o core da api, responsável por realizar os processos serialização e desserialização com os dados que são enviados para analise, produzindo assim os a lista de dados que vão se analisados matematicamente e também  a realização de  cadastros , exibição , edição , deleção *(C.R.U.D.)* de módulos de analise matemática  pelo protocolo TCP/IP  ou for arquivo.
>
>*  **Dados** : nele fica armazenados que foram serializados pela api, é nele onde os módulos de analise matemática pegará as listas de dados a ser analisados, e é nele que os módulos serialização os resultados das analise matemática.
>
>*  **Servicos** : nele está a interface simples e intuitiva que  consome  o os endpoints do core da API permitindo  que os desenvolvedores realizem testes rápidos e assim comece a elaboração de interface mais complexa para o simulador , e também  possibilite  cadastra , atualizar , exibir  e  deletas os   módulos matemáticos  
-------------------------------------------------------------------------
## Módulos
* [Body Parser]( https://www.npmjs.com/package/body-parser ) - Pegar as informações do formulário.
* [Express](https://expressjs.com/pt-br/ ) - Framework que gerencia as rotas
* [EJS]( https://ejs.co/)  -  é uma engine de visualização, com ele conseguimos de uma maneira fácil e simples transportar dados do back-end para o front-end. 
* [Cors](https://www.npmjs.com/package/cors ) - Mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens.
* [Axios ](https://github.com/axios/axios ) - É um cliente HTTP, que funciona tanto no browser quanto em node.js. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor.
* [Bootstrap](https://getbootstrap.com/) - É um framework web com para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript.
------------------------------------------------------------------------
## Endpoints

### GET /
 Esse endpoint é responsável por retornar em fromato  json a lista de dados que foram analisados e foram escrito em arquivo txt e que estão localizados no diretório **Dados**.

#### Respostas
####  Exemplo de resposta
 ```
 [
    {
        "dado": "R R1 1 2 500.0"
    },
    {
        "dado": "I FC1 2 3 0.01"
    },
    {
        "dado": "C C1 0 3 1.0E-6"
    },
    {
        "dado": "A I1 2 4 1.0E-6"
    },
    {
        "dado": "M V1 3 5 1.0E9"
    },
    {
        "dado": "R R2 1 6 500.0"
    },
    {
        "dado": "R R3 0 7 500.0"
    },
    {
        "dado": "C C2 4 5 1.0E-6"
    },
    {
        "dado": "V VAC1 AC 1 0 100.0 60.0"
    },
    {
        "dado": "V F1 DC 6 7 100.0"
    },
    {
        "dado": ". TRAN 1.0E-5 0.0 5.0"
    }
]
```
 > ##### Time:200ms  
 > ##### Status: 100 OK 

### POST /
Este endpoint é responsável por receber os dados que são sé analisados, para isso ele receberá os dados em formato Object convertido em json, para ser escrito em arquivo txt  no diretório **Dados**, para serem analisados posteriormente 

####  Exemplo de entrada de dados 
 ```
 dado: "R R1 1 2 500.0↵I FC1 2 3 0.01↵C C1 0 3 1.0E-6↵A I1 2 4 1.0E-6↵M V1 3 5 1.0E9↵R R2 1 6 500.0↵R R3 0 7 500.0↵C C2 4 5 1.0E-6↵V VAC1 AC 1 0 100.0 60.0↵V F1 DC 6 7 100.0↵. TRAN 1.0E-5 0.0 5.0"
```
#### Respostas
 > ##### Time: 200ms  
 > ##### Status :  130 OK 
____________________________________________________________________

# Orientadora 
* Professora **Ana Cláudia Fiorin**

# Laboratório
* [Laboratório de Desenvolvimento Interdisciplinar em Computação Aplicada - LaDICA](https://github.com/LaDICAUEFS)

# Instituição 
* [Universidade Estadual de Feira de Santana - UEFS](https://github.com/UEFS)

# Desenvolvedores 
* [Marcos Ramos](https://github.com/themarcosramos)
* [Samuel Lima ](https://github.com/SamuelLima0610)

# colaboradores 
* [Lara Esquivel ](https://github.com/Laikel)