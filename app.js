import express from 'express';
import logger from 'morgan';
import path from 'path';
import Parcel from './api_v1/controllers/parcel';

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.post('/api/v1/orders', Parcel.create);


app.listen(3000);
console.log('app running on port', 3000);
