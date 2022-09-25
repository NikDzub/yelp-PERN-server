import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';

import restaurants_v1 from './routes/restaurants_v1.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/restaurants', restaurants_v1);

app.listen(process.env.PORT || 4455, () => {
  console.log(`Listening on port ${process.env.PORT || 4455}`);
});
