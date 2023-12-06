/*
Filename: SophisticatedCode.js

This code is an example of a complex implementation that simulates a virtual library management system with multiple functionalities like adding and deleting books, searching for books by title or author, and displaying the list of books in the library.

*/

class Book {
  constructor(title, author, year, isbn) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isbn = isbn;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(isbn) {
    this.books = this.books.filter(book => book.isbn !== isbn);
  }

  searchByTitle(title) {
    return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchByAuthor(author) {
    return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  displayBooks() {
    this.books.forEach(book => {
      console.log(`${book.title} by ${book.author}`);
    });
  }
}

// Creating Library instance
const library = new Library();

// Adding books
library.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937, "978-0007458424"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960, "978-0446310789"));
library.addBook(new Book("1984", "George Orwell", 1949, "978-0452284234"));
library.addBook(new Book("Pride and Prejudice", "Jane Austen", 1813, "978-0141439518"));
library.addBook(new Book("Wuthering Heights", "Emily Brontë", 1847, "978-0141040356"));
library.addBook(new Book("Moby-Dick", "Herman Melville", 1851, "978-1853260087"));

// Displaying all books in the library
console.log("All Books in the Library:");
library.displayBooks();

// Searching books by title
console.log("\nSearching for books with 'pride' in the title:");
const prideBooks = library.searchByTitle("pride");
prideBooks.forEach(book => {
  console.log(`${book.title} by ${book.author}`);
});

// Searching books by author
console.log("\nSearching for books by 'tOLKIEN' (case-insensitive):");
const tolkienBooks = library.searchByAuthor("tOLKIEN");
tolkienBooks.forEach(book => {
  console.log(`${book.title} by ${book.author}`);
});

// Removing a book
console.log("\nRemoving 'To Kill a Mockingbird' from the library.");
library.removeBook("978-0446310789");

// Displaying all books in the library after removal
console.log("\nAll Books in the Library after Removal:");
library.displayBooks();

// Searching books by title again
console.log("\nSearching for books with 'hobbit' in the title:");
const hobbitBooks = library.searchByTitle("hobbit");
hobbitBooks.forEach(book => {
  console.log(`${book.title} by ${book.author}`);
});

// Searching books by author again
console.log("\nSearching for books by 'Orwell' (author):");
const orwellBooks = library.searchByAuthor("Orwell");
orwellBooks.forEach(book => {
  console.log(`${book.title} by ${book.author}`);
});

// Displaying all books in the library (final list)
console.log("\nAll Books in the Library (Final List):");
library.displayBooks();

// End of code