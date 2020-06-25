import IModbusProvider from '@shared/container/providers/ModbusProvider/models/IModbusProvider';
import ISwitchLampDTO from '../dtos/ISwitchLampDTO';
import IGetLampsStateDTO from '../dtos/IGetLampsStateDTO';
import IStateCoilDTO from '../dtos/IStateCoilDTO';

export default class FakeModbusProvider implements IModbusProvider {
  public async switchCoil(_: ISwitchLampDTO): Promise<void> {
    // eslint-disable-next-line no-console
    console.log('switched');
  }

  public async getStates({
    address,
    size,
  }: IGetLampsStateDTO): Promise<IStateCoilDTO[]> {
    return Array.from({ length: size }, (_, index) => {
      return { address: index + address, state: true };
    });
  }
}
