import { getCsv } from '../Models/Csv';
import express from 'express';

export const CsvRouter = express.Router();

CsvRouter.get('/csv', async (req, res) => {
  await getCsv(res, req);
});
