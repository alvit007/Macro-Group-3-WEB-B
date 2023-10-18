// Ambil parameter bookId dari URL
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('bookId');

// Simpan data buku dalam objek
const books = {
    1: {
        image: "assets/Rectangle-64.png",
        title: "Ini Buku Diet",
        description: 
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `
    },
    2: {
        image: "assets/Rectangle-65.png",
        title: "Diet Sehat Tanpa Lapar",
        description: 
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    3: {
        image: "assets/Rectangle-66.png",
        title: "Diet Puasa",
        description: 
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `
        
    },
    4: {
        image: "assets/Rectangle-67.png",
        title: "Langsing dan Sehat Bersama Diet Ketogenik",
        description: 
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    5: {
        image: "assets/Rectangle-68.png",
        title: "Detoks Sehat Dengan Jus",
        description:
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    6: {
        image: "assets/Rectangle-69.png",
        title: "Diet Intermittent Fasting",
        description:
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    7: {
        image: "assets/Rectangle-70.png",
        title: "Diet Keto Itu Mudah",
        description:
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    8: {
        image: "assets/Rectangle-71.png",
        title: "Diet Sodium",
        description:
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    9: {
        image: "assets/Rectangle-74.png",
        title: "Eating Clean",
        description:
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    10: {
        image: "assets/Rectangle-75.png",
        title: "Detoks Sehat Dengan Jus",
        description:
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    11: {
        image: "assets/Rectangle-76.png",
        title: "Detoks Sehat Dengan Jus",
        description:
        `  Memiliki tubuh yang ideal merupakan impian bagi banyak orang. Salah satu cara umumnya untuk mendapatkan tubuh yang sesuai harapan ini dengan berdiet. Sayangnya, banyak masyarakat yang belum memahami makna dan tujuan dari diet itu sendiri. Sebagian dari masyarakat sengaja berdiet hanya demi mendapatkan tubuh yang kurus, sehingga mereka akan mengurangi asupan makanan dengan ketat.
        Sejatinya, tujuan dari diet bukanlah semata demi penampilan, melainkan juga kesehatan. Diet merupakan pengaturan pola makan, baik porsi maupun kandungan gizinya, dengan tujuan untuk menjaga kesehatan dan mendapatkan tubuh yang ideal. `

    },
    12: {
        image: "assets/Rectangle-77.png",
        title: "Detoks Sehat Dengan Jus",
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
