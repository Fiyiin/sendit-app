import express from 'express';
import logger from 'morgan';
import path from 'path';
import bodyParser from 'body-parser'
import parcelRouter from './withDB/routes/parcels';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'UI')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'UI', 'public', 'index.html'));
});

app.use('/api/v1/parcels', parcelRouter);


app.listen(port, () => console.log(`app running on ${port}`));

export default app;
