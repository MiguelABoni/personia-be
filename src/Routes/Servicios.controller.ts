import { getServicios } from '../Models/Servicios';
import express from 'express';

export const ServiciosRouter = express.Router();

ServiciosRouter.get('/servicios', async (_req, res) => {
  await getServicios(res);
});
