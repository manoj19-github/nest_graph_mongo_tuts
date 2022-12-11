import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { BookDB, BookSchema } from './schema/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BookDB.name, schema: BookSchema }]),
  ],
  controllers: [],
  providers: [BookResolver, BookService],
})
export class BookModule {}
