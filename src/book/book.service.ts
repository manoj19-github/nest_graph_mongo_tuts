import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument as BookModel } from '../graphql';
import { IBookData, IEditBookData } from './entity/book.entity';
import { BookDB, BookDocument } from './schema/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(BookDB.name) private bookModel: Model<BookDocument>,
  ) {}
  //   getAllBooks(): BookModel[] {}
  //   getBookById(id: number): BookModel | undefined {
  //     const findBook = this.arrr.find((self) => self._id === id);
  //     return findBook;
  //   }
  //   deleteBookById(id: number) {
  //     const newData = this.arrr.filter((self) => self._id !== id);
  //     this.arrr = newData;
  //     return 'your not bok not found';
  //   }
  async addBook(bookdata: IBookData): Promise<BookModel> {
    const newBook = new this.bookModel({
      title: bookdata.title,
      price: bookdata.price,
      author: bookdata.author,
      published: bookdata.published,
    });
    return await newBook.save();
  }
  async getAllBooks(): Promise<BookModel[]> {
    return await this.bookModel.find();
  }
  async findBookById(bookId: string): Promise<BookModel> {
    return await this.bookModel.findById(bookId);
  }
  async editBook(editbookPayload: IEditBookData): Promise<BookModel> {
    const editableId = editbookPayload._id;
    delete editbookPayload._id;
    return await this.bookModel.findByIdAndUpdate(
      { _id: editableId },
      { ...editbookPayload },
      { new: true },
    );
  }
}
