const net = require("net");
const myName = "ALX";

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
    conn.write(`Name: ${myName}`);
  });

  // conn.on("data", (myName) => {
  //   console.log("Server says: ", myName);
  // });

  return conn;
};

console.log("Connecting ...");

module.exports = {
  connect,
};
