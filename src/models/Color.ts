import mongoose from "mongoose";
import { IColor } from "../interfaces/IColor";


const ColorSchema = new mongoose.Schema({
  color_name: {
    type: String,
    require: true,
  },
  color_img: {
    type: String,
    require: true,
  },
}, {
  versionKey : false //버전키 생성하지 않음
});

export default mongoose.model<IColor & mongoose.Document>(
  "Color",
  ColorSchema
);
