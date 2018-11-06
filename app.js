import express from 'express';
import logger from 'morgan';
import path from 'path';

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'huh' });
});

app.listen(3000);
console.log('app running on port', 3000);
