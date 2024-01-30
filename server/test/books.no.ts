import request from 'supertest'
import { app } from '../server'
import UserModel from '../models/UserModel'
import FileModel from '../models/FileModel'
import { tokenSign } from '../utils/handlejwt'
import db from '../database/db'

let FILE_NAME = "";
let JWT_TOKEN = "";
let USER_ID = "";

const testAuthRegisterAdmin = {
    "name":"userTest",
    "email": "test@test.com",
    "password": "123456789",
    "role": "admin"
}
const testFile ={
    url: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    filename: "file-test.jpg",
}

const testBookData = {
        title: "test title",
        writer: "test writer",
        book_description: "test description",
  };

  afterAll( () => { 
        db.close();
 }); 

beforeAll(async () => {
    await UserModel.destroy({where:{ email: testAuthRegisterAdmin.email}});
    await FileModel.destroy({where:{ filename: testFile.filename}});
    const user = await UserModel.create(testAuthRegisterAdmin);
    USER_ID  = user?.get('id')?.toString() as string;
    const testFileRegister = {  ...testFile, 
        id_user: USER_ID };
    const file = await FileModel.create(testFileRegister);
    FILE_NAME  = file?.get('name')?.toString() as string;
   
    JWT_TOKEN = await tokenSign(user);
  });

  test("deberia registra un libro", async () => {
    const dataNewBook = { 
      ...testBookData, 
      file_url: FILE_NAME ,
    };
  
    const res = await request(app)
      .post("/api/books")
      .set("Authorization", `Bearer ${JWT_TOKEN}`)
      .send(dataNewBook);
    // const body = res.body;
    expect(res.statusCode).toEqual(201);
    // expect(body).toHaveProperty("data");
    // expect(body).toHaveProperty("data.name");
    // expect(body).toHaveProperty("data.artist");
    // expect(body).toHaveProperty("data.cover");
  });
  