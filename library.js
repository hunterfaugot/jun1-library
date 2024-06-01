// Define the Book class
class Book {
  constructor(title, author, isbn, availableCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }
  // Method to borrow a book
  borrowBook() {
    if (this.availableCopies > 0) {
      this.availableCopies -= 1;
      console.log(`Borrow ${this.title}. Copies left: ${this.availableCopies}`);
    } else {
      console.log(`No copies of ${this.title} are available.`);
    }
  }
  // Method to return a book
  returnBook() {
    this.availableCopies += 1;
    console.log(`Returned ${this.title}. Copies available: ${this.availableCopies}`);
  }
}
// Define the Library class
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
    console.log(`Added ${book.title} to the library.`);
  }
  // Method to remove a book from the library by ISBN
  removeBook(isbn) {
    this.books = this.books.filter(book => book.isbn !== isbn);
    console.log(`Removed book with ISBN: ${isbn} from the library.`);
  }
  // Method to find a book by its title
  findBookByTitle(title) {
    const book = this.books.find(book => book.title === title);
    return book ? book : `Book with title ${title} not found.`;
  }
  // Method to list all books in the library
  listAllBooks() {
    console.log("Listing all books in the library:");
    this.books.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available Copies: ${book.availableCopies}`);
    });
  }
}

// Create book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456789", 3);
const book2 = new Book("1984", "George Orwell", "987654321", 2);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", "456789123", 4);

// Create library instance
const myLibrary = new Library("City Library");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// List all books
myLibrary.listAllBooks();

// Find a book by title
console.log(myLibrary.findBookByTitle("1984"));

// Borrow a book
book1.borrowBook();
book1.borrowBook();
book1.borrowBook();
book1.borrowBook(); // This should indicate no copies available

// Return a book
book1.returnBook();

// Remove a book by ISBN
myLibrary.removeBook("987654321");

// List all books again to see the updated library
myLibrary.listAllBooks();
