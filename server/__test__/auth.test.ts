import request from 'supertest'
import { app } from '../server'
import UserModel from '../models/UserModel'
import db from '../database/db'


const UnregisteredUser = {
    "email": "Login@test.com",
    "password": "123456789"
}

const testAuthRegister = {
    "name":"userTest",
    "email": "Register@test.test",
    "password": "123456789"
}

describe("AUTH api/auth" , ()=>{

    beforeAll(async () => {
        await db.authenticate()
            // await UserModel.destroy({where:{ email: testAuthLogin.email}});
          });

    test("When the user makes a successful registration should be return 201", async()=> {
        const response = await request(app).post('/api/register')
        .send(testAuthRegister)
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty("sesiondata")
    })

    test("When the user login with an incorrect password it throws an error PASSWORD_INVALID", async () => {
        const newTestAuthLogin = {...testAuthRegister, password:"wrong password"}
        const response = await request(app)
          .post("/api/login")
          .send(newTestAuthLogin);
        expect(response.statusCode).toEqual(401);
        expect(response.body.error).toContain("PASSWORD_INVALID")
       
      });

    test("when user doesn't exist throws an error USER_NOT_EXISTS", async()=> {
        const response = await request(app).post('/api/login')
        .send(UnregisteredUser)
        expect(response.statusCode).toEqual(404)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toContain("USER_NOT_EXISTS")
    })


    afterAll( async () => { 
        const userEmail = testAuthRegister.email
        const USER_EMAIL = userEmail.toString()
        await  UserModel.destroy({where:{ email: USER_EMAIL}  })  
        await db.close();  
     });

    //  afterEach(async () => { 
    //     await db.close();  
    //  })

})