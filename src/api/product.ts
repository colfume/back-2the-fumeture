import express from "express";
import Perfume from "../models/Perfume";
import Palette from "../models/Palette";

const router = express.Router();

router.get("/palette", async (req, res) => {
  try {
    const result = await Palette.find();
    if (!result) {
      return res.status(400).send("필요한 값이 없습니다.");
    }
    res.status(200).json({ data: result, message: "팔레트 색상 불러오기 성공했습니다." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("서버 내부 에러입니다.");
  }
});

router.get("/product", async (req, res) => {
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
    res.status(200).json({ data: result, message: "프로덕트 페이지 불러오기 성공했습니다." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("서버 내부 에러입니다.");
  }
});

router.get("/detail", async (req, res) => {
  try {
    const result = await Perfume.find();
    if (!result) {
      return res.status(400).send("필요한 값이 없습니다.");
    }
    res.status(200).json({ data: result, message: "상세 페이지 불러오기 성공했습니다." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("서버 내부 에러입니다.");
  }
});

module.exports = router;
