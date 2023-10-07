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

// JavaScript untuk fitur chat popup
const chatPopup = document.getElementById('chat-popup');
const closeChat = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Fungsi untuk menampilkan chat popup
function showChat() {
    chatPopup.style.display = 'block';
}

// Fungsi untuk menyembunyikan chat popup
function hideChat() {
    chatPopup.style.display = 'none';
}

// Fungsi untuk mengirim pesan pengguna dan menerima balasan
function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.innerText = userMessage;
        const timestampElement = createTimestamp();
        messageElement.appendChild(timestampElement);
        chatMessages.appendChild(messageElement);

        // Balasan otomatis
        setTimeout(() => {
            const replyElement = document.createElement('div');
            replyElement.classList.add('message', 'bot-message');
            replyElement.innerText = 'Hello World';
            const timestampElement = createTimestamp();
            replyElement.appendChild(timestampElement);
            chatMessages.appendChild(replyElement);

            // Setelah menambahkan pesan, scroll ke bawah
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        userInput.value = '';
    }
}

// Fungsi untuk membuat elemen timestamp
function createTimestamp() {
    const timestampElement = document.createElement('span');
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    timestampElement.classList.add('timestamp');
    timestampElement.innerText = timeString;
    return timestampElement;
}

// Event listener untuk tombol tutup chat
closeChat.addEventListener('click', hideChat);

// Event listener untuk tombol konsultasi
const konsultasiButton = document.querySelector('.jadwal a');
konsultasiButton.addEventListener('click', showChat);
    // Mengganti judul chat
    const chatTitle = document.getElementById('chat-title');
    chatTitle.innerText = 'Untuk Konsultasi';
// Event listener untuk tombol kirim pesan
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
