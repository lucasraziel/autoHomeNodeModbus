import 'reflect-metadata';
import express from 'express';

import cors from 'cors';

import '@shared/container';

const app = express();

app.use(cors());

app.use(express.json);

app.get('/', (request, response) => response.json({ msg: 'ok' }));

export default app;
