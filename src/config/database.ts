import dotenv from 'dotenv';
const p = process.env 
const dbHost = p.DB_HOST;
const dbName = p.DB_NAME;
const dbUser = p.DB_USER;
const dbPassword = p.DB_PASSWORD
const dbDialect = p.DB_DIALECT
dotenv.config(); 

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect,
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

    async syncDatabase() {
        try{
          await sequelize.sync( {alter:true} )
        } catch (error) {
          console.error(error)
        }
    }

  }
  const connection = new SequelizeConnection(sequelize)
  export default connection