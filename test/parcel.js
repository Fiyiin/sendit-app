import supertest from 'supertest';
import { expect } from 'chai';
import uuid from 'uuid';

import app from '../app';

describe('#POST /parcels', () => {
  it('creates a new parcel order', (done) => {
    supertest(app)
      .post('/api/v1/parcels')
      .send({
        id: uuid.v4(),
        name: 'Brown Box',
        description: 'Leave me alone',
        pickup: 'Sabo',
        delivery: 'Yaba',
        username: 'Isamami',
        weight: '3g',
      })
      .send({
        id: uuid.v4(),
        name: 'Brown Box',
        description: 'Handle with care',
        pickup: 'Ikeja',
        delivery: 'Yaba',
        username: 'Ipali',
        weight: '4kg',
      })
      .send({
        id: uuid.v4(),
        name: 'Brown Box',
        description: 'Handle with care',
        pickup: 'Ikeja',
        delivery: 'Yaba',
        username: 'Ipali',
        weight: '4kg',
      })
      .expect(201)
      .expect('Content-Type', /application\/json/)
      .expect({ message: 'new parcel order' })
      .end(done);
  });
});

describe('#GET /parcels', () => {
  it('returns all parcels', (done) => {
    supertest(app)
      .get('/api/v1/parcels')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('arrray');
        done();
      });
  });
});