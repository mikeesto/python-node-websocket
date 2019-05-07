// Get the current URL & replace https/http with the websocket protocol
const host = location.origin.replace(/^https?/, "ws");
// The ReconnectingWebSocket library provides a WebSocket connection that will automatically reconnect if the connection is dropped
const ws = new ReconnectingWebSocket(host);
const count = document.querySelector("#count");

// When a WebSocket message is received, update the count on the page
ws.onmessage = message => {
  const number = message.data;
  count.textContent = number;

  // If the number received is even, send a response back to the server
  if (number % 2 === 0) {
    ws.send(`${number} is even!`);
  }
};
