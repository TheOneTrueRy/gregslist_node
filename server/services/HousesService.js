import { dbContext } from "../db/DbContext.js"


class HousesService{
  async createHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }
  async deleteHouse(houseID) {
    throw new Error("Method not implemented.")
  }
  async getHouses(query) {
  const houses = await dbContext.Houses.find(query)
  return houses
  }

}

export const housesService = new HousesService()