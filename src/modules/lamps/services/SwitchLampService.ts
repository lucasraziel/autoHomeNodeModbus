import { inject, injectable } from 'tsyringe';
import ILampsRepository from '@modules/lamps/repositories/ILampsRepository';
import IModbusProvider from '@shared/container/providers/ModbusProvider/models/IModbusProvider';
import AppError from '@shared/errors/AppError';

interface IRequest {
  address: number;
  state: boolean;
}

@injectable()
export default class SwitchLampService {
  constructor(
    @inject('LampsRepository')
    private lampsRepository: ILampsRepository,
    @inject('ModbusProvider')
    private modbbusProvider: IModbusProvider
  ) {}

  public async execute({ address, state }: IRequest): Promise<void> {
    const lamp = await this.lampsRepository.getLamp(address);

    if (!lamp) {
      throw new AppError('Lamp does not exist');
    }

    await this.modbbusProvider.switchCoil({ address, state });
  }
}
