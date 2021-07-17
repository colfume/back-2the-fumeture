"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SectionSchema = new mongoose_1.default.Schema({
    section_name: {
        type: String,
        require: true,
    },
    section_perfumes: [
        {
            perfume1: {
                type: String,
                require: true,
                ref: "Perfume"
            },
            perfume2: {
                type: String,
                ref: "Perfume"
            },
            perfume3: {
                type: String,
                ref: "Perfume"
            },
            perfume4: {
                type: String,
                ref: "Perfume"
            },
            perfume5: {
                type: String,
                ref: "Perfume"
            },
            perfume6: {
                type: String,
                ref: "Perfume"
            },
            _id: false
        },
    ],
}, {
    versionKey: false //버전키 생성하지 않음
});
exports.default = mongoose_1.default.model("Section", SectionSchema);
//# sourceMappingURL=Section.js.map