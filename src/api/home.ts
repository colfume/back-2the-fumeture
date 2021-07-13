import express, { Request, Response } from "express";
import config from "../config";
import Perfume from "../models/Perfume";
import Section from "../models/Section";
import Mood from "../models/Mood";
import Style from "../models/Style";
import { IPerfumeInputDTO } from "../interfaces/IPerfume";
import { IStyleInputDTO } from "../interfaces/IStyle";
import { IMoodInputDTO } from "../interfaces/IMood";
import Palette from "../models/Palette";

const router = express.Router();

router.get("/recommand", async (req, res) => {
  try {
    const result = await Section.find()
    .select("section_name")
    .populate({
      path: "section_perfumes",
        populate: [{
          path: "perfume1",
          select: [ 'perfume_img', 'perfume_name' ],
          options: { retainNullValues: true },
          populate: [{
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
          }],
        },
        {
          path: "perfume2",
          select: [ 'perfume_img', 'perfume_name' ],
          options: { retainNullValues: true },
          populate: [{
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
          }],
        },        
        {
          path: "perfume3",
          select: [ 'perfume_img', 'perfume_name' ],
          options: { retainNullValues: true },
          populate: [{
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
          }],
        }, 
        {
          path: "perfume4",
          select: [ 'perfume_img', 'perfume_name' ],
          options: { retainNullValues: true },
          populate: [{
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
          }],
        }, 
        {
          path: "perfume5",
          select: [ 'perfume_img', 'perfume_name' ],
          options: { retainNullValues: true },
          populate: [{
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
          }],
        }, 
        {
          path: "perfume6",
          select: [ 'perfume_img', 'perfume_name' ],
          options: { retainNullValues: true },
          populate: [{
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
          }],
        },          
      ]   
    }, 
  );
    if(!result) {
      return res.status(400).send("필요한 값이 없습니다.");
    };

    const numbers = Math.floor(Math.random() * 6);
    const arr = result[numbers];
    res.status(200).json({ data: arr, message: "홈화면 추천 향수 완료" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("서버 내부 에러입니다.");
  }
});

router.get("/keyword", async (req, res) => {
  try {
      const moods = await Mood.find().or(
        [
          { "mood_name": "따뜻한" },
          { "mood_name": "차가운" },
        ]
      );
      if(!moods) {
        return res.status(400).send("필요한 값이 없습니다.");
      };
      const styles = await Style.find().or(
        [
          { "style_name": "정돈된 복장" },
          { "style_name": "캐주얼" },
        ]
      );
      if(!styles) {
        return res.status(400).send("필요한 값이 없습니다.");
      };
      res.json({ moods: moods, styles: styles, message: "무드, 스타일 불러오기 성공" });

  } catch (error) {
      console.error(error.message);
      res.status(500).send("서버 내부 에러입니다.");
  }
});


module.exports = router;