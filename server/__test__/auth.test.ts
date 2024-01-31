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

    test("should be return 201", async()=> {
        const response = await request(app).post('/api/register')
        .send(testAuthRegister)
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty("sesiondata")
    })

    test("when user doesnt exist should be return 403", async()=> {
        const response = await request(app).post('/api/login')
        .send(UnregisteredUser)
        expect(response.statusCode).toEqual(404)
        // expect(response.body).toHaveProperty("error")
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