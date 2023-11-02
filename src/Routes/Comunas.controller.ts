import { getComunas } from '../Models/Comunas';
import express from 'express';

export const ComunasRouter = express.Router();

ComunasRouter.get('/comunas', async (_req, res) => {
  await getComunas(res);
});
