const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const servers = dns.getServers();
console.log("Node.js is using these DNS servers:", servers);

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongodb = require("./db/connect");

const app = express();
const PORT = 3000;

app.use(cors()).use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(
      "\x1b[34m%s\x1b[0m",
      `Connected to DB and listening on ${PORT}`,
    );
  }
});
