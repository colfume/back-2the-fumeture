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
const Mood_1 = __importDefault(require("../models/Mood"));
const Style_1 = __importDefault(require("../models/Style"));
const router = express_1.default.Router();
router.get("/keyword", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const moods = yield Mood_1.default.find();
        if (!moods) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        const styles = yield Style_1.default.find();
        if (!styles) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        res.json({ moods: moods, styles: styles, message: "무드, 스타일 불러오기 성공" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
router.get("/filter/mood/:moodName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let moodId = yield Mood_1.default.findOne({ mood_name: req.params.moodName }, { attributes: ['_id'] });
        if (!moodId) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        moodId = moodId._id.toString();
        const filtered_perfume = yield Perfume_1.default.find().or([
            { "moods.0.mood1": moodId },
            { "moods.0.mood2": moodId },
            { "moods.0.mood3": moodId }
        ])
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
                },
            ]
        });
        if (!filtered_perfume) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        res.json({ data: filtered_perfume, message: "무드 향수 정보 불러오기 성공" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
router.get("/filter/style/:styleName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let styleId = yield Style_1.default.findOne({ style_name: req.params.styleName }, { attributes: ['_id'] });
        if (!styleId) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        styleId = styleId._id.toString();
        const filtered_perfume = yield Perfume_1.default.find().or([
            { "styles.0.style1": styleId },
            { "styles.0.style2": styleId },
            { "styles.0.style3": styleId }
        ])
            .select(["perfume_name", "perfume_img"])
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
                },
            ]
        });
        if (!filtered_perfume) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        res.json({ data: filtered_perfume, message: "스타일 향수 정보 불러오기 성공" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
// 제품이름, 브랜드이름
router.get("/:keyword", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Perfume_1.default.find().or([
            { perfume_name: { $regex: req.params.keyword } },
            { brand: { $regex: req.params.keyword } },
        ]).
            select(["perfume_name", "perfume_img"])
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
                },
            ]
        });
        if (!result) {
            return res.status(400).json("필요한 값이 없습니다.");
        }
        return res.status(200).json({ data: result });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
module.exports = router;
//# sourceMappingURL=search.js.map