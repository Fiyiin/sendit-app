import supertest from 'supertest';
import { expect } from 'chai';
import uuid from 'uuid';

import app from '../app';

describe('API tests', () => {
  const parcel = {
    id: 1,
    name: 'Brown Box',
    description: 'Leave me alone',
    pickup: 'Sabo',
    delivery: 'Yaba',
    username: 'Isamami',
    weight: '3g',
  };
  const parcel2 = {
    id: 1,
    name: 'Brown Box',
    description: 'Handle with care',
    pickup: 'Ikeja',
    delivery: 'Yaba',
    username: 'Ipali',
    weight: '4kg',
  };

  describe('#POST api/v1/parcels', () => {
    it('creates a new parcel order', (done) => {
      supertest(app)
        .post('/api/v1/parcels')
        .send(parcel)
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
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  describe('#GET api/v1/parcel/:id', () => {
    it('returns the parcel with the given id', (done) => {
      supertest(app)
        .get('/api/v1/parcel/', +parcel.id)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.id).to.equal(1);
          done();
        });
    });
  });

  describe('#PUT api/v1/parcel/:id', () => {
    it('Cancels the parcel delivery order with the given id', (done) => {
      supertest(app)
        .put('/api/v1/parcel/', +parcel.id)
        .end((err, res) => {
          expect(res.statusCode).to.equal(204);
          expect(res.body).to.equal({});
          done();
        });
    });
  });
});
