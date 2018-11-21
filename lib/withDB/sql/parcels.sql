DROP DATABASE IF EXISTS sendit_testdb;
CREATE DATABASE sendit_testdb;

\c sendit_testdb;

CREATE TABLE parcels (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(140) NOT NULL,
  description TEXT,
  created_on TIMESTAMP DEFAULT LOCALTIMESTAMP(1),
  pickup TEXT NOT NULL,
  delivery TEXT NOT NULL,
  weight NUMERIC NOT NULL,
  receivers_name TEXT,
  receivers_no TEXT,
  status TEXT
);

INSERT INTO parcels(name, description, pickup, delivery, weight,
  receivers_name, receivers_no, status)
VALUES ( 'Micheal Kors', 'Sunglasses', 'Yaba', 'Anthony',
4, 'Teslim', '099972293', 'processing')

RETURNING *;
