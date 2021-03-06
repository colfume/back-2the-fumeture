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
      return res.status(400).send("????????? ?????? ????????????.");
    };

    const numbers = Math.floor(Math.random() * 6);
    const arr = result[numbers];
    res.status(200).json({ data: arr, message: "????????? ?????? ?????? ??????" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("?????? ?????? ???????????????.");
  }
});

router.get("/keyword", async (req, res) => {
  try {
      const moods = await Mood.find().or(
        [
          { "mood_name": "?????????" },
          { "mood_name": "?????????" },
          { "mood_name": "?????????" },
          { "mood_name": "?????????" },
          { "mood_name": "?????????" },
          { "mood_name": "???????????????" },
        ]
      );
      if(!moods) {
        return res.status(400).send("????????? ?????? ????????????.");
      };
      const styles = await Style.find().or(
        [
          { "style_name": "?????????" },
          { "style_name": "?????????" },
          { "style_name": "????????????" },
          { "style_name": "????????????" },
          { "style_name": "????????????" },
          { "style_name": "????????????" },
        ]
      );
      if(!styles) {
        return res.status(400).send("????????? ?????? ????????????.");
      };
      res.json({ moods: moods, styles: styles, message: "??????, ????????? ???????????? ??????" });

  } catch (error) {
      console.error(error.message);
      res.status(500).send("?????? ?????? ???????????????.");
  }
});


module.exports = router;