import Room from '../models/Room';

export default interface IRoomsRepository {
  list(): Promise<Room[]>;
  get(name: string): Promise<Room | undefined>;
}
