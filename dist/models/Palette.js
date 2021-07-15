"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PaletteSchema = new mongoose_1.default.Schema({
    palette_name: {
        type: String,
        require: true,
    },
    palette_img: {
        type: String,
        require: true,
    },
    palette_title: {
        type: String,
        require: true,
    },
    palette_keyword: {
        type: String,
        require: true,
    },
    palette_matchColor: {
        type: [String],
        require: true,
    },
    palette_explanation: {
        type: String,
        require: true,
    },
}, {
    versionKey: false //버전키 생성하지 않음
});
exports.default = mongoose_1.default.model("Palette", PaletteSchema);
//# sourceMappingURL=Palette.js.map