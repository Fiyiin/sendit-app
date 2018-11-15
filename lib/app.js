import express from 'express';
import logger from 'morgan';
import path from 'path';
import parcelRouter from './routes/parcel';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'UI')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'UI', 'public', 'index.html'));
});

app.use('/api/v1/parcels', parcelRouter);


app.listen(port, () => console.log(`app running on ${port}`));

export default app;
