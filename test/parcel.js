import request from 'supertest';
import app from '../app';

describe('#POST /parcels', () => {
  it('creates a new parcel order', (done) => {
    request(app)
      .post('/api/v1/parcels')
      .send({
        name: 'Brown Box',
        description: 'Leave me alone',
        pickup: 'Sabo',
        delivery: 'Yaba',
        username: 'Isamami',
        weight: '3g',
      })
      .expect(201)
      .expect('Content-Type', /application\/json/)
      .expect({ message: 'new parcel order' })
      .end(done);
  });
});
