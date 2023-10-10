const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the Index page from Node.js server');
});

module.exports = router;
