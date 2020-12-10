const multer = require('multer');
const storage = require('../middlewares/middlewareMulter')
const Image = require('../models/Image');

const upload = multer(storage).single('file')

exports.Index = (req, res) => {
    res.status(200).json({ saudações: 'Bem vindo a esta api-rest' })
}
exports.uploadView = (req, res) => {
    res.render('index')
}

exports.Store = (req, res) => {
    return upload(req, res, async (erro) => {
        if (erro) {
            res.status(400).json({
                errors: [erro.code]
            })
        }
        try {
            const { filename, originalname } = req.file;
            const resp = await Image.create({ filename, originalname })
            console.log(resp)
        } catch (error) {
            res.status(400).json({
                errors: 'Imagem não pode ser enviada',
            })
        }
        res.status(200).json(req.file);
    })

}
