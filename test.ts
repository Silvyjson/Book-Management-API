import request from 'supertest';
import { app } from './src/index';
import mongoose from 'mongoose';
import BookModel from './src/models/book_model';

describe('Book Management API', () => {
    beforeAll(async () => {
        const MONGODB_URL = process.env.MONGODB_URL as string;

        await mongoose.connect(MONGODB_URL);
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    afterEach(async () => {
        await BookModel.deleteMany({});
    });

    it('should create a new book', async () => {
        const newBook = {
            title: 'Test Book',
            author: 'Test Author',
            publishedDate: '2023-01-01',
            ISBN: '123-456-789'
        };

        const response = await request(app)
            .post('/api/books')
            .send(newBook)
            .expect(201);

        expect(response.body.newBook).toHaveProperty('_id');
        expect(response.body.newBook.title).toBe(newBook.title);
        expect(response.body.newBook.author).toBe(newBook.author);
    });

    it('should update book cover image', async () => {
        const book = new BookModel({ title: 'Book 1', author: 'Author 1', publishedDate: '2023-01-01', ISBN: '111-111-111' });
        await book.save();

        const coverImageUrl = { coverImageUrl: 'http://example.com/cover.jpg' };

        const response = await request(app)
            .patch(`/api/books/cover-image/${book._id}`)
            .send(coverImageUrl)
            .expect(200);

        expect(response.body.coverImageUrl).toBe(coverImageUrl.coverImageUrl);
    });

    it('should return all books', async () => {
        const books = [
            { title: 'Book 1', author: 'Author 1', publishedDate: '2023-01-01', ISBN: '111-111-111' },
            { title: 'Book 2', author: 'Author 2', publishedDate: '2023-01-02', ISBN: '222-222-222' }
        ];
        await BookModel.insertMany(books);

        const response = await request(app).get('/api/books').expect(200);

        expect(response.body.books.length).toBe(2);
    });

    it('should return a single book by ID', async () => {
        const book = new BookModel({ title: 'Book 1', author: 'Author 1', publishedDate: '2023-01-01', ISBN: '111-111-111' });
        await book.save();

        const response = await request(app).get(`/api/books/${book._id}`).expect(200);

        expect(response.body.book.title).toBe(book.title);
    });

    it('should update a book by ID', async () => {
        const book = new BookModel({ title: 'Book 1', author: 'Author 1', publishedDate: '2023-01-01', ISBN: '111-111-111' });
        await book.save();

        const updatedData = { title: 'Updated Book 1', author: 'Updated Author 1' };

        const response = await request(app)
            .put(`/api/books/${book._id}`)
            .send(updatedData)
            .expect(200);

        expect(response.body.updatedBook.title).toBe(updatedData.title);
        expect(response.body.updatedBook.author).toBe(updatedData.author);
    });

    it('should delete a book by ID', async () => {
        const book = new BookModel({ title: 'Book 1', author: 'Author 1', publishedDate: '2023-01-01', ISBN: '111-111-111' });
        await book.save();

        await request(app).delete(`/api/books/${book._id}`).expect(200);

        const foundBook = await BookModel.findById(book._id);
        expect(foundBook).toBeNull();
    });
});
