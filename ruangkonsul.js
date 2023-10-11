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

      //scroll auto
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

closeChat.addEventListener("click", hideChat);

// Ambil semua tombol dengan kelas .harga .btn-chat
const chatButtons = document.querySelectorAll(".harga .bt-chat");

// Tambahkan event listener ke setiap tombol
chatButtons.forEach((button) => {
  button.addEventListener("click", function () {
    showChat();
    const chatTitle = document.getElementById("chat-title");
    chatTitle.innerText = "Konsultasi " + this.innerText;
  });
});

// Kode untuk mengirim pesan
sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
