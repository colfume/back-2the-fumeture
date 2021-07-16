import mongoose from "mongoose";
import { IPalette } from "../interfaces/IPalette";

const PaletteSchema = new mongoose.Schema({
  palette_name: {
    type: String,
    require: true,
  },
  palette_img: {
    type: String,
    require: true,
  },
  palette_title: {
    type: String,
    require: true,
  },
  palette_keyword: {
    type: String,
    require: true,
  },
  palette_matchColor: {
    type: [String],
    require: true,
  },
  palette_matchBg: {
    type: [String],
    require: true,
  },
  palette_explanation: {
    type: String,
    require: true,
  },
}, {
  versionKey : false //버전키 생성하지 않음
});

export default mongoose.model<IPalette & mongoose.Document>(
  "Palette",
  PaletteSchema
);
