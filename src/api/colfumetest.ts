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
    let rp : number = 0;
    let op : number = 0;
    let vp : number = 0;
    let gp : number = 0;
    let sp : number = 0;
    let pup : number = 0;
    let pip : number = 0;
    let wp : number = 0;

    // rp: red point ...
    let colorPalette = [ 
      ['red', rp], ['orange', op], ['vanila', vp], ['green', gp], 
      ['sky', sp], ['pupple', pup], ['pink', pip], ['white', wp] 
    ];

    // 질문 1번
    if( answer1 === 1 ){
      vp += 3;
      op += 3;
    }
    else if( answer1 === 2 ){
      rp += 1;
      gp += 1;
    };
    console.log( "Q1 : ", rp, op, vp, gp, sp, pup, pip, wp );
    // 질문 2번
    if( answer2 === 1 ){
      rp += 3;
      wp += 3;
    }
    else if( answer2 === 2 ){
      op += 3;
      sp += 3;
      gp += 3;
      pup += 3;
    };
    console.log( "Q2 : ", rp, op, vp, gp, sp, pup, pip, wp );
    // 질문 3번
    if( answer3 === 1 ){
      rp += 3;
      pup += 3;
      gp += 5;
    }
    else if( answer3 === 2 ){
      vp += 3;
      op += 3;
      pip += 3;
    };
    console.log( "Q3 : ", rp, op, vp, gp, sp, pup, pip, wp );
    // 질문 4번
    if( answer4 === 1 ){
      gp += 5;
      rp += 3;
      pup += 3;
    }
    else if( answer4 === 2 ){
      vp += 3;
      op += 3;
      pip += 3;
    };
    console.log( "Q4 : ", rp, op, vp, gp, sp, pup, pip, wp );
    // 질문 5번
    if( answer5 === 1 ){
      pup += 3;
      rp += 1; 
    }
    else if( answer5 === 2 ){
      op += 3;
      sp += 3;
      wp += 3;
      pip += 1;
      vp += 1;
    }
    console.log( "Q5 : ", rp, op, vp, gp, sp, pup, pip, wp );
    // 질문 6번
    if( answer6 === 1 ){
      rp += 3; 
      gp += 3;
      pup += 3;
      sp += 3;
    }
    else if( answer6 === 2 ){
      op += 3;
      wp += 3;
      pip += 3;
    };
    console.log( "Q6 : ", rp, op, vp, gp, sp, pup, pip, wp );
    // 질문 7번
    if( answer7 === 1 ){
      gp += 5;
      wp += 1;
    }
    else if( answer7 === 2 ){
      sp += 3;
      pup += 3;
    }

    // 색깔 배열
    const colorPalette2 = [ rp, op, vp, gp, sp, pup, pip, wp ];
    
    // 4-1. 가장 점수가 높은 것은 몇점인지 찾고, 그 점수가 가지는 인덱스값을 찾습니다.
    const max_color_sum = Math.max.apply( null, colorPalette2 );
    console.log( "max color sum : ", max_color_sum );

    // 4-2. 최종적으로 가장 점수가 높은 컬러를 찾습니다.
    const max_color_index = colorPalette2.indexOf(max_color_sum);
    console.log( "max color index : ", max_color_index );
    
    // 4-3. 4-2의 인덱스 값을 colorPalette에 적용하여 컬러를 찾습니다.
    const max_color_name = colorPalette[max_color_index][0];
    console.log( "max color name : ", max_color_name );
    console.log(typeof(max_color_name));

    // 5. Palette 테이블에서 이름이 같은 컬럼을 찾고, 반환합니다.
    
    const result = await Palette.find()
    .select({ palette_name: 'pink' })
    .limit(1);
    
    /*
    const palettes = await Palette.findOne({ palette_name: max_color_name })
    .exec();
    */
    // 6-1. 컬러반환이 잘 됐을 경우

    res.status(200).json({ data: result, message: "컬퓸테스트 결과조회 성공했습니다." });
  } catch (error) {
    // 6-2. 컬러반환에 실패했을 경우
    console.error(error.message);
    return res.status(500).send("서버 내부 에러입니다.");
    }
});

module.exports = router;