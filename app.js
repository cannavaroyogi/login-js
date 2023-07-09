const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const userRoutes = require('./src/routes/user.routes');
const productRoutes = require('./src/routes/product.routes');
const bestproductRoutes = require('./src/routes/bestproduct.route');
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
})

app.use('/login', userRoutes);
app.use('/products', productRoutes);
app.use('/bestproducts', bestproductRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});