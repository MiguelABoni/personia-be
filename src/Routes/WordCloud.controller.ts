import { getWordCloud } from '../Models/WordCloud';
import express from 'express';

export const WordCloudRouter = express.Router();

WordCloudRouter.get('/word_cloud', async (_req, res) => {
  await getWordCloud(res);
});
