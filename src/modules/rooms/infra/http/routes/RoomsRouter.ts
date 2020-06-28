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

roomsRouter.patch(
  '/:name',
  celebrate({
    [Segments.PARAMS]: {
      name: Joi.string().required(),
    },
    [Segments.BODY]: {
      state: Joi.boolean().required(),
    },
  })
);

export default roomsRouter;
