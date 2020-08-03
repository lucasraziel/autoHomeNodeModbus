import 'reflect-metadata';
import FakeModbusProvider from '@shared/container/providers/ModbusProvider/fakes/FakeModbusProvider';
import GetStateOfLampsService from './GetLampStateService';

let fakeModbusProvider: FakeModbusProvider;
let getStateOfLampsService: GetStateOfLampsService;

describe('state  Lamp', () => {
  beforeEach(() => {
    fakeModbusProvider = new FakeModbusProvider();
    getStateOfLampsService = new GetStateOfLampsService(fakeModbusProvider);
  });

  it('should get the state', async () => {
    const lampState = await getStateOfLampsService.execute(1299);

    expect(lampState).toBe(true);
  });

  it('should raise an error when lamp does not exist', async () => {
    await expect(getStateOfLampsService.execute(1)).rejects;
  });
});
