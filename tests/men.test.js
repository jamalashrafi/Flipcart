const request = require('supertest');
const app = require('../app');

// eslint-disable-next-line no-undef
test('Should return the men json', async () => {
  await request(app).get('/men').expect([]);
});
