import IRoomsRepository from '@modules/rooms/repositories/IRoomsRepository';
import Room from '@modules/rooms/models/Room';

const data: Room[] = [
  {
    name: 'Sala',
    lamps: [
      {
        address: 1280,
        name: 'Principal',
      },
      {
        address: 1290,
        name: 'Auxiliar',
      },
    ],
  },
];

export default class RoomsRepository implements IRoomsRepository {
  public async list(): Promise<Room[]> {
    return data as Room[];
  }

  public async get(name: string): Promise<Room | undefined> {
    return (data as Room[]).find((room) => room.name === name);
  }
}
