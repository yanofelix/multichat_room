module.exports = application =>{
    application.get('/', function(req, res){
        application.app.controllers.indexBean.home(application, req, res)
    })
}