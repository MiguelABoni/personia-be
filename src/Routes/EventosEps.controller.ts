import { getEventosEps } from '../Models/EventosEps';
import express from 'express';

export const EventosEpsRouter = express.Router();

EventosEpsRouter.get('/eventos_eps', async (_req, res) => {
  await getEventosEps(res);
});
