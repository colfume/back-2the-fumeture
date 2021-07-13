import express, { Request, Response } from "express";
import Perfume from "../models/Perfume";
import Palette from "../models/Palette";

const router = express.Router();

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

router.get("/detail/:perfumeId", async (req, res) => {
  try {
    const perfumeId = await Perfume.find(_id => _id === req.params.perfumeId);
    if (!perfumeId) {
      return res.status(400).send("필요한 값이 없습니다.");
    };

    const result = await Perfume.find(_id => _id === perfumeId);
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
