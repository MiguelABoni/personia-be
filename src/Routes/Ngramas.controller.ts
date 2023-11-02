import { getNgramas } from '../Models/Ngramas';
import express from 'express';

export const NgramasRouter = express.Router();

NgramasRouter.get('/ngramas', async (req, res) => {
  await getNgramas(res, req);
});
