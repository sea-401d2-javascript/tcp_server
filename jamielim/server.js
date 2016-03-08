"use strict";

const net = require("net");
const fs = require("fs");
const createUniqueFileName = require(__dirname + "/lib/createUniqueFileName.js");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(data.toString("utf-8"));
  });

  let uniqueFileName = createUniqueFileName();
  console.log(uniqueFileName);
  var file = fs.createWriteStream(__dirname + "/files/" + uniqueFileName);
  socket.pipe(file);

  socket.on("end", () => {
    console.log("bye!");
  });
});

server.listen(3000, () => {
  console.log("server started");
});