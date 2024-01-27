import db from "../database/db";
import { DataTypes, Model } from "sequelize";
import { BookAttributes } from "../interfaces/bookInterface";


// interface ValidationMsg {
//     msg: string;
//     args?: readonly [number, number] | { min?: number; max?: number; msg: string };
//   }

 interface BookModel extends Model<BookAttributes>, BookAttributes{}

const BookModel = db.define('books', {

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'el campo title campo no puede estar vacío'
            },
            // len: {
            //     min: [2],
            //     msg: 'el campo title no permite menos de 2 caracteres'
            // }
        }
    },
    writer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'este campo no puede estar vacío'
            },
            // len: {
            //     min: 2,
            //     msg: 'este campo no permite menos de 2 caracteres'
            // }
        }
    },

    book_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'este campo no puede estar vacío'
            },
            // min: {
            //     args: 10,
            //     msg: 'este campo no permite menos de 10 caracterés'
            // }
        }
    },
    file_url: {
        type: DataTypes.STRING,
        allowNull: true,
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
//     console.log("All models were synchronized successfully.");
// })();

export default BookModel