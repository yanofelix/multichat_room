module.exports.iniciaChat = (application, req, res) => {

    const data = req.body
    
    req.assert('apelido', 'Apelido Deve Ser Preenchido').notEmpty()
    req.assert('apelido', 'Apelido Deve Conter entre 3 e 12 caracteres').len(3, 12)

    const erros = req.validationErrors()

    if(erros){
        res.render('index', {validacao : erros})
        return
    }

    res.render('chat')
}