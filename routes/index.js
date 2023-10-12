const express = require('express');
const router = express.Router();
const path = require('path');
// router.get('/', (req, res) => {
//     res.send('This is the Index page from Node.js server ');
// });
// const express = require('express');
// const app = express();
// const path = require('path');

// Serve static files from the public folder
router.use(express.static(path.join(__dirname, 'public')));

// Handle requests to the root URL
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

module.exports = router;
