Book Management API

A basic CRUD (Create, Read, Update, Delete) API for managing a simple "Books" collection. This project uses Node.js, Express.js, TypeScript, MongoDB, and implements unit and integration tests.

Table of Contents

- [Prerequisites](prerequisites)
- [Installation](installation)
- [Project Structure](project-structure)
- [API Endpoints](api-endpoints)
- [Environment Variables](environment-variables)
- [Running the Application](running-the-application)
- [Testing](testing)
- [File Upload Middleware](file-upload-middleware)
- [Error Handling](error-handling)
- [License](license)

Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- MongoDB (running instance)

Installation

url: https://book-management-api-qkeh.onrender.com

1. Clone the repository:

   ```sh
   git clone https://github.com/Silvyjson/Book-Management-API.git
   ```

2. Navigate to the project directory:

   ```sh
   cd book-management-api
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

Project Structure

```plaintext
book-management-api/
│
├── src/
│   ├── controllers/
│   │   ├── book_controller.ts
│   ├── models/
│   │   ├── book_model.ts
│   ├── routes/
│   │   ├── book_routes.ts
│   ├── index.ts
│
├── tests/
│   ├── book_controller.test.ts
│
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── .env.example
```

API Endpoints

Create a Book

- Endpoint: `POST /books`
- Description: Create a new book.
- Request Body:
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "publishedDate": "2023-01-01",
    "ISBN": "123-456-789"
  }
  ```
- Response:
  ```json
  {
      "message": "The new book is uploaded successfully",
      "newBook"
  }
  ```

Update Book Cover Picture

- Endpoint: `PATCH /books/cover-image/:id`
- Description: Update the cover picture of a book.
- Request Body:
  ```json
  {
    "coverImageUrl": "http://example.com/cover.jpg"
  }
  ```
- Response:
  ```json
  {
      "message": "Book cover updated successfully",
      "updatedBook"
  }
  ```

Get All Books

- Endpoint: `GET /books`
- Description: Retrieve a list of all books.
- Response:
  ```json
  {
      "books"
  }
  ```

Get a Single Book

- Endpoint: `GET /books/:id`
- Description: Retrieve a single book by its ID.
- Response:
  ```json
  {
      "book"
  }
  ```

Update a Book

- Endpoint: `PUT /books/:id`
- Description: Update a book's details.
- Request Body:
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "publishedDate": "2023-01-01",
    "ISBN": "123-456-789",
    "coverImageUrl": "http://example.com/cover.jpg"
  }
  ```
- Response:
  ```json
  {
      "message": "Book updated successfully",
      "updatedBook"
  }
  ```

Delete a Book

- Endpoint: `DELETE /books/:id`
- Description: Delete a book by its ID.
- Response:
  ```json
  {
    "message": "Book deleted successfully"
  }
  ```

Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
MONGO_URI=mongodb://localhost:27017/book_management
PORT=3000
```

Running the Application

1. Compile TypeScript files to JavaScript:

   ```sh
   npm run build
   ```

2. Start the server:

   ```sh
   npm srun dev
   ```

The application will be running on `http://localhost:3000`.

Testing

Run the tests using the following command:

```sh
npm test
```

Error Handling

Basic error handling is implemented to handle invalid requests and non-existent resources. Errors are returned in a structured JSON format with appropriate status codes.

License

This project is licensed under the MIT License.
