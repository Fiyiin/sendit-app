DROP DATABASE IF EXISTS sendit_testdb;
CREATE DATABASE sendit_testdb;

\c sendit_testdb;

CREATE TABLE parcels
(
  ID SERIAL PRIMARY KEY,
  name VARCHAR(140) NOT NULL,
  description text,
  created_on DATE,
  pickup TEXT NOT NULL,
  delivery TEXT NOT NULL,
  weight NUMERIC NOT NULL,
  receiver_name TEXT,
  userId VARCHAR(10) NOT NULL 
);

INSERT INTO parcels (name, description, created_on, pickup,
delivery, weight, receiver_name, userId) VALUES ('HP Laptop',
'blue hp laptop', '02-08-2018', 'ikeja', 'yaba', 6, 'vincent',
'dt56ww');
  

