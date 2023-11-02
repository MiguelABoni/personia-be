import { getEventosSavia } from '../Models/EventosSavia';
import express from 'express';

export const EventosSaviaRouter = express.Router();

EventosSaviaRouter.get('/eventos_savia', async (_req, res) => {
  await getEventosSavia(res);
});
