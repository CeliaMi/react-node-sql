import request from 'supertest'
import { app, server } from '../server'
import db from '../database/db'
// import BookModel from '../models/BookModel'
// import { Request, Response } from "express";


// describe('Test Api books', () => {
   
//     describe('GET /books', ()=>{
//         let response : any;
//         beforeEach( async() => {
//         response = await request(app).get('/books').send()
//         })

//         test('should return a response with status 200 and type json', async() => {
//             // const response = await request(app).get('/books').send()
// 						expect(response.status).toBe(200);
//                         const fetchheaders = response.header
//             expect(fetchheaders['content-type']).toContain('json');
//         })

//         // test('should return all books', async() => {
//         //     expect(response.body).toBeInstanceOf(Array);
//         // })
    
//     })

//     // describe('POST /books',() =>{ 

//     //     const newBook = {
//     //         title: "test",
//     //         writer: "test",
//     //         book_description: "test",
//     //     }

//     //     const wrongBook = {
//     //         wrong_field:'test'
//     //     }

//     //     test('should return a response with status 200 and type json', async () =>{
//     //         const response = await request(app).post('/books').send(newBook)
//     //         expect(response.status).toBe(200)
//     //         expect(response.headers['content-type']).toContain('json')
// 	// 					//expect(response.body).toHaveLength(3); //para la segunda fase de la clase ( eliminando todo antes)
//     //     });

//     //     test('should return a message book created successfully', async () =>{
//     //         const response = await request(app).post('/books').send(newBook)
//     //         expect(response.body.message).toContain("The book has been created successfully!")
//     //     })

//     //     test('should return a message insertion error If post wrong book ', async () =>{
//     //         const response = await request(app).post('/books').send(wrongBook)
//     //         expect(response.status).toBe(500);
//     //         expect(response.body.message).toContain("Field 'title' doesn't have a default value")
//     //     })

//     //     afterAll(async() =>{
//     //         await BookModel.destroy({where:{ title: 'test'}})
//     //     })

//     // })

//     // describe('PUT /books', () =>{
//     //     let createdBook = {};
//     //     beforeEach(async () => {
//     //         createdBook = await BookModel.create({ 
//     //             title: "test",
//     //             writer: "test",
//     //             book_description: "test",
//     //         });
//     //     });

//     //     afterAll(async() =>{

//     //         await BookModel.destroy({where:{ id: createdBook.id}})
//     //     })

//     //     test('should return a response with status 201 and update successfully', async () => {
//     //         const response = await request(app).put(`/books/${createdBook.id}`).send({title: "update test"});
//     //         expect(response.status).toBe(201);
//     //         expect(response.body.message).toContain("The book has been updated successfully!")
//     //     })
//     // })

//     // describe('DELETE /Books', () =>{
//     //     let createdBook = {};
//     //     let response : any;
//     //     beforeEach(async () => {
//     //         createdBook = await BookModel.create({ 
//     //             title: "test",
//     //             writer: "test",
//     //             book_description: "test",
//     //         });

//     //     response = await request(app).delete(`/books/${createdBook.id}`).send();
//     //     });

//     //     test('should return a response with status 200 and type json', () => {
//     //         expect(response.status).toBe(200);
//     //         expect(response.headers['content-type']).toContain('json');
//     //     });

//     //     test('should return a message book deleted successfully', async () => {
//     //         expect(response.body.message).toContain("The book has been deleted successfully!");
//     //         const foundBook = await BookModel.findOne({where:{ id: createdBook.id}});
//     //         expect(foundBook).toBeNull();
//     //     })


//     //})
    
//     afterAll( () => { 
//         db.close();
//        server.close(); 
//    }); 

// })