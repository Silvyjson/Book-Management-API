export const Documentation = `
<body style="font-family: Arial, sans-serif; margin: 20px; line-height: 1.6;">
<h1 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">Book Management API Documentation</h1>

<div style="margin-bottom: 40px;">
    <h2 style="color: #333;">Overview</h2>
    <p>This project is a comprehensive platform for managing books. Built with Node.js, Express, and MongoDB, it includes functionalities for creating books, updating book covers, retrieving all books, retrieving a single book, updating a book's details, and deleting books.</p>
</div>

<div style="margin-bottom: 40px;">
    <b>ENDPOINT_URL: https://book-management-api-qkeh.onrender.com</b>
</div>

<div style="margin-bottom: 40px;">
    <h2 style="color: #333;">API Endpoints</h2>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/books</h3>
        <p>Create a new book.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/books

BODY:
{
  "title": "Book Title",
  "author": "Book Author",
  "publishedDate": "2023-01-01",
  "ISBN": "123-456-789"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">PATCH /api/books/cover-image/:id</h3>
        <p>Update the cover image of a book.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: PATCH
URL: /api/books/cover-image/:id

BODY:
{
  "coverImageUrl": "http://example.com/cover.jpg"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/books</h3>
        <p>Retrieve all books.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/books
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/books/:id</h3>
        <p>Retrieve a single book by its ID.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/books/:id
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">PUT /api/books/:id</h3>
        <p>Update a book's details.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: PUT
URL: /api/books/:id

BODY:
{
  "title": "Updated Book Title",
  "author": "Updated Book Author",
  "publishedDate": "2023-01-01",
  "ISBN": "123-456-789"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">DELETE /api/books/:id</h3>
        <p>Delete a book by its ID.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: DELETE
URL: /api/books/:id
</code>
</pre>
    </div>
</div>
</body>
`