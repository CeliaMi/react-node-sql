import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_TEST_NAME, DB_PASSWORD,DB_USER, NODE_ENV  } from "../utils/config";
const DB_NAME = NODE_ENV === 'test'? DB_TEST_NAME: DB_DEV_NAME

const db = new Sequelize(DB_NAME , DB_USER, DB_PASSWORD, {
		host: 'localhost',
		dialect: 'mysql',
		define: {
			timestamps: false 
		}
}) 

export default db;