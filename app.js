const express = require("express");
const WebSocket = require("ws");
const path = require("path");
const http = require("http");
const ChildProcess = require("child_process");

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, "public");

const app = express().use(express.static(PUBLIC));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Spawn a new process to run the python counting script
const pyProcess = ChildProcess.spawn("python3", ["-u", "./python/script.py"]);

wss.on("connection", ws => {
  // Send data to websocket client(s)
  pyProcess.stdout.on("data", data => {
    ws.send(data.toString());
  });

  // Log data received from client(s)
  ws.on("message", message => {
    console.log(message);
  });
});

// Listen for requests
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
