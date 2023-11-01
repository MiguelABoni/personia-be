import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        // Realiza una solicitud a la API externa que devuelve imágenes
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}`);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/comunas', async (_req: Request, res: Response) => {
    try {
        // Realiza una solicitud a la API externa que devuelve imágenes
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/comunas`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/municipios', async (_req: Request, res: Response) => {
    try {
        // Realiza una solicitud a la API externa que devuelve imágenes
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/municipios`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/servicios', async (_req: Request, res: Response) => {
    try {
        // Realiza una solicitud a la API externa que devuelve imágenes
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/servicios`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/temas', async (_req: Request, res: Response) => {
    try {
        // Realiza una solicitud a la API externa que devuelve imágenes
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/temas`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/sub_temas', async (_req: Request, res: Response) => {
    try {
        // Realiza una solicitud a la API externa que devuelve imágenes
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/sub_temas`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/csv', async (_req: Request, res: Response) => {
    try {
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/csv`);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/eventos_dia', async (_req: Request, res: Response) => {
    try {
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/eventos_dia`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/eventos_sura', async (_req: Request, res: Response) => {
    try {
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/eventos_sura`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/eventos_savia', async (_req: Request, res: Response) => {
    try {
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/eventos_savia`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/eventos_eps', async (_req: Request, res: Response) => {
    try {
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/eventos_eps`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/topicos', async (_req: Request, res: Response) => {
    try {
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/topicos`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/word_cloud', async (_req: Request, res: Response) => {
    try {
        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/word_cloud`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/stop_words', async (req: Request, res: Response) => {
    try {
        const word = req.query.word;

        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/stop_words?word=${word}`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});

router.get('/ngramas', async (req: Request, res: Response) => {
    try {
        const qty = req.query.qty;

        const response = await axios.get(`${process.env.API_URL_BACKEND_PYTHON}/ngramas?qty=${qty}`, {
            responseType: 'arraybuffer',
        });
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener imágenes desde la API externa');
    }
});


export default router;
