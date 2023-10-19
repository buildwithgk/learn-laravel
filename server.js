// const express = require('express');
// const path = require('path');
// const app = express();
// const fs = require('fs'); // Include the fs module
// const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// // Middleware to add header to all responses
// app.use((req, res, next) => {
//     res.headerContent = fs.readFileSync(path.join(__dirname, 'public', 'views', 'header.html'), 'utf8');
//     res.footerContent = fs.readFileSync(path.join(__dirname, 'public', 'views', 'footer.html'), 'utf8');
//     res.menuItems = menuItems;
//     next();
// });
// const menuItems = [
//     { name: 'Home', url: '/' },
//     { name: 'About', url: '/about' },
//     { name: 'Services', url: '/services' },
//     // Add more menu items as needed
// ];
// app.use((req, res, next) => {
//     if (req.url !== '/favicon.ico') { 
//          if (req.url === '/') {
//             filePath = path.join(__dirname, 'public', 'views', 'index.html');
//         } else {
//             filePath = path.join(__dirname, 'public', 'views', req.url + '.html');
//         }

//         //const filePath = path.join(__dirname, 'public', 'views', req.url + '.html');
//         fs.readFile(filePath, 'utf8', (err, content) => {
//             if (err) {
//                 // Handle error, for example, send a 404 response
//                 res.status(404).send('File not found');
//             } else {
//                 // Prepend header content to the file content
//                 res.send(res.headerContent + content + res.footerContent);
//             }
//         });
//     } else {
//         next(); // Continue to the next middleware for favicon request
//     }
// });

// app.listen(port, () => {
//     console.log(`Node.js server is running at http://localhost:${port}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const menuItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' }
    // Add more menu items as needed
];

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'public', 'views')); // Set the views directory

app.use(express.static(path.join(__dirname, 'public')));

// Middleware to add header and menuItems to all responses
app.use((req, res, next) => {
    res.locals.menuItems = menuItems; // Pass menuItems to all views
    next();
});

// Route handling
app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Gun Man Page'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About Us'
    });
});

app.get('/service', (req, res) => {
    res.render('service', {
        pageTitle: 'Our Services'
    });
});

app.get('/project', (req, res) => {
    res.render('project', {
        pageTitle: 'Project'
    });
});

app.get('/blog', (req, res) => {
    res.render('blog', {
        pageTitle: 'Blog'
    });
});

app.listen(port, () => {
    console.log(`Node.js server is running at http://localhost:${port}`);
});


