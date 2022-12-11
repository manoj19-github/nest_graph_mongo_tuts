/* eslint-disable prettier/prettier */
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class AddBookArgs {
  @Field()
  title: string;
  @Field((type) => Int)
  price: number;
  @Field()
  author: string;
  @Field()
  published: string;
}
