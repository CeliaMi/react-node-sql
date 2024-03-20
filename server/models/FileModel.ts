import db from "../database/db";
import { DataTypes, Model } from "sequelize";
// import  { UserAttributes }  from '../interfaces/userInterface'


// interface UserModel extends Model<UserAttributes>, UserAttributes{}

const FileModel = db.define('files', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    filename: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', 
          key: 'id',
        },
    }
}, {
    timestamps: false
});
// (async () => {
//     await db.sync();
//      console.log("All models were synchronized desde File.");
// })();

export default FileModel