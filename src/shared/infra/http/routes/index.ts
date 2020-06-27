import { Router } from 'express';
import LampsRouter from '@modules/lamps/infra/http/routes/LampsRouter';

const routes = Router();

routes.use('/lamps', LampsRouter);

routes.get('/', (request, response) => {
  return response.json({ server: 'ok' });
});

export default routes;
