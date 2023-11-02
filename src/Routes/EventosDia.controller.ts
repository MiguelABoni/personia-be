import { getEventosDia } from '../Models/EventosDia';
import express from 'express';

export const EventosDiaRouter = express.Router();

EventosDiaRouter.get('/eventos_dia', async (_req, res) => {
  await getEventosDia(res);
});
