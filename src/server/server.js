const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

const CHAT_MSG_KEY = "chat msg";

app.get("/", (req, res) => {
	// ブラウザからアクセスが来た時の処理
	res.sendFile(__dirname + "/index.html");
});

server.listen(PORT, () => {
	console.log("listening.");
});

io.on("connection", (socket) => {
	console.log("connne");
	socket.on(CHAT_MSG_KEY, (msg) => {
		// 全ユーザーに送信
		io.emit(CHAT_MSG_KEY, msg);
	});
});
