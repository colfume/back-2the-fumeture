import mongoose from "mongoose";
import { ISection } from "../interfaces/ISection";


const SectionSchema = new mongoose.Schema({
  section_name: {
    type: String,
    require: true,
  },
  section_perfumes: [
    {
      perfume1: {
        type: String,
        require: true,
        ref: "Perfume"
      },
      perfume2: {
        type: String,
        ref: "Perfume"
      },
      perfume3: {
        type: String,
        ref: "Perfume"
      },
      perfume4: {
        type: String,
        ref: "Perfume"
      },
      perfume5: {
        type: String,
        ref: "Perfume"
      },
      perfume6: {
        type: String,
        ref: "Perfume"
      },
      _id : false
    },
  ],
}, 
{
  versionKey : false //버전키 생성하지 않음
});

export default mongoose.model<ISection & mongoose.Document>(
  "Section",
  SectionSchema
);
