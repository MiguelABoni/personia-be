import axios, { AxiosError } from 'axios';
import { Response, Request } from 'express';

export const getCsv = async (res: Response, req: Request) => {
  try {
    const anio = req.query.anio;

    const response = await axios.get(
      `${process.env.API_URL_BACKEND_PYTHON}/csv?anio=${anio}`,
    );
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
