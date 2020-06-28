import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import LampController from '@modules/lamps/infra/http/controllers/LampController';

const lampsRouter = Router();

const lampControler = new LampController();

lampsRouter.patch(
  '/:address',
  celebrate({
    [Segments.BODY]: {
      state: Joi.boolean().required(),
    },
    [Segments.PARAMS]: {
      address: Joi.number().required(),
    },
  }),
  lampControler.change
);

export default lampsRouter;
