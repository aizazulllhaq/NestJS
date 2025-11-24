import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './schemas/library.schema';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class LibraryService {

    constructor(
        @InjectModel(Library.name) private libraryModel: Model<Library>,
        @InjectModel(Book.name) private bookModel: Model<Book>
    ){};


    async createLibrary(): Promise<Library> {

        const newBook1 = await new this.bookModel({
            title: "The Great Gatsby 2",
            author: "F. Scott Fitzgerald"
        }).save();

        const newBook2 = await new this.bookModel({
            title: "To Kill a Mockingbird2",
            author: "Harper Lee"
        }).save();

        const newLibrary = new this.libraryModel({
            name: "City Library 2",
            book: [newBook1._id,newBook2._id]
        });

        return newLibrary.save();
    }


    async getLibraries(): Promise<Library[]> {
        return this.libraryModel.find().populate('book').exec();
    }

}
