import 'reflect-metadata'
import FakeRoomsRepository from '@modules/rooms/repositories/fakes/FakeRoomsRepository'
import ListRoomService from './ListRoomsService'

let fakeRoomsRepository: FakeRoomsRepository;
let listRoomService: ListRoomService

describe('List Rooms', ()=>{
  beforeEach(()=>{
    fakeRoomsRepository = new FakeRoomsRepository();
    listRoomService = new ListRoomService(fakeRoomsRepository)
  })

  it ('should list the rooms', async ()=>{
    const rooms = await listRoomService.execute();

    expect(rooms).toHaveLength(1)
  })
})
