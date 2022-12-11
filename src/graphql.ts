
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    title: string;
    price: number;
    author: string;
    published: string;
}

export interface UpdateBookArgs {
    _id: string;
    title?: Nullable<string>;
    price?: Nullable<number>;
    author?: Nullable<string>;
    published?: Nullable<string>;
}

export interface BookDocument {
    title: string;
    price: number;
    author: string;
    published: string;
    _id: string;
}

export interface IQuery {
    books(): BookDocument[] | Promise<BookDocument[]>;
    findBookById(bookId: string): Nullable<BookDocument> | Promise<Nullable<BookDocument>>;
}

export interface IMutation {
    addBook(addBookArgs: AddBookArgs): BookDocument | Promise<BookDocument>;
    editBook(updatetBookArgs: UpdateBookArgs): BookDocument | Promise<BookDocument>;
}

type Nullable<T> = T | null;
