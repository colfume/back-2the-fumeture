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
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Perfume_1.default.find()
            .select(["perfume_name", "perfume_img"])
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
        res.status(200).json({ data: result, message: "전체 프로덕트 불러오기 성공했습니다." });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
router.get("/:paletteName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let paletteId = yield Palette_1.default.findOne({ palette_name: req.params.paletteName }, { attributes: ['_id'] });
        if (!paletteId) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        paletteId = paletteId._id.toString();
        const result = yield Perfume_1.default.find({ palette_id: paletteId })
            .select(["perfume_name", "perfume_img"])
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
        res.status(200).json({ data: result, message: "팔레트 색의 프로덕트 불러오기 성공했습니다." });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
router.get("/detail/:perfumeId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let perfume_id = yield Perfume_1.default.findOne({ _id: req.params.perfumeId });
        if (!perfume_id) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        const result = yield Perfume_1.default.find({ "_id": perfume_id })
            .populate({
            path: "colors",
            populate: [{
                    path: "color1",
                    options: { retainNullValues: true },
                },
                {
                    path: "color2",
                    options: { retainNullValues: true }
                },
                {
                    path: "color3",
                    options: { retainNullValues: true }
                }]
        })
            .populate({
            path: "styles",
            populate: [{
                    path: "style1",
                    options: { retainNullValues: true }
                },
                {
                    path: "style2",
                    options: { retainNullValues: true }
                },
                {
                    path: "style3",
                    options: { retainNullValues: true }
                }]
        })
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
        res.status(200).json({ data: result, message: "상세 페이지 불러오기 성공했습니다." });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
module.exports = router;
//# sourceMappingURL=product.js.map