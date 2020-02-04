/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable strict */
'use strict';

const express = require('express');
const product = require('../models/products/products-model.js');
const router = express.Router();

//////// Main Routes
router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.post('/products', createProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts);

//// Routes Functions
function getProducts(req, res, next) {
  product.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getOneProduct(req, res, next) {
  product.get(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function createProducts(req, res, next) {
  product.create(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(next);
}

function updateProducts(req, res, next) {
  product.update(req.params.id, req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function deleteProducts(req, res, next) {
  product.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;