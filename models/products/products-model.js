/* eslint-disable new-cap */
/* eslint-disable strict */
/* eslint-disable camelcase */
'use strict';

const products_schema = require('./products-schema.js');
const Model = require('../mongo.js');

class Products extends Model {
  constructor() {
    super(products_schema);
  }
}

module.exports = new Products();