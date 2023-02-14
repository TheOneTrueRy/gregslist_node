import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController{
  constructor(){
    super('api/houses')
    this.router
    .get('', this.getHouses)
    .get('/:id', this.getHouse)
    .post('', this.createHouse)
    .put('/:id', this.updateHouse)
    .delete('/:id', this.deleteHouse)
  }
  async deleteHouse(req, res, next) {
    try {
      let houseID = req.params.id
      let house = await housesService.deleteHouse(houseID)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }
  async createHouse(req, res, next) {
    try {
      let houseData = req.body
      let house = await housesService.createHouse(houseData)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }
  async getHouse(req, res, next) {
    try {
      
    } catch (error) {
      next(error)
    }
  }

  async updateHouse(){

  }

  async getHouses(req, res, next){
    try {
      let query = req.query
      const houses = await housesService.getHouses(query)
      res.send(houses)
    } catch (error) {
      next(error)
    }
  }


}