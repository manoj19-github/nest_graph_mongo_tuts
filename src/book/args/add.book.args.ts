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

@InputType()
export class UpdateBookArgs {
  @Field()
  _id: string;
  @Field({ nullable: true })
  title: string;
  @Field(() => Int, { nullable: true })
  price: number;
  @Field({ nullable: true })
  author: string;
  @Field({ nullable: true })
  published: string;
}
