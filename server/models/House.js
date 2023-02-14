import { Schema } from "mongoose";


export const HouseSchema = new Schema(
  {
    bedrooms: {type: Number, required: true},
    bathrooms: {type: Number, required: true},
    levels: {type: Number, required: true},
    sqft: {type: Number, required: true},
    description: {type: String, maxlength: 500}
  }
)