import request from 'supertest'
import { app } from '../server'
import UserModel from '../models/UserModel'
import FileModel from '../models/FileModel'
import { tokenSign } from '../utils/handlejwt'
import db from '../database/db'
import BookModel from '../models/BookModel'

describe("CRUD api/book" , ()=>{

  let FILE_URL = "";
  let JWT_TOKEN = "";
  let USER_ID = "";

  const testAuthRegisterAdmin = {
      "name":"userTest",
      "email": "test@booktest15.com",
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


  beforeAll(async () => {
    await db.authenticate()
      const user = await UserModel.create(testAuthRegisterAdmin);
      USER_ID = await  user?.get('id')?.toString() as string;
      const testFileRegister = {  ...testFile, 
          id_user: USER_ID };
      const file = await FileModel.create(testFileRegister);
      FILE_URL = await file?.get('url')?.toString() as string; 
      JWT_TOKEN = await tokenSign(user);
    });

  describe( 'POST /books', ()=> {
  test("When the user enters a book it should return a success message and the data", async () => {
    const dataNewBook = { 
      ...testBookData, 
      file_url: FILE_URL ,
    };
    const response = await request(app)
      .post("/api/books")
      .set("Authorization", `Bearer ${JWT_TOKEN}`)
      .send(dataNewBook);
    const body = response.body;
    expect(response.statusCode).toEqual(201);
    expect(response.body.message).toContain( "has been created successfully!")
    expect(body).toHaveProperty("body.book_description");  
  });


  test("When the user enters a book it has to be automatically associated with their user ID", async () => {
    const dataNewBook = { 
      ...testBookData, 
      file_url: FILE_URL ,
    };
    const res = await request(app)
      .post("/api/books")
      .set("Authorization", `Bearer ${JWT_TOKEN}`)
      .send(dataNewBook);
    const body = res.body;
    expect(body).toHaveProperty("body.id_user");  
  });
  })

  describe( 'GET /books', ()=>{

    test('When the user makes a get request it returns a list of books', async ()=>{
        const response = await request(app)
        .get("/api/books")
        .set("Authorization", `Bearer ${JWT_TOKEN}`)
        expect(response.statusCode).toEqual(200);
        expect(response.body.books).toBeInstanceOf(Array);
    })

    test('When the user makes a get request it with a book id returns one book', async ()=>{
      const createdBook = await BookModel.findOne({ where: { id_user: USER_ID }})
      const BOOK_ID = createdBook?.get('id')?.toString()
      const response = await request(app)
      .get(`/api/books/${BOOK_ID}`)
      .set("Authorization", `Bearer ${JWT_TOKEN}`)
      expect(response.statusCode).toEqual(200);
  })


  })

  afterAll( async() => { 
    await BookModel.destroy({ where: { id_user: USER_ID }})
    await FileModel.destroy({ where: { id_user: USER_ID }})
    await UserModel.destroy({ where: { id: USER_ID } })
    await db.close();
 }); 

})