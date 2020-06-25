import ModbusRTU from 'modbus-serial';
import modBusConfig from '@config/modbus';
import IModbusProvider from '@shared/container/providers/ModbusProvider/models/IModbusProvider';
import ISwitchLampDTO from '../dtos/ISwitchLampDTO';

export default class ModbusSerialProvider implements IModbusProvider {
  private client: ModbusRTU;

  constructor() {
    this.client = new ModbusRTU();
    this.client.setID(1);
    this.client.setTimeout(3000);
    this.client.connectRTUBuffered(modBusConfig.port, modBusConfig.config);
  }

  public async switchCoil({ state, address }: ISwitchLampDTO): Promise<void> {
    await this.client.writeCoil(address, state);
  }
}
