
const Sequelize = require('sequelize');
const sequelize = new Sequelize('to_do_project', 'postgrees', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    logging: true, // Desative o log para produção
  });
  
  class SequelizeConnection  {

     constructor(sequelize : any) {
        this.connectDataBase() ;
        this.syncDatabase() ;
  }

    async connectDataBase() {
        try {
            await sequelize.authenticate();
            console.log("connected");
          } catch (error) {
            console.error(error);
          }
    }
    
  }
 
  module.exports = sequelize;