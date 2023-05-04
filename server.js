const Turn = require("node-turn");
const os = require("os");
const networkinterfaces = os.networkInterfaces();
const server = new Turn({
  // set options
  authMech: "long-term",
  debugLevel: "ALL",
  credentials: {
    username: "password",
    credential: "password",
  },
  listeningTcp: true,
});

server.start();
