import supertest from 'supertest';
import { expect } from 'chai';

import app from '../app';

const parcel = {
	first_name: "Crocs",
	last_name: "Shoes",
	email: "Lago",
  password: "Abuja",
  isAdmin: "true"
}

describe('#POST api/v1/auth/signup', () => {
  it('creates a new parcel order', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send(parcel)
      .expect(201)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });
});
