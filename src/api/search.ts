import express, { Request, Response } from "express";
import config from "../config";
import Perfume from "../models/Perfume";
import Mood from "../models/Mood";
import Style from "../models/Style";
import { IPerfumeInputDTO } from "../interfaces/IPerfume";
import { IStyleInputDTO } from "../interfaces/IStyle";
import { IMoodInputDTO } from "../interfaces/IMood";
import Palette from "../models/Palette";

const router = express.Router();

router.get("/keyword", async (req, res) => {
  try {
      const moods = await Mood.find();
      if(!moods) {
        return res.status(400).send("필요한 값이 없습니다.");
      };
      const styles = await Style.find();
      if(!styles) {
        return res.status(400).send("필요한 값이 없습니다.");
      };
      res.json({ moods: moods, styles: styles, message: "무드, 스타일 불러오기 성공" });

  } catch (error) {
      console.error(error.message);
      res.status(500).send("서버 내부 에러입니다.");
  }
});

router.get("/filter/:moodName", async (req, res) => {
  try {

      let moodId = await Mood.findOne(
        { mood_name : req.params.moodName },
        { attributes: ['_id'] }
      );
      if(!moodId) {
        return res.status(400).send("필요한 값이 없습니다.");
      };
      moodId = moodId._id.toString();

      const filtered_perfume = await Perfume.find().or(
        [
          {"moods.0.mood1" : moodId},
          {"moods.0.mood2" : moodId},
          {"moods.0.mood3" : moodId}
        ],
      )
      .select(["perfume_name"])
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
        },          
        ]   
      },
    )
      if(!filtered_perfume) {
        return res.status(400).send("필요한 값이 없습니다.");
      };

      res.json({ data: filtered_perfume, message: "무드 향수 정보 불러오기 성공" });

  } catch (error) {
      console.error(error.message);
      res.status(500).send("서버 내부 에러입니다.");
  }
});

router.get("/filter/style/:styleName", async (req, res) => {
  try {

      let styleId = await Style.findOne(
        { style_name : req.params.styleName },
        { attributes: ['_id'] }
      );
      if(!styleId) {
        return res.status(400).send("필요한 값이 없습니다.");
      };
      styleId = styleId._id.toString();

      const filtered_perfume = await Perfume.find().or(
        [
          { "styles.0.style1" : styleId },
          { "styles.0.style2" : styleId },
          { "styles.0.style3" : styleId }
        ],
      )
      .select(["perfume_name"])
      .populate({
          path: "styles",
          populate: [{
            path: "style1",
            options: { retainNullValues: true }
          },
          {
            path: "style2",
            options: { retainNullValues: true }
          },        
          {
            path: "style3",
            options: { retainNullValues: true }
          },          
          ]   
        },
      )

      if(!filtered_perfume) {
        return res.status(400).send("필요한 값이 없습니다.");
      };

      res.json({ data: filtered_perfume, message: "스타일 향수 정보 불러오기 성공" });

  } catch (error) {
      console.error(error.message);
      res.status(500).send("서버 내부 에러입니다.");
  }
});

// 제품이름, 브랜드이름
router.get("/:keyword", async (req, res) => {
  try {

    const result = await Perfume.find().or([
      { perfume_name: { $regex: req.params.keyword } },
      { brand: { $regex: req.params.keyword } },
      ]
    ).
    select(["perfume_name"])
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
      },          
      ]   
    },
    );
    if (!result) {
      return res.status(400).json("필요한 값이 없습니다.");
    }
    return res.status(200).json({ data: result });

  } catch (error) {
      console.error(error.message);
      res.status(500).send("서버 내부 에러입니다.");
  }
});

module.exports = router;
