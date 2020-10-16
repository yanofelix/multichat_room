module.exports = application =>{
    application.post('/chat', function(req, res){
        application.app.controllers.chatBean.iniciaChat(application, req, res)
    })

    application.get('/chat', function(req, res){
        application.app.controllers.chatBean.iniciaChat(application, req, res)
    })

}