const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('fruit-routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  // Your First (or only) test????
  it('should return a list of fruit items', async () => {
    const res = await request(app).get('/fruits');
    console.log(res.body);
    const expected = [
      { id: '1', name: 'apple', color: 'red' },
      { id: '2', name: 'orange', color: 'orange' },
      { id: '3', name: 'pineapple', color: 'yellow' },
      { id: '4', name: 'grape', color: 'purple' },
      { id: '5', name: 'strawberry', color: 'red' }
    ];

    expect(res.body).toEqual(expected);
  });

  // If you want another test add it here
  

  afterAll(() => {
    pool.end();
  });
});
