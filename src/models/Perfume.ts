import mongoose from "mongoose";
import { IPerfume } from "../interfaces/IPerfume";


const PerfumeSchema = new mongoose.Schema({
  perfume_name: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  capacity: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  color_id: [
    {
      color1: {
        type: String,
        require: true,
        ref: "Color"
      },
      color2: {
        type: String,
        require: true,
        ref: "Color"
      },
      color3: {
        type: String,
        require: true,
        ref: "Color"
      },
    },
  ],
  style_id: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
    ref: "Style"
  },
  mood_id: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
    ref: "Mood"
  },
  description: {
    type: String,
    require: true,
  },
  top: {
    type: String,
    require: true,
  },
  middle: {
    type: String,
    require: true,
  },
  base: {
    type: String,
    require: true,
  },
  perfume_img: {
    type: String,
    require: true,
  },
  palette_id: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
    ref: "Palette"
  },
}, {
  versionKey : false //버전키 생성하지 않음
});

export default mongoose.model<IPerfume & mongoose.Document>(
  "Perfume",
  PerfumeSchema
);
