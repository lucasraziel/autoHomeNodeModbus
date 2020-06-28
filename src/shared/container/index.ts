import { container } from 'tsyringe';

import './providers';

import IRoomsRepository from '@modules/rooms/repositories/IRoomsRepository';
import RoomsRepository from '@modules/rooms/infra/json/repositories/RoomsRepository';

import ILampsRepository from '@modules/lamps/repositories/ILampsRepository';
import LampsRepository from '@modules/lamps/infra/json/repositories/LampsRepository';

container.registerSingleton<IRoomsRepository>(
  'RoomsRepository',
  RoomsRepository
);

container.registerSingleton<ILampsRepository>(
  'LampsRepository',
  LampsRepository
);
