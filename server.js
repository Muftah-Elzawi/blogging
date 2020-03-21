const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

//app
const app = express();

//middlewares 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
app.use(cors());

//routs
app.get('/api', (req, res) => {
    res.json({ 'thanks': 'thanks', time: Date().toString() })
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}); 