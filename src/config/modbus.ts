interface IModbus {
  port: string;
  config: {
    baudRate: number;
    dataBits: number;
    stopBits: number;
    parity: 'even' | 'odd';
  };
}

export default {
  port: '/dev/ttyUSB0',
  config: {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'even',
  },
} as IModbus;
