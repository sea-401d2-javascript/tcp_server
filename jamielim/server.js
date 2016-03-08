"use strict";

const net = require("net");
const server = net.createServer((connection) => {
  connection.on("data", (data) => {
    console.log(data.toString("utf-8"));
  });
  connection.on("end", () => {
    console.log("bye!");
  });
});

server.listen(3000, () => {
  console.log("server started");
});