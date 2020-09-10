const request = require('supertest');
const app = require('../app');

// eslint-disable-next-line no-undef
test('Should return the menu json', async () => {
  // console.log(request(app).get('/menu'));
  await request(app).get('/menu').expect([]);
});
