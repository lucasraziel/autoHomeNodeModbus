import ISwitchLampDTO from '../dtos/ISwitchLampDTO';

export default interface IModbusProvider {
  switchCoil(lampState: ISwitchLampDTO): Promise<void>;
}
