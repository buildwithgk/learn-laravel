
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs'); // Include the fs module
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Middleware to add header to all responses
app.use((req, res, next) => {
    res.headerContent = fs.readFileSync(path.join(__dirname, 'public', 'views', 'header.html'), 'utf8');
    next();
});

// Handle requests to all HTML files and prepend the header
app.use((req, res, next) => {
    if (req.url !== '/favicon.ico') { // Exclude favicon request
        const filePath = path.join(__dirname, 'public', 'views', req.url + '.html');
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                // Handle error, for example, send a 404 response
                res.status(404).send('File not found');
            } else {
                // Prepend header content to the file content
                res.send(res.headerContent + content);
            }
        });
    } else {
        next(); // Continue to the next middleware for favicon request
    }
});

app.listen(port, () => {
    console.log(`Node.js server is running at http://localhost:${port}`);
});


// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// // Require route files
// const indexRoute = require('./routes/index');
// const aboutRoute = require('./routes/about');

// // Use routes
// // app.use('/', indexRoute);
// // app.use('/about', aboutRoute);
// // Serve static files from the public folder
// app.use(express.static(path.join(__dirname, 'public')));

// // Handle requests to the root URL
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
// });
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'views', 'about.html'));
// });

// app.get('/service', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'views', 'service.html'));
// });

// app.listen(port, () => {
//     console.log(`Node.js server is running at http://localhost:${port}`);
// });

