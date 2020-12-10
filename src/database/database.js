const Sequelize = require('sequelize')
const confiConnect = require('../config/database')

const connection = new Sequelize(confiConnect);


module.exports = connection;