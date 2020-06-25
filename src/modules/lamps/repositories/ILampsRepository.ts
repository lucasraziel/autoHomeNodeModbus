import Lamp from '../models/Lamp';

export default interface ILampsRepository {
  getLamp(address: number): Promise<Lamp | undefined>;
  getLamps(roomName: string): Promise<Lamp[]>;
}
