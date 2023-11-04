import { getAnios } from '../Models/Anios';
import express from 'express';

export const AniosRouter = express.Router();

AniosRouter.get('/years', async (_req, res) => {
  await getAnios(res);
});
