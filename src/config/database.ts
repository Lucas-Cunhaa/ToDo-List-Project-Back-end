import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { Model } from 'sequelize'
import { models } from '../interface/models';
dotenv.config();

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDialect = process.env.DB_DIALECT;
const dbPort = process.env.DB_PORT;

if (!dbHost || !dbName || !dbUser || !dbPassword || !dbDialect || !dbPort) {
  throw new Error('Missing required environment variables');
}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect as 'postgres',
  port: Number(dbPort),
  logging: true,
});

export class SequelizeConnection {
  private sequelize: Sequelize;

  constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
    this.connectDataBase();
  }

  async connectDataBase() {
    try {
      await this.sequelize.authenticate();
      console.log("Database connection established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  async syncDatabase(model: typeof Model) {
    try {
      await model.sync({ alter: true });
      console.log(`${model} synchronized successfully.`);
    } catch (error) {
      console.error("Error synchronizing the database:", error);
    }
  }

  async syncModels() {
    try{
    models.Users.associate(models)
    models.Lists.associate(models)
    models.Tasks.associate(models)
  }
    catch (error) {
      console.error(error)
  }
    finally {
      console.log("Models updated")
    }

  }
  
 
}


const sequelizeConnection = new SequelizeConnection(sequelize);

export default sequelize;
export { sequelizeConnection };
