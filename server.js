import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/restaurants', (req, res) => {
  console.log('hello');
});

app.listen(process.env.PORT || 4455, () => {
  console.log(`Listening on port ${process.env.PORT || 4455}`);
});
