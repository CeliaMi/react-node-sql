import request from 'supertest'
import { app } from '../server'
import UserModel from '../models/UserModel'
import db from '../database/db'


const testAuthLogin = {
    "email": "test@test1.com",
    "password": "123456789"
}

const testAuthRegister = {
    "name":"userTest",
    "email": "test@test1.com",
    "password": "123456789"
}

describe("AUTH api/auth" , ()=>{

    beforeAll(async () => {
        await db.authenticate()
            // await UserModel.destroy({where:{ email: testAuthLogin.email}});
          });

    test("should be return 201", async()=> {
        const response = await request(app).post('/api/register')
        .send(testAuthRegister)
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty("sesiondata")
    })

    afterAll( async () => { 
        const userEmail = testAuthLogin.email
        const USER_EMAIL = userEmail.toString()
        await  UserModel.destroy({where:{ email: USER_EMAIL}  })
        await db.close();    
     }); 

})