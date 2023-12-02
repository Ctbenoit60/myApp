//require the express package
const express = require("express");

const testRoutes = require('./routes/myTestRoutes.js');
// ^ Imports the route


//create an app using the express package
const app = express();
const app2 = express();

// set the port to 3000
const port = 3000;
const port2 = 3001;

app.use('/mytest', testRoutes);

app.listen(port, () => {
  console.log(`Example app listening
    at http://localhost:${port}`);
});

app2.listen(port2, () => {
  console.log(`Example app listening
        at http://localhost:${port2}`);
});

app.use('/', express.static('public'))
