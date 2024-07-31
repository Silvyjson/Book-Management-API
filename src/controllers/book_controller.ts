import { Request, Response } from 'express';
import BookModel from '../models/book_model';

const handleCreateBook = async (req: Request, res: Response) => {
    try {
        const { title, author, publishedDate, ISBN } = req.body;

        if (!title || !author || !publishedDate || !ISBN) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newBook = new BookModel({ title, author, publishedDate, ISBN });
        await newBook.save();
        res.status(201).json({ message: "The new book is uploaded successfully", newBook });
    } catch (error: any) {
        res.status(400).json({ error_message: error.message });
    }
};

const handleUpdateBookCover = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { coverImageUrl } = req.body;

        if (!coverImageUrl) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const updatedBook = await BookModel.findByIdAndUpdate(id, { coverImageUrl }, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error: any) {
        res.status(400).json({ error_message: error.message });
    }
};

const handleGetAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await BookModel.find()

        const formattedBooks = books.map(post => ({
            id: post._id,
            coverImageUrl: post.coverImageUrl,
            title: post.title,
            author: post.author,
            publishedDate: post.publishedDate,
            ISBN: post.ISBN,
        }));

        return res.status(200).json({ books: formattedBooks });
    } catch (error: any) {
        return res.status(500).json({ error_message: error.message });
    }
};

const handleGetSingleBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.id;

        const book = await BookModel.findById(bookId)

        if (!book) {
            return res.status(404).json({ message: 'book not found' });
        }

        return res.status(200).json({
            book
        });
    } catch (error: any) {
        return res.status(500).json({ error_message: error.message });
    }
};

const handleUpdateBook = async (req: Request, res: Response) => {

    try {
        const id = req.params.id;
        const { title, author, publishedDate, ISBN, coverImageUrl } = req.body;

        const updatedBook = await BookModel.findByIdAndUpdate(id, { title, author, publishedDate, ISBN, coverImageUrl }, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ updatedBook });
    } catch (error: any) {
        res.status(500).json({ error_message: error.message });
    }
};

const handleDeleteBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const book = await BookModel.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error_message: error.message });
    }
};



export { handleCreateBook, handleUpdateBookCover, handleGetAllBooks, handleGetSingleBook, handleUpdateBook, handleDeleteBook };
