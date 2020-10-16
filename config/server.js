//importar o modulo do framework express
const express = require('express')
//importar o consign
const consign = require('consign')
//importar body-parser
const bodyParser = require('body-parser')
//importar express validator
const expressValidator = require('express-validator')

const app = express()

//setar as variaveis 'view engine' e 'views' do express
app.set('view engine', 'ejs')
app.set('views', './app/views')

//configurar middleware express.static, esta dizendo onde se encontra os arquivos estaticos
app.use(express.static('./app/public'))

//configurar middleware body-parser, recupera dados enviados via POST em formato json, apartir da propiedade body
app.use(bodyParser.urlencoded({extended: true})) 

//configurar expressValidator
app.use(expressValidator())

//efetua o autoloa das rotas,dos models, e dos controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

// exporta a variavel app que possui a execução do metodo do express
module.exports = app