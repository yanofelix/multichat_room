const app = require('./config/server') // importar as configuraçoes do servidor que foi criado

//dizer qual porta escutar
const server = app.listen(8081, function(){
    console.log('server on')
})

require('socket.io').listen(server)