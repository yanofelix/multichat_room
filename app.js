const { application } = require('express')
const app = require('./config/server') // importar as configuraçoes do servidor que foi criado

//dizer qual porta escutar
const server = app.listen(8081, function(){
    console.log('server on')
})

const io = require('socket.io').listen(server)

app.set('io', io)

//criar a conexao por websocket
io.on('connection', function(socket){
    console.log('conectou')

    socket.on('disconnect', function(){
        console.log('desconectou')
    })

    socket.on('msgPServer', function(data){
        //dialogo
        socket.emit('msgPClient',
         { apelido: data.apelido, mensagem: data.mensagem }
         )

         socket.broadcast.emit('msgPClient',
         { apelido: data.apelido, mensagem: data.mensagem }
         )

         //participantes
         if(parseInt(data.apelidos_atualizados) == 0){
            socket.emit('participantesPClientes',
            { apelido: data.apelido }
            )

            socket.broadcast.emit('participantesPClientes',
            { apelido: data.apelido }
            )
         }
    })

    

})
