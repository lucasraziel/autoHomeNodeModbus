import 'reflect-metadata';
import FakeModbusProvider from '@shared/container/providers/ModbusProvider/fakes/FakeModbusProvider';
import FakeRoomsRepository from '@modules/rooms/repositories/fakes/FakeRoomsRepository';
import GetStateOfLampsService from './GetStateOfLampsService';

let fakeModbusProvider: FakeModbusProvider;
let fakeRoomsRepository: FakeRoomsRepository;
let getStateOfLampsService: GetStateOfLampsService;

describe('Switch Lamp', () => {
  beforeEach(() => {
    fakeModbusProvider = new FakeModbusProvider();
    fakeRoomsRepository = new FakeRoomsRepository();
    getStateOfLampsService = new GetStateOfLampsService(
      fakeRoomsRepository,
      fakeModbusProvider
    );
  });

  it('should get the states', async () => {
    const lampStates = await getStateOfLampsService.execute('Sala');

    expect(lampStates).toHaveLength(2);
    expect(lampStates).toContainEqual({
      address: 1280,
      name: 'Principal',
      state: true,
    });
    expect(lampStates).toContainEqual({
      address: 1290,
      name: 'Auxiliar',
      state: true,
    });
  });

  it('should raise an error when room does not exist', async () => {
    await expect(getStateOfLampsService.execute('non existing room')).rejects;
  });
});
