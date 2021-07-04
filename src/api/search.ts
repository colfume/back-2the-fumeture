import express, { Request, Response } from "express";
import config from "../config";
import Perfume from "../models/Perfume";
import Mood from "../models/Mood";
import Style from "../models/Style";
import { IPerfumeInputDTO } from "../interfaces/IPerfume";
import { IStyleInputDTO } from "../interfaces/IStyle";
import { IMoodInputDTO } from "../interfaces/IMood";

const router = express.Router();

router.get("/getkeyword", async (req, res) => {
  try {
      const moods = await Mood.find();
      const styles = await Style.find();
      //res.json([{moods: moods, message: "무드 불러오기 성공"},{ styles: styles, message: "스타일 불러오기 성공"}]);
      res.json({moods: moods, styles: styles, message: "무드, 스타일 불러오기 성공"});

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});

router.get("/filter/:moodName", async (req, res) => {
  try {
      
      const moodId = await Mood.findOne(
        { mood_name : req.params.moodName },
        { attributes: ['_id'] }
      );

      const filtered_perfume = await Perfume.find(
        { mood_id: moodId },
        { attributes: ['perfume_name','mood_id']}
      ).populate('mood', ['mood_name']);

      console.log(filtered_perfume);
      res.json({moods: filtered_perfume, message: "무드 향수 정보 불러오기 성공"});

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const { perfume_name, brand, color_id, style_id, mood_id, description, top, middle, base, perfume_img, palette_id} = req.body;
    const perfume = new Perfume({
      perfume_name, brand, color_id, style_id, mood_id, description, top, middle, base, perfume_img, palette_id
    })

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});


module.exports = router;