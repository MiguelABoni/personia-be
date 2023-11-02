import { MunicipiosRouter } from '././Routes/Municipios.controller';
import { ComunasRouter } from './Routes/Comunas.controller';
import { CsvRouter } from './Routes/Csv.controller';
import { EventosDiaRouter } from './Routes/EventosDia.controller';
import { EventosEpsRouter } from './Routes/EventosEps.controller';
import { EventosSaviaRouter } from './Routes/EventosSavia.controller';
import { EventosSuraRouter } from './Routes/EventosSura.controller';
import { NgramasRouter } from './Routes/Ngramas.controller';
import { ServiciosRouter } from './Routes/Servicios.controller';
import { StopWordsRouter } from './Routes/StopWords.controller';
import { SubTemasRouter } from './Routes/SubTemas.controller';
import { TemasRouter } from './Routes/Temas.controller';
import { TopicosRouter } from './Routes/Topicos.controller';
import { WordCloudRouter } from './Routes/WordCloud.controller';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Response } from 'express';

/** APP EXPRESS */
const app: Express = express();

/** CORS */
app.use(cors());

/** USE JSON IN THE API */
app.use(express.json());

/** ENVIRONMENT VARIABLES */
dotenv.config();

/** INITIAL ROUTE */
app.get('/api/v1', (_req, res: Response) => {
  res.send('🧠 BIENVENIDO A PERSONIA API 🧠');
});

/** ROUTES */
app.use('/api/v1', CsvRouter);
app.use('/api/v1', MunicipiosRouter);
app.use('/api/v1', ComunasRouter);
app.use('/api/v1', ServiciosRouter);
app.use('/api/v1', TemasRouter);
app.use('/api/v1', SubTemasRouter);
app.use('/api/v1', EventosDiaRouter);
app.use('/api/v1', EventosSuraRouter);
app.use('/api/v1', EventosEpsRouter);
app.use('/api/v1', EventosSaviaRouter);
app.use('/api/v1', TopicosRouter);
app.use('/api/v1', NgramasRouter);
app.use('/api/v1', WordCloudRouter);
app.use('/api/v1', StopWordsRouter);

/** LISTEN PORT */
app.listen(process.env.PORT || 3000, () => {
  console.log(
    `⚡️ [server]: Server is running at http://${process.env.HOST}:${process.env.PORT}`,
  );
});
