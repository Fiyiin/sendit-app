import supertest from 'supertest';
import { expect } from 'chai';
import uuid from 'uuid';

import app from '../app';

describe('#POST api/v1/parcels', () => {
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
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.include({ name: 'Brown Box' });
        expect(res.body).to.have.property('weight');
        expect(res.body).to.have.property('pickup', 'Sabo');
        done();
      });
  });
});

describe('#GET api/v1/parcels', () => {
  it('returns all parcels', (done) => {
    supertest(app)
      .get('/api/v1/parcels')
      .send({
        id: 1,
        name: 'Brown Box',
        description: 'Handle with care',
        pickup: 'Ikeja',
        delivery: 'Yaba',
        username: 'Ipali',
        weight: '4kg',
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
