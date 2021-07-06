import express, { Request, Response } from "express";
import config from "../config";

const router = express.Router();

import Perfume from "../models/Perfume";
import Palette from "../models/Palette";
import { IPerfumeInputDTO } from "../interfaces/IPerfume";
import { IPaletteInputDTO } from "../interfaces/IPalette";


/**
 *  @route Post api/colfumetest
 *  @desc Register Palette
 *  @access Public
 */
router.post("/colfumetest", async (req, res) => {
  // 1. 질문에 대한 응답을 받습니다. (질문 총 7개)
  // 근데 이거 Number로 어케받아?
  const { answer1, answer2, answer3, answer4, answer5, answer6, answer7 } = req.body;
  // 2. 만약 질문을 받지 않은 것이 있다면, 오류!
  if ( !answer1 || !answer2 || !answer3 || !answer4 || !answer5 || !answer6 || !answer7 ) {
    res.status(400).json({ errors: [{ msg: "질문에 대한 답변이 업써요" }]});
  }
  // 3. 질문에 따른 컬러 가중치를 계산합니다.
  // 3. 컬러를 선언해줍니다. (컬러 총 8개)
  const red : Number | String = 0;
  const red2 = 0;
  const orange : number = 0;
  const vanila : number = 0;
  const green : number = 0;
  const sky : number = 0;
  const purple : number = 0;
  const pink : number = 0;
  const white : number = 0;

  //const colorResult = { red, orange, vanila, green, sky, purple, pink, white } : Array<Number> = 0;

  if( answer1 === 1 ){
    vanila + 3;
    orange + 3;
  }
  else if(answer1 === 2){

  }
  try {
    // 4. 최종적으로 가장 점수가 높은 컬러를 반환합니다.

    // 4-1. 컬러반환이 잘 됐을 경우
    return res.status(200).send("결과를 가져와");
  } catch (err) {
    // 4-2. 컬러반환에 실패했을 경우
      console.log(err);
      return res.status(500).send("결과 불러오기 실패");
}
}); 

module.exports = router;