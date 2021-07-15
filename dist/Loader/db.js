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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const Color_1 = __importDefault(require("../models/Color"));
const Mood_1 = __importDefault(require("../models/Mood"));
const Palette_1 = __importDefault(require("../models/Palette"));
const Perfume_1 = __importDefault(require("../models/Perfume"));
const Section_1 = __importDefault(require("../models/Section"));
const Style_1 = __importDefault(require("../models/Style"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(config_1.default.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        Mood_1.default.createCollection().then(function (collection) {
            console.log("무드 컬렉션 생성 완료");
        });
        Palette_1.default.createCollection().then(function (collection) {
            console.log("팔레트 컬렉션 생성 완료");
        });
        Perfume_1.default.createCollection().then(function (collection) {
            console.log("퍼퓸 컬렉션 생성 완료");
        });
        Section_1.default.createCollection().then(function (collection) {
            console.log("섹션 컬렉션 생성 완료");
        });
        Style_1.default.createCollection().then(function (collection) {
            console.log("스타일 컬렉션 생성 완료");
        });
        Color_1.default.createCollection().then(function (collection) {
            console.log("컬러 컬렉션 생성 완료");
        });
        console.log("Mongoose Connected ...");
    }
    catch (error) {
        console.log(error.message);
        process.exit(1);
    }
});
exports.default = connectDB;
//# sourceMappingURL=db.js.map