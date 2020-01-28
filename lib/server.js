'use strict';

// 3rd party 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// files
const categoriesRoutes = require('../routes/categories.js')
const productsRoutes = require('../routes/products.js')

// app constant
const app = express()

// 3rd party middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// 1st party middleware
app.use('/api/v1', categoriesRoutes)
app.use('/api/v1', productsRoutes)

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`server up ${PORT}`))
    }
}