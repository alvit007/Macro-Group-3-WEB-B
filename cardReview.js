let slideIndex = 1;
        const slides = document.querySelectorAll('.slide');
        const slideWrapper = document.querySelector('.slide-wrapper');
        const slideWidth = slides[0].clientWidth; // Lebar satu slide

        // Fungsi untuk menampilkan slide berikutnya atau sebelumnya
        function plusSlides(n) {
            slideIndex += n;
            if (slideIndex < 1) {
                slideIndex = slides.length;
            } else if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            moveSlides();
        }

        // Fungsi untuk menggeser slide
        function moveSlides() {
            const translateX = -((slideIndex - 1) * slideWidth);
            slideWrapper.style.transform = `translateX(${translateX}px)`;
        }

        // Tampilkan slide pertama saat halaman dimuat
        moveSlides();