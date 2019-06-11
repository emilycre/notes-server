require('../data-helpers');
const request = require('supertest');
const app = require('../../lib/app');

const createNote = note => {
  return request(app)
    .post('/api/v1/notes')
    .send(note)
    .then(res => res.body);
};

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

  it('Can get a list of notes', async() => {
    const notes = await Promise.all([
      createNote({ title: 'Wow.', body: 'Cool.' }),
      createNote({ title: 'Wow.', body: 'Cool, cool.' }),
      createNote({ title: 'Wow.', body: 'Cool, cool, cool.' })
    ]);

    return request(app)
      .get('/api/v1/notes')
      .then(res => {
        expect(res.body).toEqual(notes);
      });
  });
});
