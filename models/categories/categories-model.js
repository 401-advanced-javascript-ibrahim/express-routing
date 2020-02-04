/* eslint-disable strict */
/* eslint-disable camelcase */
'use strict';

const ctegories_schema = require('./categories-schema.js');
const Model = require('../mongo.js');

class Categories extends Model {
  constructor() {
    super(ctegories_schema);
  }
}

module.exports = new Categories();