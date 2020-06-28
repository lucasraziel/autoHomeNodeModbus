import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListRoomService from '@modules/rooms/services/ListRoomsService';
import GetStateOfLampService from '@modules/rooms/services/GetStateOfLampsService';

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
}
