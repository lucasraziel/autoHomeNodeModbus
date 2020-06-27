import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';

import '@shared/container';
import AppError from '@shared/errors/AppError';

import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json);

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    console.warn({
      error: err.message,
      timestamp: Date.now(),
    });
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error({
    error: err.message,
    stack: err.stack,
    timestamp: Date.now(),
  });

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
