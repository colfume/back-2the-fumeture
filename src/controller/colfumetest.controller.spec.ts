//spec를 빼면 진짜임
//const { validationResult } = require('express-validator');
const { Palette } = require('../models');
const colfumetestService = require('../service/colfumetestService');

module.exports = {
  /**
   * body:
   */
  postAnswer: async (req, res) => {
    logger.info(`POST /colfumetest - postAnswer`);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error(`POST /colfumetest - Paramaters Error - postAnswer`);
      return res.status(400).json({
        success: false,
        message: errors.array(),
      });
    }

    const { answer } = req.body;

    try {

      // 대충 일케~~,,
      let red, sky, pink, white = 0;
      if (answer[0] == 1 ) {
        red += 2;
        sky += 1;
      }





      await waterService.postWater(CherishId, waterDate, review, keyword1, keyword2, keyword3);

      // water_date 구하기
      const w = await Water.findOne({
        attributes: ['water_date'],
        where: {
          CherishId: CherishId,
          active: 'Y',
        },
      });

      // Cherish에서 growth 받아오기
      const cherishGrowth = await Cherish.findOne({
        attributes: ['UserId', 'growth', 'cycle_date'],
        where: {
          id: CherishId,
          active: 'Y',
        },
      });
      let growth = cherishGrowth.dataValues.growth;
      const UserId = cherishGrowth.dataValues.UserId;
      if (score != 0) {
        growth += score;
      }

      const date = dayjs()
        .add(parseInt(cherishGrowth.dataValues.cycle_date), 'day')
        .format('YYYY-MM-DD');
      await Cherish.update(
        {
          postpone_number: 0,
          growth: growth,
          water_date: date,
        },
        {
          where: {
            id: CherishId,
          },
        }
      );
      pushService.updatePushREV({ UserId, CherishId });
      return res.status(sc.OK).send(ut.success(rm.OK, score));
    } catch (err) {
      console.log(err);
      logger.error(`POST /water - Server Error - postWater`);
      return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(rm.INTERNAL_SERVER_ERROR));
    }
  },

  // 결과 가져오기
  getPalette: async (req, res) => {
    logger.info(`GET /colfumetest - getPalette`);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error(`GET /colfumetest - Paramaters Error - getPalette`);
      return res.status(400).json({
        success: false,
        message: errors.array(),
      });
    }

    const CherishId = req.params.id;

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

      const water = await Water.findAll({
        attributes: ['id', 'review', 'water_date', 'keyword1', 'keyword2', 'keyword3'],
        where: {
          CherishId: CherishId,
          active: 'Y',
        },
      });
      return res.status(sc.OK).send(ut.success(rm.OK, water));
    } catch (err) {
      console.log(err);
      return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(rm.INTERNAL_SERVER_ERROR));
    }
  },
};
