import mongoose from "mongoose";
import { IMood } from "../interfaces/IMood";


const MoodSchema = new mongoose.Schema({
  mood_name: {
    type: String,
    require: true,
  },
});

export default mongoose.model<IMood & mongoose.Document>(
  "Mood",
  MoodSchema
);

