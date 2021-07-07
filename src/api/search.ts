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

router.get("/getkeyword", async (req, res) => {
  try {
      const moods = await Mood.find();
      const styles = await Style.find();
      res.json({moods: moods, styles: styles, message: "무드, 스타일 불러오기 성공"});

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});

router.get("/filter/:moodName", async (req, res) => {
  try {

      let moodId = await Mood.findOne(
        { mood_name : req.params.moodName },
        { attributes: ['_id']}
      );
      console.log(moodId);
      moodId = moodId._id.toString();

      const filtered_perfume = await Perfume.find().or(
        [
          {"moods.0.mood1" : moodId},
          {"moods.0.mood2" : moodId},
          {"moods.0.mood3" : moodId}
        ],
      ).select(["perfume_name"]).populate("moods");
      let perfumes = filtered_perfume[0];

      res.json({moods: perfumes, message: "무드 향수 정보 불러오기 성공"});

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});


module.exports = router;