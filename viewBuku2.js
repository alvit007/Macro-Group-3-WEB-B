// Objek untuk mewakili buku-buku
const books = [
    {
        id: 1,
        title: "Buku 1",
        description: "BUKU 1 awdahdwakdbhwadkwa",
        image: "Rectangle 64.png"
    },
    {
        id: 2,
        title: "Buku 2",
        description: "Deskripsi Buku 2. wadhwadwbadadwa",
        image: "Rectangle 65.png"
    }
    // Tambahkan objek buku lainnya di sini
];

function displayBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        const bookImage = document.getElementById("book-image");
        const bookTitle = document.getElementById("book-title");
        const bookDescription = document.getElementById("book-description");

        bookImage.src = book.image;
        bookTitle.textContent = book.title;
        bookDescription.textContent = book.description;
    }
}

// Event listener untuk menangani klik pada daftar buku
const bookList = document.getElementById("book-list");
bookList.addEventListener("click", (event) => {
    const bookId = parseInt(event.target.getAttribute("data-book-id"));
    if (!isNaN(bookId)) {
        window.location.href = `viewBuku.html?bookId=${bookId}`;
    }
});

// Memeriksa apakah ada parameter 'bookId' di URL dan menampilkan deskripsi buku sesuai
const urlParams = new URLSearchParams(window.location.search);
const bookIdParam = urlParams.get("bookId");
if (bookIdParam) {
    displayBookDetails(parseInt(bookIdParam));
}
