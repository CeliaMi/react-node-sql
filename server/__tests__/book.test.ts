import request from 'supertest'
import { app } from '../server'
import UserModel from '../models/UserModel'
import FileModel from '../models/FileModel'
import { tokenSign } from '../utils/handlejwt'
import db from '../database/db'
import BookModel from '../models/BookModel'
import { testAuthRegisterAdmin, testFile, testBookData } from './helpers/helperTestData'

describe("CRUD api/book" , ()=>{

  let FILE_URL = "";
  let JWT_TOKEN = "";
  let USER_ID = "";

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

    let dataNewBook = {}

    beforeEach(()=>{
       dataNewBook = { 
        ...testBookData, 
        file_url: FILE_URL ,
      };
    })

    test("When the user enters a book it should return a success message and the data", async () => {

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

      const res = await request(app)
        .post("/api/books")
        .set("Authorization", `Bearer ${JWT_TOKEN}`)
        .send(dataNewBook);
      const body = res.body;
      expect(body).toHaveProperty("body.id_user");  
    });
  })

  describe( 'GET /books', ()=> {

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

    describe( 'UPDATE /books', ()=> {

      let dataNewBook = {}
  
      beforeEach(()=>{
         dataNewBook = { 
          ...testBookData, 
          file_url: "www.newPic.com" ,
        };
      })
  
      test("When the user update a book it should return a update success message and the data", async () => {
        const createdBook = await BookModel.findOne({ where: { id_user: USER_ID }})
        const BOOK_ID = createdBook?.get('id')?.toString()
        const response = await request(app)
          .put(`/api/books/${BOOK_ID}`)
          .set("Authorization", `Bearer ${JWT_TOKEN}`)
          .send(dataNewBook);
        expect(response.statusCode).toEqual(201);
        expect(response.body.message).toContain("has been update successfully!")
        // expect(body.body.file_url).toContain("www.newPic.com");  
      });
      
    })

  })

  afterAll( async() => { 
    await BookModel.destroy({ where: { id_user: USER_ID }})
    await FileModel.destroy({ where: { id_user: USER_ID }})
    await UserModel.destroy({ where: { id: USER_ID } })
    await db.close();
 }); 

})