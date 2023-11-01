import dotenv from 'dotenv';
import express, { Express, Response } from 'express';

dotenv.config();

import imagesPersoniaRouter from './routes/images_personia'

const PORT = process.env.PORT || 3000;
const app: Express = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api', imagesPersoniaRouter)

app.get('/', (_req, res: Response) => {
  res.send('NodeJS + Express + TypeScript Server');
});

app.listen(PORT, () => {
  console.log(
    `⚡️ [server]: Server is running at http://${process.env.HOST}:${process.env.PORT}`,
  );
});
