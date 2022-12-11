/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Int, Mutation, ID } from '@nestjs/graphql';
import { BookDB, BookDocument } from './schema/book.schema';
import { BookDocument as BookModel } from '../graphql';

import { BookService } from './book.service';
import { AddBookArgs, UpdateBookArgs } from './args/add.book.args';
@Resolver((of) => BookDocument)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}
  // queries and mutation
  // @Query((returns) => [Book], { name: 'books' })
  // getAllBooks(): BookModel[] {
  //   return this.bookService.getAllBooks();
  // }
  // @Query((returns) => Book, { name: 'findBookById', nullable: true })
  // getBookId(@Args({ name: 'bookId', type: () => Int }) id: number): BookModel {
  //   return this.bookService.getBookById(id);
  // }
  // @Mutation((returns) => String, { name: 'deleteBook' })
  // deleteBookById(
  //   @Args({ name: 'bookId', type: () => Int }) id: number,
  // ): string {
  //   return this.bookService.deleteBookById(id);
  // }
  @Query(() => [BookDocument], { name: 'books' })
  getAllBooks(): Promise<BookModel[]> {
    return this.bookService.getAllBooks();
  }
  @Mutation((returns) => BookDocument, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs): Promise<BookModel> {
    return this.bookService.addBook(addBookArgs);
  }
  @Query((returns) => BookDocument, { name: 'findBookById', nullable: true })
  getBookById(
    @Args({ name: 'bookId', type: () => ID }) bookId: string,
  ): Promise<BookModel> {
    return this.bookService.findBookById(bookId);
  }
  @Mutation((returns) => BookDocument, { name: 'editBook' })
  editBookById(
    @Args('updatetBookArgs') updateBookArgs: UpdateBookArgs,
  ): Promise<BookModel> {
    return this.bookService.editBook(updateBookArgs);
  }
}
