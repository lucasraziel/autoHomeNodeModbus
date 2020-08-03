import { inject, injectable } from 'tsyringe';
import clpConfig from '@config/clp';
import IModbusProvider from '@shared/container/providers/ModbusProvider/models/IModbusProvider';
import AppError from '@shared/errors/AppError';

@injectable()
export default class ListRoomsService {
  constructor(
    @inject('ModbusProvider')
    private modbusProvider: IModbusProvider
  ) {}

  public async execute(lampAddress: number): Promise<boolean> {
    const states = await this.modbusProvider.getStates({
      address: clpConfig.initialAddress,
      size: clpConfig.numberOfCoils,
    });

    const coil = states.find((state) => lampAddress === state.address);

    if (!coil) {
      throw new AppError('There is this lamp');
    }

    return coil.state;
  }
}
