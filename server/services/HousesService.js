import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class HousesService{
  async updateHouse(houseID, houseData) {
    const foundHouse = await this.getHouse(houseID)
    foundHouse.bedrooms = houseData.bedrooms || foundHouse.bedrooms
    foundHouse.bathrooms = houseData.bathrooms || foundHouse.bathrooms
    foundHouse.levels = houseData.levels || foundHouse.levels
    foundHouse.sqft = houseData.sqft || foundHouse.sqft
    foundHouse.description = houseData.description || foundHouse.description
    await foundHouse.save()
    return foundHouse
  }
  async getHouse(houseID) {
    const house = await dbContext.Houses.findById(houseID)
    if(!house){
      throw new BadRequest('Invalid House ID!')
    }
    return house
  }
  async createHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }
  async deleteHouse(houseID) {
    const house = await this.getHouse(houseID)
    await house.remove()
    return house
  }
  async getHouses(query) {
  const houses = await dbContext.Houses.find(query)
  return houses
  }

}

export const housesService = new HousesService()