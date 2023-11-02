import { getTemas } from '../Models/Temas';
import express from 'express';

export const TemasRouter = express.Router();

TemasRouter.get('/temas', async (_req, res) => {
  await getTemas(res);
});
