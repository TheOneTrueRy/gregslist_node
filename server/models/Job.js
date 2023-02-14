import { Schema } from "mongoose";


export const JobSchema = new Schema(
  {
    company: {type: String, required: true},
    position: {type: String, required: true},
    rate: {type: Number, required: true},
    description: {type: String, maxlength: 500},
    hours: {type: String, required: true, enum: ['Full-Time', 'Part-Time']}
  }
)