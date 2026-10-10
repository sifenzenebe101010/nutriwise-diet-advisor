const userinput = document.getElementById("user-input");
const sendbutton = document.getElementById("send-button");
const chatbox = document.getElementById("chat-box");

function sendMessage() {
  const message = userinput.value.trim();

  if (message === "") {
    return;
  }

  const userMessage = document.createElement("p");
  userMessage.textContent = message;
  userMessage.classList.add("user-message");
  chatbox.appendChild(userMessage);

  const botMessage = document.createElement("p");
  botMessage.textContent =
    "Thanks for your message! I'm your diet advisor. Ask me about healthy meals. 🥗";
  botMessage.classList.add("bot-message");
  chatbox.appendChild(botMessage);

  t;
  userinput.value = "";

  chatbox.scrollTop = chatbox.scrollHeight;

  userinput.focus();
}

sendbutton.addEventListener("click", sendMessage);

userinput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
