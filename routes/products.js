'use strict';

const express = require('express');
const product = require('../models/products/products-model.js');
const router = express.Router();

//////// Main Routes 
router.get('/products', getProducts)
// router.get('/products/:id', getOneProduct)
router.post('/products', createProducts)
// router.update('/products/:id', updateProducts)
// router.delete('/products/:id', deleteProducts)

function getProducts(req, res, next) {
    product.get()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next)
}

function createProducts(req, res, next) {
    product.create(req.body)
        .then(data => {
            res.status(201).json(data)
        })
}

module.exports = router