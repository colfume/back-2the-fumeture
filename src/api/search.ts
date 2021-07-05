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

module.exports = router;