import ISwitchLampDTO from '../dtos/ISwitchLampDTO';
import IGetLampsStateDTO from '../dtos/IGetLampsStateDTO';
import IStateCoilDTO from '../dtos/IStateCoilDTO';

export default interface IModbusProvider {
  switchCoil(lampState: ISwitchLampDTO): Promise<void>;
  getStates(getLampsState: IGetLampsStateDTO): Promise<IStateCoilDTO[]>;
}
