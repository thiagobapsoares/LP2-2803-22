module.exports  = (app)=>{

    //importar o config database
    var database = require('../config/database')
    //importar o model gallery
    var gallery = require('../models/gallery')

    //exibir o formulário gallery.ejs
    app.get('/gallery',async(req,res)=>{
        //conectar com o database
        database()
        //executar a busca de documentos da coleção gallery
        var documentos = await gallery.find() 
        res.render('gallery.ejs',{dados:documentos})
    })

    //importar a config do multer
    var multer = require('../config/multer')
    //upload do arquivo
    app.post('/gallery',multer.single('imagem'),async(req,res)=>{
        //conectar ao database
        database()
        //gravar o nome do arquivo na coleção gallery
        var documento = await new gallery({
            arquivo:req.file.filename
        }).save()
        res.redirect('/gallery')
    })
}