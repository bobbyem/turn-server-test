const Turn = require("node-turn");
const server = new Turn({
  // set options
  authMech: "none",
  debugLevel: "ALL",
  //   credentials: {
  //     username: "username",
  //     credential: "password",
  //   },
});

server.start();
