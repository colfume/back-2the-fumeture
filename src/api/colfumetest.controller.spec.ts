//spec를 빼면 진짜임
const { Palette } = require('../models/Palette');
const colfumetestService = require('../service/colfumetestService');

module.exports = {
  postAnswer: async (req, res) => {

    const { answer } = req.body;

    try {

      // 대충 일케~~,,
      let red, sky, pink, white = 0;
      if (answer[0] == 1 ) {
        red += 2;
        sky += 1;
      }
    }
  },

  // 결과 가져오기
  getPalette: async (req, res) => {
    try {
      // 계산값 가져오기
      const a = 1;
      const b = 1;
      const c = 1;
      const d = 1;
      const e = 1;
      const f = 1;
      const g = 1;
      await colfumetestService.getPalette(a,b,c,d,e,f,g);

      return res.status(200).send("결과를 가져와");
    } catch (err) {
      console.log(err);
      return res.status(500).send("결과 불러오기 실패");
    }
  },
};
