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
const Section_1 = __importDefault(require("../models/Section"));
const Mood_1 = __importDefault(require("../models/Mood"));
const Style_1 = __importDefault(require("../models/Style"));
const router = express_1.default.Router();
router.get("/recommand", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Section_1.default.find()
            .select("section_name")
            .populate({
            path: "section_perfumes",
            populate: [{
                    path: "perfume1",
                    select: ['perfume_img', 'perfume_name'],
                    options: { retainNullValues: true },
                    populate: [{
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
                        }],
                },
                {
                    path: "perfume2",
                    select: ['perfume_img', 'perfume_name'],
                    options: { retainNullValues: true },
                    populate: [{
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
                        }],
                },
                {
                    path: "perfume3",
                    select: ['perfume_img', 'perfume_name'],
                    options: { retainNullValues: true },
                    populate: [{
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
                        }],
                },
                {
                    path: "perfume4",
                    select: ['perfume_img', 'perfume_name'],
                    options: { retainNullValues: true },
                    populate: [{
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
                        }],
                },
                {
                    path: "perfume5",
                    select: ['perfume_img', 'perfume_name'],
                    options: { retainNullValues: true },
                    populate: [{
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
                        }],
                },
                {
                    path: "perfume6",
                    select: ['perfume_img', 'perfume_name'],
                    options: { retainNullValues: true },
                    populate: [{
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
                        }],
                },
            ]
        });
        if (!result) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        const numbers = Math.floor(Math.random() * 6);
        const arr = result[numbers];
        res.status(200).json({ data: arr, message: "홈화면 추천 향수 완료" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("서버 내부 에러입니다.");
    }
}));
router.get("/keyword", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const moods = yield Mood_1.default.find().or([
            { "mood_name": "달콤한" },
            { "mood_name": "시원한" },
            { "mood_name": "편안한" },
            { "mood_name": "섹시한" },
            { "mood_name": "화사한" },
            { "mood_name": "고급스러운" },
        ]);
        if (!moods) {
            return res.status(400).send("필요한 값이 없습니다.");
        }
        ;
        const styles = yield Style_1.default.find().or([
            { "style_name": "댄디룩" },
            { "style_name": "모던룩" },
            { "style_name": "캐주얼룩" },
            { "style_name": "오피스룩" },
            { "style_name": "페미닌룩" },
            { "style_name": "데이트룩" },
        ]);
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
module.exports = router;
//# sourceMappingURL=home.js.map