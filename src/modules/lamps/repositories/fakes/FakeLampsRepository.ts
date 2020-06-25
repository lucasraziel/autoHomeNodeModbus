import Room from '@modules/rooms/models/Room';
import Lamp from '../../models/Lamp';
import ILampsRepository from '../ILampsRepository';

const data: Room[] = [
  {
    name: 'Sala',
    lamps: [
      {
        address: 1,
        name: 'principal',
        state: true,
      },
      {
        address: 2,
        name: 'auxiliar',
        state: true,
      },
    ],
  },
  {
    name: 'Cozinha',
    lamps: [
      {
        address: 3,
        name: 'principal',
        state: true,
      },
      {
        address: 4,
        name: 'auxiliar',
        state: true,
      },
    ],
  },
];

export default class LampRepositories implements ILampsRepository {
  private rooms: Room[];

  constructor() {
    this.rooms = data;
  }

  public async getLamp(address: number): Promise<Lamp | undefined> {
    return this.rooms
      .flatMap((room) => room.lamps)
      .find((lamp) => lamp.address === address);
  }

  public async getLamps(roomName: string): Promise<Lamp[]> {
    const responseLamps: Lamp[] = [];

    const room = this.rooms.find((roomItem) => roomItem.name === roomName);

    if (!room) {
      return responseLamps;
    }

    return room.lamps;
  }
}
