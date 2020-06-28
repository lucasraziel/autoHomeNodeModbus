import { Router } from 'express';

import RoomController from '@modules/rooms/infra/http/controllers/RoomController';

const roomsRouter = Router();

const roomController = new RoomController();

roomsRouter.get('/', roomController.index);

export default roomsRouter;
