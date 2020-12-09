const multer = require('multer');
const storage = require('../middlewares/middlewareMulter')

const upload = multer(storage).single('file')

exports.Index = (req, res) => {
    res.status(200).json({ saudações: 'Bem vindo a esta api-rest'})
}

exports.Store =  (req, res) => {
    return upload(req, res, erro =>{
        if(erro){
            res.status(400).json({
                errors: [erro.code]
            })
        }  
        res.status(200).json(req.file);
    } )

}