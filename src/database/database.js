const Sequelize = require('sequelize')
const confiConnect = require('../config/database')
const Image = require('../models/Image');

const connection = new Sequelize(confiConnect);

Image.init(connection)

module.exports = connection;