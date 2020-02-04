/* eslint-disable new-cap */
/* eslint-disable strict */
'use strict';

const express = require('express');
const category = require('../models/categories/categories-model.js');
const router = express.Router();

//////// Main Routes
router.get('/categories', getCategories);
router.get('/categories/:id', getOneCategory);
router.post('/categories', createCategories);
router.put('/categories/:id', updateCategories);
router.delete('/categories/:id', deleteCategories);

//// Routes Functions
function getCategories(req, res, next) {
  console.log(req.params);
  category.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getOneCategory(req, res, next) {
  category.get(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function createCategories(req, res, next) {
  console.log('before create', req.body);
  category.create(req.body)
    .then(data => {
      console.log('after create', req.body);
      res.status(201).json(data);
    })
    .catch(next);
}

function updateCategories(req, res, next) {
  category.update(req.params.id, req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function deleteCategories(req, res, next) {
  category.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;