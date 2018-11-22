\c sendit_testdb;
DROP TABLE IF EXISTS parcels;

CREATE TABLE IF NOT EXISTS parcels (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
  name VARCHAR(140) NOT NULL,
  description TEXT,
  created_on TIMESTAMP DEFAULT LOCALTIMESTAMP(1),
  pickup TEXT NOT NULL,
  delivery TEXT NOT NULL,
  current_location TEXT NOT NULL,
  weight NUMERIC NOT NULL,
  receivers_name TEXT,
  receivers_no TEXT,
  status TEXT DEFAULT 'processing'
);

INSERT INTO parcels (user_id, name, description, pickup, delivery, current_location,
weight, receivers_name, receivers_no, status)
VALUES (1, 'Kors', 'Sunglasses', 'Yaba', 'Ikeja', 'Sabo',
3, 'Faith', '0903267466', 'pending');