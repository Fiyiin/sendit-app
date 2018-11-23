'use strict';

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

/**
 * Create Parcel Table
 */
const createParcelTable = () => {
  const queryText = `CREATE TABLE parcels (
      id SERIAL PRIMARY KEY,
      user_id SERIAL NOT NULL,
      name VARCHAR(140) NOT NULL,
      description TEXT,
      created_on TIMESTAMP DEFAULT LOCALTIMESTAMP(1),
      pickup TEXT NOT NULL,
      delivery TEXT NOT NULL,
      weight NUMERIC NOT NULL,
      receivers_name TEXT,
      receivers_no TEXT,
      status TEXT,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );`;

  pool.query(queryText).then(res => {
    console.log(res);
    pool.end();
  }).catch(err => {
    console.log(err);
    pool.end();
  });
};

/**
 * Create User Table
 */
const createUserTable = () => {
  const queryText = `CREATE TABLE
    users(
      id SERIAL PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      isAdmin BOOLEAN,
      created_on TIMESTAMP DEFAULT LOCALTIMESTAMP(1)
    );`;

  pool.query(queryText).then(res => {
    console.log(res);
    pool.end();
  }).catch(err => {
    console.log(err);
    pool.end();
  });
};

/**
 * Drop Reflection Table
 */
const dropParcelTable = () => {
  const queryText = 'DROP TABLE IF EXISTS reflections returning *';
  pool.query(queryText).then(res => {
    console.log(res);
    pool.end();
  }).catch(err => {
    console.log(err);
    pool.end();
  });
};

/**
 * Drop User Table
 */
const dropUserTable = () => {
  const queryText = 'DROP TABLE IF EXISTS users returning *';
  pool.query(queryText).then(res => {
    console.log(res);
    pool.end();
  }).catch(err => {
    console.log(err);
    pool.end();
  });
};

const createAllTables = () => {
  createUserTable();
  createParcelTable();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createAllTables,
  createParcelTable,
  createUserTable,
  dropParcelTable,
  dropUserTable
};