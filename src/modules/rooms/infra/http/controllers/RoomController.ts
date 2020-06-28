import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListRoomService from '@modules/rooms/services/ListRoomsService';

export default class RoomController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRoomService = container.resolve(ListRoomService);

    const rooms = await listRoomService.execute();

    return response.json(rooms);
  }
}
