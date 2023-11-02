import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';

export const getStopWords = async (res: Response, req: Request) => {
  try {
    const word = req.query.word;

    const response = await axios.get(
      `${process.env.API_URL_BACKEND_PYTHON}/stop_words?word=${word}`,
      {
        responseType: 'arraybuffer',
      },
    );
    res.setHeader('Content-Type', 'image/png');
    res.send(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const statusCode = axiosError.response.status;
      const errorMessage = axiosError.response.data;
      res.status(statusCode).send(errorMessage);
    } else if (axiosError.request) {
      res.status(500).send({
        error: axiosError.message,
        message: 'No se recibió respuesta del servidor de PersonIA',
      });
    }
  }
};
