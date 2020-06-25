import 'reflect-metadata';
import FakeModbusProvider from '@shared/container/providers/ModbusProvider/fakes/FakeModbusProvider';
import FakeRoomsRepository from '@modules/rooms/repositories/fakes/FakeRoomsRepository';
import SwitchLampsFromARoomService from './SwitchLampsFromARoomService';

let fakeModbusProvider: FakeModbusProvider;
let fakeRoomsRepository: FakeRoomsRepository;
let switchLampsFromARoomService: SwitchLampsFromARoomService;

describe('Switch Lamp', () => {
  beforeEach(() => {
    fakeModbusProvider = new FakeModbusProvider();
    fakeRoomsRepository = new FakeRoomsRepository();
    switchLampsFromARoomService = new SwitchLampsFromARoomService(
      fakeRoomsRepository,
      fakeModbusProvider
    );
  });

  it('should switch the Lamps', async () => {
    const switchFunction = jest.spyOn(fakeModbusProvider, 'switchCoil');

    await switchLampsFromARoomService.execute({
      roomName: 'Sala',
      state: true,
    });

    expect(switchFunction).toBeCalledTimes(2);
  });

  it('should raise an error when room does not exist', async () => {
    await expect(
      switchLampsFromARoomService.execute({
        roomName: 'non existing room',
        state: true,
      })
    ).rejects;
  });
});
