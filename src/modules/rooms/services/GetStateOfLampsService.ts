import { inject, injectable } from 'tsyringe';
import clpConfig from '@config/clp';
import IRoomsRepository from '@modules/rooms/repositories/IRoomsRepository';
import IModbusProvider from '@shared/container/providers/ModbusProvider/models/IModbusProvider';
import AppError from '@shared/errors/AppError';
import Lamp from '@modules/lamps/models/Lamp';

@injectable()
export default class ListRoomsService {
  constructor(
    @inject('RoomsRepository')
    private roomsRepository: IRoomsRepository,
    @inject('ModBusProvider')
    private modbusProvider: IModbusProvider
  ) {}

  public async execute(roomName: string): Promise<Lamp[]> {
    const room = await this.roomsRepository.get(roomName);

    if (!room) {
      throw new AppError('This room does not exist');
    }

    const states = await this.modbusProvider.getStates({
      address: clpConfig.initialAddress,
      size: clpConfig.numberOfCoils,
    });

    return states
      .filter((state) =>
        room.lamps.some((lamp) => lamp.address === state.address)
      )
      .map((state) => {
        const { name } = room.lamps.find(
          (lamp) => lamp.address === state.address
        );
        return {
          ...state,
          name,
        };
      });
  }
}
