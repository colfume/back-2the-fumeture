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
});

export default mongoose.model<IPalette & mongoose.Document>(
  "Palette",
  PaletteSchema
);

