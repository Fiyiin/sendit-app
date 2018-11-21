DROP DATABASE IF EXISTS sendit_testdb;
CREATE DATABASE sendit_testdb;

\c sendit_testdb;

CREATE TABLE
users(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  isAdmin BOOLEAN,
  created_on TIMESTAMP DEFAULT LOCALTIMESTAMP(1)
);