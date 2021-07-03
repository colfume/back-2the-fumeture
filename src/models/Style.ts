import mongoose from "mongoose";
import { IStyle } from "../interfaces/IStyle";


const StyleSchema = new mongoose.Schema({
  style_name: {
    type: String,
    require: true,
  },
});

export default mongoose.model<IStyle & mongoose.Document>(
  "Style",
  StyleSchema
);

