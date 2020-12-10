const Sequelize = require('sequelize');

class Image extends Sequelize.Model{
   static init(sequelize){
       super.init({
           filename: {
               type: Sequelize.STRING,      
           },
           originalname:{
            type: Sequelize.STRING,
           },
       }, {sequelize})
   }

}

module.exports = Image;