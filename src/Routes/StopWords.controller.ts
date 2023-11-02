import { getStopWords } from '../Models/StopWords';
import express from 'express';

export const StopWordsRouter = express.Router();

StopWordsRouter.get('/stop_words', async (req, res) => {
  await getStopWords(res, req);
});
