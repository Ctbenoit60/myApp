const express = require('express');
const router = express.Router();

// base route is localhost:3000/mytest/
router.get('/', (req,res) => {
    res.send('Hello');
})

router.get("/test", (req, res) => {
  res.send("Server1: ");
});

router.get("/test2", (req, res) => {
  res.send("Server2: ");
});

module.exports = router;