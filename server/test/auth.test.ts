import request from 'supertest'
import { app } from '../server'
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
    // afterAll( () => { 
    //             db.close();
    //      }); 
    beforeAll(async () => {
            await UserModel.destroy({where:{ email: testAuthLogin.email}});
          });
    

    // test("should be return 404", async()=> {
    //     const response = await request(app).post('/api/login')
    //     .send(testAuthLogin )
    //     expect(response.statusCode).toEqual(404)
    //     // expect(response.body).toHaveProperty("error")
    // })

    test("should be return 201", async()=> {
        const response = await request(app).post('/api/register')
        .send(testAuthRegister)
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty("sesiondata")
    })

})
