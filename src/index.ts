import dotenv from 'dotenv';
import express, { Express, Response } from 'express';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(express.json());

app.get('/', (_req, res: Response) => {
  res.send('NodeJS + Express + TypeScript Server');
});

app.listen(PORT, () => {
  console.log(
    `⚡️ [server]: Server is running at http://${process.env.HOST}:${process.env.PORT}`,
  );
});
