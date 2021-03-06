import mongoose from "mongoose";
import { IPerfume } from "../interfaces/IPerfume";

const PerfumeSchema = new mongoose.Schema({
  perfume_number: {
    type: Number,
    require: false,
  },
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
  },
  price: {
    type: String,
  },
  colors: [
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
      _id : false
    },
  ],
  styles: [
    {
      style1: {
        type: String,
        require: true,
        ref: "Style"
      },
      style2: {
        type: String,
        ref: "Style"
      },
      style3: {
        type: String,
        ref: "Style"
      },
      _id : false
    },
  ],
  moods: [
    {
      mood1: {
        type: String,
        require: true,
        ref: "Mood"
      },
      mood2: {
        type: String,
        ref: "Mood"
      },
      mood3: {
        type: String,
        ref: "Mood"
      },
      _id : false,
    },
  ],
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
    type: String,
    require: true,
    ref: "Palette"
  },
  palette_img: {
    type: String,
    require: true,
    ref: "Palette"
  }
}, {
  versionKey : false //버전키 생성하지 않음
});

export default mongoose.model<IPerfume & mongoose.Document>(
  "Perfume",
  PerfumeSchema
);
