const express = require("express")
const WebSocket = require('ws');
const cors = require("cors")

const app = express()
const port = 3001;


app.use(cors());

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ port: 3001 }, () => {
	console.log("ready to host connections")
});

wss.on('connection', function connection(ws) {
	console.log("connected");
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

