const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello world");
});

const userRoutes = require('./src/routes/user.routes');


// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/static/login.html');
// })

app.use(express.static('static'));

app.get('/landing', (req, res) => {
    res.send("Landing page");
});

app.use('/login', userRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});