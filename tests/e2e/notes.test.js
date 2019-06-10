require('../data-helpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('Notes routes', () => {
  it('Can create a note via POST', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({ title: 'T I T L E', body: 'Notes, forever.' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'T I T L E',
          body: 'Notes, forever.',
          __v: 0
        });
      });
  });
});
