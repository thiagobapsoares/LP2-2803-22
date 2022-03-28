//importar o pacote multer
const multer = require('multer')

//configurar o armazenamento
const armazenamento = multer.diskStorage(
    {
        //pasta de destino
        destination:(req,file,cb)=>{
            cb(null,'./assets/images')
        },
        //nome do arquivo
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)

var upload = multer({storage:armazenamento})

module.exports = upload 