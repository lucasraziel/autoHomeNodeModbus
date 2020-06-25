import { container } from 'tsyringe';

import IModbusProvider from '@shared/container/providers/ModbusProvider/models/IModbusProvider';
import ModbusSerialProvider from '@shared/container/providers/ModbusProvider/implementations/ModbusSerialProvider';

container.registerSingleton<IModbusProvider>(
  'ModbusProvider',
  ModbusSerialProvider
);
