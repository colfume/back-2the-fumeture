import mongoose from "mongoose";
import config from "../config";
import Mood from "../models/Mood";
import Palette from "../models/Palette";
import Perfume from "../models/Perfume";
import Section from "../models/Section";
import Style from "../models/Style";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    Mood.createCollection().then(function (collection) {
      console.log("무드 컬렉션 생성 완료");
    });

    Palette.createCollection().then(function (collection) {
      console.log("팔레트 컬렉션 생성 완료");
    });

    Perfume.createCollection().then(function (collection) {
      console.log("퍼퓸 컬렉션 생성 완료");
    });

    Section.createCollection().then(function (collection) {
      console.log("섹션 컬렉션 생성 완료");
    });

    Style.createCollection().then(function (collection) {
      console.log("스타일 컬렉션 생성 완료");
    });

    console.log("Mongoose Connected ...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
