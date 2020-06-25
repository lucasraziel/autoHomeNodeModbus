import IModbusProvider from '@shared/container/providers/ModbusProvider/models/IModbusProvider';
import ISwitchLampDTO from '../dtos/ISwitchLampDTO';

export default class FakeModbusProvider implements IModbusProvider {
  public async switchCoil(_: ISwitchLampDTO): Promise<void> {
    console.log('switched');
  }
}
