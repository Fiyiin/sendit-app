import express from 'express';
import logger from 'morgan';
import path from 'path';
import Parcel from './api_v1/controllers/parcel';

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, './UI/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './UI/public/index.html'));
});

app.post('/api/v1/parcels', Parcel.create);
app.get('/api/v1/parcels', Parcel.getAll);
app.get('/api/v1/parcel/:id', Parcel.getOne);
app.put('/api/v1/parcel/:id', Parcel.cancel);


app.listen(3000);
console.log('app running on port', 3000);

export default app;
