import { Schema, model, Document } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: string;
    publishedDate: Date;
    ISBN: string;
    coverImageUrl: string;
}

const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    ISBN: { type: String, required: true, unique: true },
    coverImageUrl: { type: String }
});

const BookModel = model<IBook>('Book', bookSchema);

export default BookModel;
