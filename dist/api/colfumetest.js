"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Palette_1 = __importDefault(require("../models/Palette"));
const router = express_1.default.Router();
/**
 *  @route Post api/colfumetest
 *  @desc Register Palette
 *  @access Public
 */
router.post("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 1. 질문에 대한 응답을 받습니다. (질문 총 7개)
    const { answer1, answer2, answer3, answer4, answer5, answer6, answer7 } = req.body;
    try {
        // 2. 만약 질문을 받지 않은 것이 있다면, 오류!
        if (!answer1 || !answer2 || !answer3 || !answer4 || !answer5 || !answer6 || !answer7) {
            res.status(400).json({ errors: [{ message: "질문에 대한 답변이 업써요" }] });
        }
        // 3. 질문에 따른 컬러 가중치를 계산합니다.
        // 3-1. 컬러를 선언해줍니다. (컬러 총 8개)
        let rp = 0;
        let op = 0;
        let vp = 0;
        let gp = 0;
        let sp = 0;
        let pup = 0;
        let pip = 0;
        let wp = 0;
        // 3-2. 컬러(string)와 컬러값(number)이 각각 담긴 배열을 생성합니다.
        // rp: red point ...
        let colorPalette = [
            ['Red', rp], ['Orange', op], ['Vanilla', vp], ['Green', gp],
            ['Sky', sp], ['Purple', pup], ['Pink', pip], ['White', wp]
        ];
        // 3-3. 계산하는 로직을 구현합니다.
        // 질문 1번
        if (answer1 === 1) {
            vp += 3;
            op += 3;
        }
        else if (answer1 === 2) {
            rp += 3.8;
            gp += 2.4;
        }
        ;
        console.log("Q1 : ", rp, op, vp, gp, sp, pup, pip, wp);
        // 질문 2번
        if (answer2 === 1) {
            rp += 3;
            wp += 3.5;
        }
        else if (answer2 === 2) {
            op += 3;
            sp += 3.6;
            gp += 3;
            pup += 3;
        }
        ;
        console.log("Q2 : ", rp, op, vp, gp, sp, pup, pip, wp);
        // 질문 3번
        if (answer3 === 1) {
            rp += 3;
            pup += 3;
            gp += 3.8;
        }
        else if (answer3 === 2) {
            vp += 3;
            op += 3;
            pip += 3;
        }
        ;
        console.log("Q3 : ", rp, op, vp, gp, sp, pup, pip, wp);
        // 질문 4번
        if (answer4 === 1) {
            gp += 3;
            wp += 4;
            vp += 4;
        }
        else if (answer4 === 2) {
            sp += 2.5;
            pip += 3;
            op += 3;
            rp += 3;
        }
        ;
        console.log("Q4 : ", rp, op, vp, gp, sp, pup, pip, wp);
        // 질문 5번
        if (answer5 === 1) {
            pup += 3;
            rp += 2.4;
        }
        else if (answer5 === 2) {
            op += 3;
            sp += 3;
            wp += 3;
            pip += 2.4;
            vp += 3.8;
        }
        console.log("Q5 : ", rp, op, vp, gp, sp, pup, pip, wp);
        // 질문 6번
        if (answer6 === 1) {
            rp += 3;
            gp += 3.7;
            pup += 3;
            sp += 3;
        }
        else if (answer6 === 2) {
            op += 3;
            wp += 3;
            pip += 3;
        }
        ;
        console.log("Q6 : ", rp, op, vp, gp, sp, pup, pip, wp);
        // 질문 7번
        if (answer7 === 1) {
            gp += 3.8;
            wp += 2.4;
        }
        else if (answer7 === 2) {
            sp += 3;
            pup += 3.8;
        }
        console.log("Q7 : ", rp, op, vp, gp, sp, pup, pip, wp);
        // 4. 
        // 4-1. 계산된 컬러값을 colorPoint 배열로 생성합니다.
        const colorPoint = [rp, op, vp, gp, sp, pup, pip, wp];
        // 4-2. 가장 점수가 높은 컬러값(max_color_sum)을 찾습니다.
        const max_color_sum = Math.max.apply(null, colorPoint);
        console.log("max color sum : ", max_color_sum);
        // 4-3. max_color_sum을 인덱스로 가지는 max_color_index를 찾습니다.
        const max_color_index = colorPoint.indexOf(max_color_sum);
        console.log("max color index : ", max_color_index);
        // 4-4. 4-3의 인덱스 값을 colorPalette에 적용하여 컬러를 찾습니다.
        const max_color_name = colorPalette[max_color_index][0].toString();
        console.log("max color name : ", max_color_name);
        // 5. Palette 테이블에서 max_color_name과 같은 컬럼을 찾고, 반환합니다.
        // const result = await Palette.findOne({ palette_name: max_color_name }).exec();
        // 6-1. 컬러반환이 잘 됐을 경우
        res.status(200).json({ data: max_color_name, message: "컬퓸테스트 결과 불러오기 성공했습니다." });
    }
    catch (error) {
        // 6-2. 컬러반환에 실패했을 경우
        console.error(error.message);
        return res.status(500).send("서버 내부 에러입니다.");
    }
}));
router.get("/:colorName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Palette_1.default.findOne({ palette_name: req.params.colorName });
        if (!result) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        res.status(200).json({ data: result, message: "테스트 결과 팔레트값 조회 성공했습니다." });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send("서버 내부 에러입니다.");
    }
}));
module.exports = router;
//# sourceMappingURL=colfumetest.js.map