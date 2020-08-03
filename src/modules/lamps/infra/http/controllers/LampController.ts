import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SwitchLampService from '@modules/lamps/services/SwitchLampService';
import GetLampService from '@modules/lamps/services/GetLampStateService';

export default class LampController {
  public async change(request: Request, response: Response): Promise<Response> {
    const { address } = request.params;
    const { state } = request.body;

    const addressNumber = Number(address);

    const switchLampService = container.resolve(SwitchLampService);

    await switchLampService.execute({ address: addressNumber, state });

    return response.status(204).json();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { address } = request.params;

    const addressNumber = Number(address);

    const getLampService = container.resolve(GetLampService);

    const state = await getLampService.execute(addressNumber);

    return response.json(state);
  }
}
