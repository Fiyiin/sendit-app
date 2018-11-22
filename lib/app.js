import express from 'express';
import logger from 'morgan';
import path from 'path';
import 'babel-polyfill';
import bodyParser from 'body-parser';
import parcelRouter from './withDB/routes/parcels';
import userRouter from './withDB/routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'UI')));

app.get('*', (req, res) => {
  res.json({ message: 'SEND_IT' })
});

app.use('/api/v1/parcels', parcelRouter);
app.use('/api/v1/auth', userRouter);


app.listen(port, () => console.log(`app running on ${port}`));

export default app;
