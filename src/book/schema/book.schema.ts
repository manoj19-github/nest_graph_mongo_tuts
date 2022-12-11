/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';
@Schema()
export class BookDB {
  @Prop()
  title: string;
  @Prop()
  published: string;
  @Prop()
  price: number;
  @Prop()
  author: string;
}

/* eslint-disable prettier/prettier */

@ObjectType()
export class BookDocument extends Document {
  @Field()
  title: string;
  @Field(() => Int)
  price: number;
  @Field()
  author: string;
  @Field()
  published: string;
  @Field()
  _id: string;
}

export const BookSchema = SchemaFactory.createForClass(BookDB);
