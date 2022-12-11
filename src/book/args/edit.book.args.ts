/* eslint-disable prettier/prettier */
import { InputType, Field, Int } from '@nestjs/graphql';

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
