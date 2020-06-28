import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListRoomService from '@modules/rooms/services/ListRoomsService';
import GetStateOfLampService from '@modules/rooms/services/GetStateOfLampsService';
import SwitchLampsFromARoomService from '@modules/rooms/services/SwitchLampsFromARoomService';

export default class RoomController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRoomService = container.resolve(ListRoomService);

    const rooms = await listRoomService.execute();

    return response.json(rooms);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const getStateOfLampSarvice = container.resolve(GetStateOfLampService);

    const lamps = await getStateOfLampSarvice.execute(name);

    return response.json(lamps);
  }

  public async change(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const { state } = request.body;

    const switchLampsFromARoomService = container.resolve(
      SwitchLampsFromARoomService
    );

    await switchLampsFromARoomService.execute({ roomName: name, state });

    return response.status(204).json();
  }
}
