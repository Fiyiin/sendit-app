
\c sendit_testdb;

CREATE TABLE parcels (
  id UUID PRIMARY KEY,
  user_id UUUID NOT NULL
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
);

RETURNING *;
