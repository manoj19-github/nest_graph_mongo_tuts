/* eslint-disable prettier/prettier */
export interface IBookData {
  title: string;
  price: number;
  author: string;
  published: string;
}
export interface IEditBookData {
  _id: string;
  title?: string;
  price?: number;
  author?: string;
  published?: string;
}
