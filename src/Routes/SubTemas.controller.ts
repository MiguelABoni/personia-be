import { getSubTemas } from '../Models/SubTemas';
import express from 'express';

export const SubTemasRouter = express.Router();

SubTemasRouter.get('/sub_temas', async (_req, res) => {
  await getSubTemas(res);
});
