import express, { Request, Response } from "express";
import config from "../config";
import Palette from "../models/Palette";

const router = express.Router();

/**
 *  @route Post api/colfumetest
 *  @desc Register Palette
 *  @access Public
 */
router.post("/test", async (req, res) => {
  // 1. 질문에 대한 응답을 받습니다. (질문 총 7개)
  const { answer1, answer2, answer3, answer4, answer5, answer6, answer7 } = req.body;
  
  try {  
    // 2. 만약 질문을 받지 않은 것이 있다면, 오류!
    if ( !answer1 || !answer2 || !answer3 || !answer4 || !answer5 || !answer6 || !answer7 ) {
      res.status(400).json({ errors: [{ message: "질문에 대한 답변이 업써요" }]});
    }
    // 3. 질문에 따른 컬러 가중치를 계산합니다.
    // 3. 컬러를 선언해줍니다. (컬러 총 8개)
    let red : number = 0;
    let orange : number = 0;
    let vanila : number = 0;
    let green : number = 0;
    let sky : number = 0;
    let purple : number = 0;
    let pink : number = 0;
    let white : number = 0;

    // 질문 1번
    if( answer1 === 1 ){
      vanila += 3;
      orange += 3;
    }
    else if( answer1 === 2 ){
      red += 1;
      green += 1;
    };
    console.log( "Q1 : ", red, orange, vanila, green, sky, purple, pink, white );
    // 질문 2번
    if( answer2 === 1 ){
      red += 3;
      white += 3;
    }
    else if( answer2 === 2 ){
      orange += 3;
      sky += 3;
      green += 3;
      purple += 3;
    };
    console.log( "Q2 : ", red, orange, vanila, green, sky, purple, pink, white );
    // 질문 3번
    if( answer3 === 1 ){
      red += 3;
      purple += 3;
      green += 5;
    }
    else if( answer3 === 2 ){
      vanila += 3;
      orange += 3;
      pink += 3;
    };
    console.log( "Q3 : ", red, orange, vanila, green, sky, purple, pink, white );
    // 질문 4번
    if( answer4 === 1 ){
      green += 5;
      red += 3;
      purple += 3;
    }
    else if( answer4 === 2 ){
      vanila += 3;
      orange += 3;
      pink += 3;
    };
    console.log( "Q4 : ", red, orange, vanila, green, sky, purple, pink, white );
    // 질문 5번
    if( answer5 === 1 ){
      purple += 3;
      red += 1; 
    }
    else if( answer5 === 2 ){
      orange += 3;
      sky += 3;
      white += 3;
      pink += 1;
      vanila += 1;
    }
    console.log( "Q5 : ", red, orange, vanila, green, sky, purple, pink, white );
    // 질문 6번
    if( answer6 === 1 ){
      red += 3; 
      green += 3;
      purple += 3;
      sky += 3;
    }
    else if( answer6 === 2 ){
      orange += 3;
      white += 3;
      pink += 3;
    };
    console.log( "Q6 : ", red, orange, vanila, green, sky, purple, pink, white );
    // 질문 7번
    if( answer7 === 1 ){
      green += 5;
      white += 1;
    }
    else if( answer7 === 2 ){
      sky += 3;
      purple += 3;
    }

    // 색깔 배열
    const colorPalette = [ red, orange, vanila, green, sky, purple, pink, white ];
    
    // 4. 가장 점수가 높은 것은 몇점인지 찾고, 그 점수가 가지는 인덱스값을 찾습니다.
    const max_color_sum = Math.max.apply( null, colorPalette );
    console.log( "max color sum : ", max_color_sum );

    // 5. 최종적으로 가장 점수가 높은 컬러를 찾습니다.
    const max_color_index = colorPalette.indexOf(max_color_sum);
    console.log( "max color index : ", max_color_index );
    
    // 6-1. 컬러반환이 잘 됐을 경우
    res.status(200).json({ data: max_color_index, message: "컬퓸테스트 결과조회 성공했습니다." });
  } catch (error) {
    // 6-2. 컬러반환에 실패했을 경우
    console.error(error.message);
    return res.status(500).send("서버 내부 에러입니다.");
    }
});

module.exports = router;