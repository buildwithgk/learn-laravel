const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Require route files
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');

// Use routes
app.use('/', indexRoute);
app.use('/about', aboutRoute);

app.listen(port, () => {
    console.log(`Node.js server is running at http://localhost:${port}`);
});

// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public/views'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/views/index.html');
// });