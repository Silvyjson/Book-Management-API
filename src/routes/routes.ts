import { Router } from 'express';
import { handleCreateBook, handleUpdateBookCover, handleGetAllBooks, handleGetSingleBook, handleUpdateBook, handleDeleteBook, } from '../controllers/book_controller';

const router = Router();

router.post('/books', handleCreateBook)

router.patch('/books/cover-image/:id', handleUpdateBookCover)

router.get('/books', handleGetAllBooks)

router.get('/books/:id', handleGetSingleBook)

router.put('/books/:id', handleUpdateBook)

router.delete('/books/:id', handleDeleteBook)


export default router;
