// Ambil parameter bookId dari URL
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('bookId');

// Simpan data buku dalam objek
const books = {
    1: {
        image: "assets/Rectangle-64.png",
        title: "Buku 1",
        description: 
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `
    },
    2: {
        image: "assets/Rectangle-65.png",
        title: "Buku 2",
        description: 
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    3: {
        image: "assets/Rectangle-66.png",
        title: "Buku 3",
        description: 
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `
        
    },
    4: {
        image: "assets/Rectangle-67.png",
        title: "Buku 4",
        description: 
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    5: {
        image: "assets/Rectangle-68.png",
        title: "Buku 5",
        description:
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    }
    // Tambahkan buku-buku lainnya sesuai kebutuhan
};

// Tampilkan deskripsi buku yang sesuai
const book = books[bookId];
if (book) {
    const bookDetails = document.getElementById("bookDetails");
    bookDetails.innerHTML = `
        <div class="gambarBuku">
        <img src="${book.image}" alt="${book.title}">
        </div>
        <div class="deksripsi">
            <h2>${book.title}</h2>
            <h3>Deksripsi:</h3>
            <p>${book.description}</p>
        </div>

    `;
} else {
    // Tampilkan pesan jika buku tidak ditemukan
    const bookDetails = document.getElementById("bookDetails");
    bookDetails.innerHTML = "<p>Buku tidak ditemukan.</p>";
}
