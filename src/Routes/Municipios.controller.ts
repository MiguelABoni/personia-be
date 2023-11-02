import { getMunicipios } from '../Models/Municipios';
import express from 'express';

export const MunicipiosRouter = express.Router();

MunicipiosRouter.get('/municipios', async (_req, res) => {
  await getMunicipios(res);
});
