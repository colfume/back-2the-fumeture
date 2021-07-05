import express, { Request, Response } from "express";
import config from "../config";
import Perfume from "../models/Perfume";
import Palette from "../models/Palette";
import { IPerfumeInputDTO } from "../interfaces/IPerfume";
import { IPaletteInputDTO } from "../interfaces/IPalette";

const router = express.Router();
const colfumetestController = require('../../controller/colfumetest.controller.spec');

/**
 * @api {post} /colfumetest
 * @apiName postColfumetest
 * @apiGroup Palette
 */
router.post("/colfumetest", async (req, res) => {
  try {
    //1  1~14번 답변을 배열로 받기 : 답변받는 컨트롤러/서비스
    colfumetestController.postAnswer
    //2  결과 보내기 : 결과를 도출하는 컨트롤러/서비스
      const palettes = await Palette.find();
      res.json({palette_name: palettes , message: "컬퓸테스트 컬러 불러오기 성공"});

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});


module.exports = router;