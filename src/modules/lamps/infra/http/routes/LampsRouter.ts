import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import LampController from '@modules/lamps/infra/http/controllers/LampController';

const lampsRouter = Router();

const lampControler = new LampController();

lampsRouter.patch(
  '/',
  celebrate({
    [Segments.BODY]: {
      address: Joi.number().required(),
      state: Joi.boolean().required(),
    },
  }),
  lampControler.change
);

export default lampsRouter;
