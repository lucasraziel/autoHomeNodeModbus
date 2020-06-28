import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SwitchLampService from '@modules/lamps/services/SwitchLampService';

export default class LampController {
  public async change(request: Request, response: Response): Promise<Response> {
    const { addressText } = request.params;
    const { state } = request.body;

    const address = Number(addressText);

    const switchLampService = container.resolve(SwitchLampService);

    await switchLampService.execute({ address, state });

    return response.status(204).json();
  }
}
