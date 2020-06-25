import { inject, injectable } from 'tsyringe';
import IRoomsRepository from '@modules/rooms/repositories/IRoomsRepository';
import IModbusProvider from '@shared/container/providers/ModbusProvider/models/IModbusProvider';
import AppError from '@shared/errors/AppError';

interface IRequest {
  roomName: string;
  state: boolean;
}

@injectable()
export default class ListRoomsService {
  constructor(
    @inject('RoomsRepository')
    private roomsRepository: IRoomsRepository,
    @inject('ModBusProvider')
    private modbusProvider: IModbusProvider
  ) {}

  public async execute({ roomName, state }: IRequest): Promise<void> {
    const room = await this.roomsRepository.get(roomName);

    if (!room) {
      throw new AppError('This room does not exist');
    }

    room.lamps.forEach(async (lamp) => {
      await this.modbusProvider.switchCoil({ address: lamp.address, state });
    });
  }
}
