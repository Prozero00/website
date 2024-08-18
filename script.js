const messageElement = document.querySelector(".container p");
const formattedMessage = messageElement.innerHTML.replace(/lulus/g, '<span class="bold">lulus</span>');
messageElement.innerHTML = formattedMessage;
