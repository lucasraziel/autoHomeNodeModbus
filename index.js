var ModbusRTU = require('modbus-serial')

var client = new ModbusRTU();

client.connectRTU("/dev/ttyUSB0", { baudRate: 9600, dataBits: 8, stopBits: 1, parity: 'even' }, write);

function write() {
  client.setID(1);

  client.writeFC5(1, 1280,1 ,function (error){console.error(error.message)})
}