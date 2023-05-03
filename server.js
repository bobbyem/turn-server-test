const Turn = require("node-turn");
const server = new Turn({
  // set options
  authMech: "long-term",
  debugLevel: "ALL",
  credentials: {
    username: "username",
    password: "password",
  },
});

server.start();
