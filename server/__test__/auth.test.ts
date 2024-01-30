import request from 'supertest'
import { app, server } from '../server'
import db from '../database/db'
 import UserModel from '../models/UserModel'


const testAuthLogin = {
    "email": "test@test.com",
    "password": "123456789"
}

const testAuthRegister = {
    "name":"userTest",
    "email": "test@test.com",
    "password": "123456789"
}

describe("AUTH api/auth" , ()=>{

    beforeAll(async () => {
            await UserModel.destroy({where:{ email: testAuthLogin.email}});
          });
        afterAll( () => { 
                server.close()
                db.close();
         }); 

    test("should be return 201", async()=> {
        const response = await request(app).post('/api/register')
        .send(testAuthRegister)
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty("sesiondata")
    })

})