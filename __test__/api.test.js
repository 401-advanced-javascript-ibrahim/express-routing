'use strict'

const { server } = require('../lib/server.js')
const supergoose = require('@code-fellows/supergoose')
const mockRequest = supergoose(server)

describe('Categoris API', () => {
    it('post a new category', () => {
        let obj = { name: 'testCategory', display_name: 'cool-category', description: 'not for sale' };
        return mockRequest.post('/api/v1/categories')
            .send(obj)
            .then(data => {
                let record = data.body;
                Object.keys(obj).forEach(key => {
                    expect(record[key]).toEqual(obj[key]);
                });
            })
    });
})

describe('Products API', () => {
    it('post a new product', () => {
        let obj = { name: 'testProduct', category: "cool-category", display_name: 'cool-product', description: '4sale' };
        return mockRequest.post('/api/v1/products')
            .send(obj)
            .then(data => {
                let record = data.body;
                Object.keys(obj).forEach(key => {
                    expect(record[key]).toEqual(obj[key]);
                });
            })
    })
})