//require the express package
const express = require("express");

//create an app using the express package
const app = express();
const app2 = express();

// set the port to 3000
const port = 3000;
const port2 = 3001;

app.get("/", (req, res) => {
  res.send("Server1: " + port);
});

app.listen(port, () => {
  console.log(`Example app listening
    at http://localhost:${port}`);
});

app2.get("/", (req, res) => {
  res.send("Server2: " + port2);
});

app2.listen(port2, () => {
  console.log(`Example app listening
        at http://localhost:${port2}`);
});
