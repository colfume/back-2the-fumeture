import mongoose from "mongoose";
import { IMood } from "../interfaces/IMood";


const MoodSchema = new mongoose.Schema({
  mood_name: {
    type: String,
    require: true,
  },
}, {
  versionKey : false //버전키 생성하지 않음
});

export default mongoose.model<IMood & mongoose.Document>(
  "Mood",
  MoodSchema
);
