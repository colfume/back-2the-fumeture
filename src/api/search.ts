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
        { attributes: ['_id']}
      );
      
      console.log(moodId);

      const filtered_perfume = await Perfume.find(
        { "moods.capacity1" : moodId },
        //{ attributes: ['perfume_name','mood_id']}
      );
      //.populate('mood', ['mood_name']);
      console.log(filtered_perfume);

      res.json({moods: filtered_perfume, message: "무드 향수 정보 불러오기 성공"});

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});

router.post("/a", async (req, res) => {
  const { perfume_name, brand, capicity1, capicity2, capicity3, price1, price2,price3,styles1,styles2,styles3,moods1,moods2,moods3,description,top,middle,base,perfume_img,palette_id} = req.body;
  try {
      
      let perfumes = new Perfume({
        perfume_name, 
        brand, 
        "capacity.0.capacity1": capicity1, 
        "capacity.0.capacity2": capicity2, 
        "capacity.0.capacity3": capicity3, 
        "price.0.price1": price1, 
        "price.0.price2": price2,
        "price.0.price3": price3, 
        "styles.0.style1": styles1,
        "styles.0.style2": styles2,
        "styles.0.style3": styles3,
        "moods.0.mood1": moods1,
        "moods.0.mood2": moods2,
        "moods.0.mood3": moods3,
        description,
        top,
        middle,
        base,
        perfume_img,
        palette_id,
        "colors.0.color1": styles1,
        "colors.0.color2": styles1,
        "colors.0.color3": styles1,
      });
      console.log(perfumes);

      await perfumes.save();
      console.log("aaaa");
      res.json(perfumes);


  } catch (err) {
      console.log("error");
      res.status(500).send("Server Error");
  }
});

module.exports = router;