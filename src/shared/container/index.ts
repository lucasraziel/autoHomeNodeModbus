import { container } from 'tsyringe';

import './providers';

import IRoomsRepository from '@modules/rooms/repositories/IRoomsRepository';
import RoomsRepository from '@modules/rooms/infra/json/repositories/RoomsRepository';

container.registerSingleton<IRoomsRepository>(
  'RoomsRepository',
  RoomsRepository
);
