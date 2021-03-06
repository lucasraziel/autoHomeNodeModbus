import IRoomsRepository from '@modules/rooms/repositories/IRoomsRepository';
import Room from '@modules/rooms/models/Room';

import data from '@shared/infra/json/data.json';

export default class RoomsRepository implements IRoomsRepository {
  private rooms: Room[];

  constructor() {
    this.rooms = data as Room[];
  }

  public async list(): Promise<Room[]> {
    return this.rooms;
  }

  public async get(name: string): Promise<Room | undefined> {
    return this.rooms.find((room) => room.name === name);
  }
}
