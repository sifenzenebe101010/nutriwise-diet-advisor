const userinput = document.getElementById("user-input");
const sendbutton = document.getElementById("send-button");
const chatbox = document.getElementById("chat-box");

function sendMessage() {
  const message = userinput.value.trim();

  if (message === "") {
    return;
  }

  // Display your message
  const userMessage = document.createElement("p");
  userMessage.textContent = message;
  userMessage.classList.add("user-message");
  chatbox.appendChild(userMessage);

  // Display a simple chatbot reply
  const botMessage = document.createElement("p");
  botMessage.textContent =
    "Thanks for your message! I'm your diet advisor. Ask me about healthy meals. 🥗";
  botMessage.classList.add("bot-message");
  chatbox.appendChild(botMessage);

  // Clear the input
  userinput.value = "";

  // Scroll to the newest message
  chatbox.scrollTop = chatbox.scrollHeight;

  // Focus the input again
  userinput.focus();
}

// Send by clicking the button
sendbutton.addEventListener("click", sendMessage);

// Send by pressing Enter
userinput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
