const Turn = require("node-turn");
const server = new Turn({
  // set options
  authMech: "none",
  debugLevel: "ALL",
});

server.start();
