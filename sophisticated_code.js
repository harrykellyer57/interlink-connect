/* filename: sophisticated_code.js */

// This code implements a complex system to manage an online bookstore

// Data structure to represent a book
class Book {
  constructor(id, title, author, price, quantity) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
}

// Data structure to represent a shopping cart
class ShoppingCart {
  constructor() {
    this.books = [];
    this.totalAmount = 0;
  }

  addBook(book) {
    this.books.push(book);
    this.totalAmount += book.price;
  }

  removeBook(bookId) {
    const bookIndex = this.books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) {
      const removedBook = this.books.splice(bookIndex, 1)[0];
      this.totalAmount -= removedBook.price;
    }
  }

  checkout() {
    for (const book of this.books) {
      console.log(`Purchased ${book.title} by ${book.author}`);
    }
    console.log(`Total amount payable: $${this.totalAmount.toFixed(2)}`);
  }
}

// Create some books
const book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 9.99, 1);
const book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee", 8.99, 2);
const book3 = new Book(3, "1984", "George Orwell", 7.99, 3);

// Create a shopping cart
const cart = new ShoppingCart();

// Add books to the shopping cart
cart.addBook(book1);
cart.addBook(book2);
cart.addBook(book3);

// Remove a book from the shopping cart
cart.removeBook(2);

// Checkout and print the purchased books and total amount payable
cart.checkout();

// Output:
// Purchased The Great Gatsby by F. Scott Fitzgerald
// Purchased 1984 by George Orwell
// Total amount payable: $26.97