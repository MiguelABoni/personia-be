import { getEventosSura } from '../Models/EventosSura';
import express from 'express';

export const EventosSuraRouter = express.Router();

EventosSuraRouter.get('/eventos_sura', async (_req, res) => {
  await getEventosSura(res);
});
