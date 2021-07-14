import express, { Request, Response } from "express";
import Perfume from "../models/Perfume";
import Palette from "../models/Palette";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Perfume.find()
    .select(["perfume_name", "perfume_img"])
    .populate({
      path: "moods",
      populate: [{
        path: "mood1",
        options: { retainNullValues: true }
      },
      {
        path: "mood2",
        options: { retainNullValues: true }
      },
      {
        path: "mood3",
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
router.get("/:paletteName", async (req, res) => {
  try {
    let paletteId = await Palette.findOne(
      { palette_name: req.params.paletteName },
      { attributes: ['_id'] });
    if (!paletteId) {
      return res.status(400).send("필요한 값이 없습니다.");
    };
    paletteId = paletteId._id.toString();

    const result = await Perfume.find(
      { "palette_id": paletteId }
    )
    .select(["perfume_name", "perfume_img"])
    .populate({
      path: "moods",
      populate: [{
        path: "mood1",
        options: { retainNullValues: true }
      },
      {
        path: "mood2",
        options: { retainNullValues: true }
      },
      {
        path: "mood3",
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
router.get("/detail/:perfumeName", async (req, res) => {
  try {
    let perfumeId = await Perfume.findOne(
      { perfume_name: req.params.perfumeName },
      { attributes: ['_id'] });
    if (!perfumeId) {
      return res.status(400).send("필요한 값이 없습니다.");
    };
    perfumeId = perfumeId._id.toString();

    const result = await Perfume.find({ "_id": perfumeId });
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
