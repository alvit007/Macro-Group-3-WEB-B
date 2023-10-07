let slideIndex = 1;
const slides = document.querySelectorAll(".slide");
const slideWrapper = document.querySelector(".slide-wrapper");
const slideWidth = slides[0].clientWidth;

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

//geser
function moveSlides() {
  const translateX = -((slideIndex - 1) * slideWidth);
  slideWrapper.style.transform = `translateX(${translateX}px)`;
}

moveSlides();


const chatPopup = document.getElementById("chat-popup");
const closeChat = document.getElementById("close-chat");
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");


function showChat() {
  chatPopup.style.display = "block";
}


function hideChat() {
  chatPopup.style.display = "none";
}


function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() !== "") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "user-message");
    messageElement.innerText = userMessage;
    const timestampElement = createTimestamp();
    messageElement.appendChild(timestampElement);
    chatMessages.appendChild(messageElement);

    setTimeout(() => {
      const replyElement = document.createElement("div");
      replyElement.classList.add("message", "bot-message");
      replyElement.innerText = "Hello World";
      const timestampElement = createTimestamp();
      replyElement.appendChild(timestampElement);
      chatMessages.appendChild(replyElement);

      //scrollauto
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    userInput.value = "";
  }
}

function createTimestamp() {
  const timestampElement = document.createElement("span");
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  timestampElement.classList.add("timestamp");
  timestampElement.innerText = timeString;
  return timestampElement;
}

//exit chat
closeChat.addEventListener("click", hideChat);

//tombol 
const konsultasiButton = document.querySelector(".jadwal a");
konsultasiButton.addEventListener("click", showChat);
//judul
const chatTitle = document.getElementById("chat-title");
chatTitle.innerText = "Untuk Konsultasi";

//kirim
sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk menangani klik pada navbar
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Menangani klik pada setiap item navbar
  const navbarItems = document.querySelectorAll(".navbar a");
  navbarItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = item.getAttribute("href").substring(1);
      scrollToElement(targetId);
    });
  });
});
