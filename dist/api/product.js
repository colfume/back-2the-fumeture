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
const Perfume_1 = __importDefault(require("../models/Perfume"));
const Palette_1 = __importDefault(require("../models/Palette"));
const router = express_1.default.Router();
router.get("/palette", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Palette_1.default.find();
        if (!result) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        res.status(200).json({ data: result, message: "팔레트 색상 불러오기 성공했습니다." });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
router.get("/page", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Perfume_1.default.find()
            .select("perfume_name")
            .populate({
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
                }]
        });
        if (!result) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        res.status(200).json({ data: result, message: "프로덕트 페이지 불러오기 성공했습니다." });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
router.get("/detail", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Perfume_1.default.find();
        if (!result) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        res.status(200).json({ data: result, message: "상세 페이지 불러오기 성공했습니다." });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
module.exports = router;
//# sourceMappingURL=product.js.map