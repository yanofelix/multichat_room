module.exports = application =>{
    application.get('/', function(req, res){
        res.render('index')
    })
}