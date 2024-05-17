import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }
  findById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  create(book: Partial<Book>): Book {
    const newId = books[books.length - 1].id + 1;

    const newBook: Book = {
      id: newId,
      author: book.author ?? '',
      year: book.year ?? 0,
      title: book.title ?? '',
    };
    books.push(newBook);
    return newBook;
  }

  update(bookId: number, updatedBookFields: Partial<Book>): Book | undefined {
    const currentBook = books.find((book) => book.id === bookId);
    const updatedBook: Book = {
      id: bookId,
      title: updatedBookFields.title ?? currentBook.title,
      author: updatedBookFields.author ?? currentBook.author,
      year: updatedBookFields.year ?? currentBook.year,
    };

    books[books.indexOf(currentBook)] = updatedBook;

    return updatedBook;
  }

  delete(bookId: number): Book[] {
    books.splice(
      books.findIndex((book) => book.id === bookId),
      1,
    );
    return books;
  }
}
