import dotenv from 'dotenv';
import { Sequelize } from 'sequelize'

dotenv.config(); 

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDialect = process.env.DB_DIALECT
const dbPort = process.env.DB_PORT

if (!dbHost || !dbName || !dbUser || !dbPassword || !dbDialect || !dbPort) {
  throw new Error('Missing required environment variables');
}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect as 'postgres',
    port: Number(dbPort) , 
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