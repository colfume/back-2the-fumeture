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
  const red : number | String = 0;
  const red2 = 0;
  const orange : number = 0;
  const vanila : number = 0;
  const green : number = 0;
  const sky : number = 0;
  const purple : number = 0;
  const pink : number = 0;
  const white : number = 0;

  //const colorResult = { red, orange, vanila, green, sky, purple, pink, white } : Array<Number> = 0;
  // 질문 1번
  if( answer1 === 1 ){
    vanila + 3;
    orange + 3;
  }
  else if( answer1 === 2 ){
    red + 1;
    green + 1;
  };
  // 질문 2번
  if( answer2 === 1 ){
    red + 3;
    white + 3;
  }
  else if( answer2 === 2 ){
    orange + 3;
    sky + 3;
    green + 3;
    purple + 3;
  };
  // 질문 3번
  if( answer3 === 1 ){
    red + 3;
    purple + 3;
    green + 5;
  }
  else if( answer3 === 2 ){
    vanila + 3;
    orange + 3;
    pink + 3;
  };
  // 질문 4번
  if( answer4 === 1 ){
    green + 5;
    red + 3;
    purple + 3;
  }
  else if( answer4 === 2 ){
    vanila + 3;
    orange + 3;
    pink + 3;
  };
  // 질문 5번
  if( answer5 === 1 ){
    purple + 3;
    red + 1; 
  }
  else if( answer5 === 2 ){
    orange + 3;
    sky + 3;
    white + 3;
    pink + 1;
    vanila + 1;
  }
  // 질문 6번
  if( answer6 === 1 ){
    red + 3; 
    green + 3;
    purple + 3;
    sky + 3;
  }
  else if( answer6 === 2 ){
    orange + 3;
    white + 3;
    pink + 3;
  };
  // 질문 7번
  if( answer7 === 1 ){
    green + 5;
    white + 1;
  }
  else if( answer7 === 2 ){
    sky + 3;
    purple + 3;
  }

  // 색깔 배열 만들기
  const colorPalette = [ red, orange, vanila, green, sky, purple, pink, white ];

  try {
    // 4. 최종적으로 가장 점수가 높은 컬러를 찾습니다.
    const max_color = Math.max.apply( null, colorPalette );
    console.log(max_color);
    // 5. Palette 테이블에서 이름이 같은 컬럼을 찾고, 반환합니다. 
  try {
    let user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({
        errors: [{ msg: "Invalid Credentials" }],
      });
    }
    
    const result = await Palette.findOne({
      palette_name,
    }).populate("user", ["name", "avatar"]);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });
    res.json(profile);

    // 4-1. 컬러반환이 잘 됐을 경우
    return res.status(200).send("결과를 가져와");
  } catch (err) {
    // 4-2. 컬러반환에 실패했을 경우
      console.log(err);
      return res.status(500).send("결과 불러오기 실패");
}
}); 

module.exports = router;