const Turn = require("node-turn");
const os = require("os");
const networkinterfaces = os.networkInterfaces();
const server = new Turn({
  // set options
  authMech: "long-term",
  debugLevel: "DEBUG",
  credentials: {
    username: "password",
    credential: "password",
  },
  listeningTcp: true,
});

console.log("🚀 ~ file: server.js:4 ~ networkinterfaces:", networkinterfaces);

server.start();
