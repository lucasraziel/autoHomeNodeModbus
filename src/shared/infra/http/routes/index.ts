import { Router } from 'express';
import LampsRouter from '@modules/lamps/infra/http/routes/LampsRouter';
import RoomsRouter from '@modules/rooms/infra/http/routes/RoomsRouter';

const routes = Router();

routes.use('/lamps', LampsRouter);

routes.use('/rooms', RoomsRouter);

routes.get('/', (request, response) => {
  return response.json({ server: 'ok' });
});

export default routes;
