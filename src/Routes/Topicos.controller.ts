import { getTopicos } from '../Models/Topicos';
import express from 'express';

export const TopicosRouter = express.Router();

TopicosRouter.get('/topicos', async (_req, res) => {
  await getTopicos(res);
});
