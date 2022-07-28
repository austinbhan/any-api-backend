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

    ];

    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
