const multer = require('multer');
const { resolve, extname } = require('path');

const aleatorio = Math.floor(Math.random() * 1000 + 1);

module.exports = {
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
            return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'));
        }
        if(file == undefined){
            return cb(new multer.MulterError('Você esqueceu de selecionar o arquivo.'));
        }

        return cb(null, true);
    },
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, resolve(__dirname, '..','..', 'uploads'))
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${aleatorio}${extname(file.originalname)}`)
        }
    })
}

