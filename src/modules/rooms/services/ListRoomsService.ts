import {inject, injectable} from 'tsyringe'
import Room from '@modules/rooms/models/Room'
import IRoomsRepository from '@modules/rooms/repositories/IRoomsRepository'

@injectable()
export default class ListRoomsService {
  constructor(
    @inject('RoomsRepository')
    private roomsRepository: IRoomsRepository
  ){}

  public async execute():Promise<Room[]> {
    return this.roomsRepository.list()
  }
}
