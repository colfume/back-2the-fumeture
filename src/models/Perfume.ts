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
  capacity: [
    {
      capacity1: {
        type: String,
        require: true,
      },
      capacity2: {
        type: String,
      },
      capacity3: {
        type: String,
      },
      id : false
    },
  ],
  price: [
    {
      price1: {
        type: String,
        require: true,
      },
      price2: {
        type: String,
      },
      price3: {
        type: String,
      },
      id : false
    },
  ],
  colors: [
    {
      color1: {
        type: Number,
        require: true,
      },
      color2: {
        type: Number,
        require: true,
      },
      color3: {
        type: Number,
        require: true,
      },
      id : false
    },
  ],
  styles: [
    {
      style1: {
        type: String,
        require: true,
      },
      style2: {
        type: String,
      },
      style3: {
        type: String,
      },
      id : false
    },
  ],
  moods: [
    {
      mood1: {
        type: String,
        require: true,
      },
      mood2: {
        type: String,
      },
      mood3: {
        type: String,
      },
      id : false
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
