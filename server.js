const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Require route files
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');

// Use routes
// app.use('/', indexRoute);
// app.use('/about', aboutRoute);
// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'about.html'));
});

app.listen(port, () => {
    console.log(`Node.js server is running at http://localhost:${port}`);
});
