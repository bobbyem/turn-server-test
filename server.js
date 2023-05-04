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

function logAlot() {
  setInterval(() => {
    console.log(new Date(), "LogALot");
  }, 5000);
}

logAlot();
server.start();
