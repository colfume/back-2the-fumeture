import mongoose from "mongoose";
import { IStyle } from "../interfaces/IStyle";

const StyleSchema = new mongoose.Schema({
  style_name: {
    type: String,
    require: true,
  },
}, {
  versionKey : false //버전키 생성하지 않음
});

export default mongoose.model<IStyle & mongoose.Document>(
  "Style",
  StyleSchema
);
