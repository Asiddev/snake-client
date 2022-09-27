const net = require("net");
const myName = "ALX";
const stdin = process.stdin;
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write(`Name: ${myName}`);
  });

  // conn.on("connect", (data) => {
  //   console.log(data);
  // });

  // conn.on("connect", () => {
  //   setInterval(() => conn.write("Move: down"), 1000);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => conn.write("Move: right"), 2000);
  // });

  // conn.on("connect", () => {
  //   setInterval(() => conn.write("Move: right"), 2000);
  // });

  return conn;
};

console.log("Connecting ...");

module.exports = { connect };
