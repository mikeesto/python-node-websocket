# Python + Node.js + WebSocket

#### Remix on [Glitch!](https://python-node-websocket.glitch.me/) :sparkles:

Recently I've been using Python to interact with hardware and IoT sensors. I wanted an easy way to pipe the data into a Node application. This example provides a simple structure for doing so. It could also be used for other domains in which Python is popular, such as machine learning.

### python/script.py

A Python script that could be used for everything & anything. In this example it is a simple counter.

### app.js

Creates a Node http server. Listens for clients connecting to the server. Sends the Python output to the client. Logs any messages received from the client. Uses [ws](https://www.npmjs.com/package/ws), a popular Node.js WebSocket library.

### public/js/client.js

Connects to the WebSocket server. When a message is received, updates the page. If the number received is even, sends a response back to the server. Uses the [ReconnectingWebSocket](https://github.com/joewalnes/reconnecting-websocket) library to automatically reconnect if the connection is dropped.
