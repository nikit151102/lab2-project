export class messages {
    addMessageToPage(message: string) {
        const messageContainer = document.getElementById('message-container');
        if (messageContainer) {
          const messageElement = document.createElement('div');
          messageElement.innerText = message;
          messageContainer.appendChild(messageElement);
        }
      }
}

