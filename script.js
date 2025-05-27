// Initialize default books if localStorage is empty
function initializeBooks() {
    const defaultBooks = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: 14.99,
            cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: 12.99,
            cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            price: 13.99,
            cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 4,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            price: 11.99,
            cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 5,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            price: 15.99,
            cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 6,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            price: 12.99,
            cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
    ];

    // Check if books exist in localStorage
    if (!localStorage.getItem('books')) {
        localStorage.setItem('books', JSON.stringify(defaultBooks));
    }
}

// Function to create book cards
function createBookCard(book) {
    return `
        <div class="col-md-4">
            <div class="card book-card">
                <img src="${book.cover}" class="book-cover" alt="${book.title}">
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">by ${book.author}</p>
                    <p class="book-price">$${book.price.toFixed(2)}</p>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteBook(${book.id})">Delete</button>
                        <a href="add-book.html" class="btn btn-sm btn-outline-primary">Edit</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to display books
function displayBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const booksContainer = document.getElementById('books-container');
    
    if (books.length === 0) {
        booksContainer.innerHTML = `
            <div class="col-12 text-center">
                <p>No books found. Add your first book!</p>
                <a href="add-book.html" class="btn btn-primary">Add Book</a>
            </div>
        `;
        return;
    }
    
    const booksHTML = books.map(book => createBookCard(book)).join('');
    booksContainer.innerHTML = booksHTML;
}

// Function to delete a book
function deleteBook(bookId) {
    if (confirm('Are you sure you want to delete this book?')) {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books = books.filter(book => book.id !== bookId);
        localStorage.setItem('books', JSON.stringify(books));
        displayBooks();
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeBooks();
    displayBooks();
}); 