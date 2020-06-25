import 'reflect-metadata';
import FakeModbusProvider from '@shared/container/providers/ModbusProvider/fakes/FakeModbusProvider';
import FakeLampsRepository from '@modules/lamps/repositories/fakes/FakeLampsRepository';
import SwitchLampService from './SwitchLampService';

let fakeModbusProvider: FakeModbusProvider;
let fakeLampsRepository: FakeLampsRepository;
let switchLampService: SwitchLampService;

describe('Switch Lamp', () => {
  beforeEach(() => {
    fakeModbusProvider = new FakeModbusProvider();
    fakeLampsRepository = new FakeLampsRepository();
    switchLampService = new SwitchLampService(
      fakeLampsRepository,
      fakeModbusProvider
    );
  });

  it('should turn on the lamp', async () => {
    const switchFunction = jest.spyOn(fakeModbusProvider, 'switchCoil');

    await switchLampService.execute({ address: 1, state: true });

    expect(switchFunction).toHaveBeenCalledWith({ address: 1, state: true });
  });

  it('should raise an error when lamp does not exist', async () => {
    await expect(switchLampService.execute({ address: 111, state: true }))
      .rejects;
  });
});
