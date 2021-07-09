import express from "express";
import Perfume from "../models/Perfume";
import Mood from "../models/Mood";
import Style from "../models/Style";
import Palette from "../models/Palette";

const router = express.Router();

router.get("/home/palette", async (req, res) => {
  try {
    const palettes = await Palette.find();
    if (!palettes) {
      return res.status(400).send("필요한 값이 없습니다.");
    }
    res.json({ palettes, message: "팔레트 색상 불러오기 성공" }); //이렇게 하면 안읽히나
  } catch (error) {
    console.error(error.message);
    res.status(500).send("서버 내부 에러입니다.");
  }
});

router.get("/home/product", async (req, res) => {
  try {
    const result = await Perfume.find({
      attributes: ['_id', 'perfume_name']
    })
    .populate({
      path: "moods",
      populate: [{
        path: "mood1",
        options: { retainNullValues: true }
      }]
    });
    if (!result) {
      return res.status(400).send("필요한 값이 없습니다.");
    }
    res.json({ result, message: "프로덕트 페이지 불러오기 성공" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("서버 내부 에러입니다.");
  }
});

module.exports = router;