const Turn = require("node-turn");
const server = new Turn({
  // set options
  authMech: "none",
  debugLevel: "DEBUG",
  credentials: {
    username: "password",
    credential: "password",
  },
});

// console.log(server);
server.start();
