import IRoomsRepository from '@modules/rooms/repositories/IRoomsRepository'
import Room from '@modules/rooms/models/Room';

import data from '@shared/infra/json/data.json'

export default class RoomsRepository implements IRoomsRepository {
  public async list(): Promise<Room[]> {
    return data as Room[]
  }

  public async get(name:string): Promise<Room | undefined> {
    return (data as Room[]).find(room=> room.name===name)
  }


}
