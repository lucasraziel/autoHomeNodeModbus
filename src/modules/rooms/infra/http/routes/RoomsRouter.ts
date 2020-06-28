import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import RoomController from '@modules/rooms/infra/http/controllers/RoomController';

const roomsRouter = Router();

const roomController = new RoomController();

roomsRouter.get(
  '/:name',
  celebrate({
    [Segments.PARAMS]: {
      name: Joi.string().required(),
    },
  }),
  roomController.show
);

roomsRouter.get('/', roomController.index);

export default roomsRouter;
