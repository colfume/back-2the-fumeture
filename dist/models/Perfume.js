"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PerfumeSchema = new mongoose_1.default.Schema({
    perfume_name: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        require: true,
    },
    color_id: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        require: true,
        ref: "Color"
    },
    style_id: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        require: true,
        ref: "Style"
    },
    mood_id: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        require: true,
        ref: "Mood"
    },
    description: {
        type: String,
        require: true,
    },
    top: {
        type: String,
        require: true,
    },
    middle: {
        type: String,
        require: true,
    },
    base: {
        type: String,
        require: true,
    },
    perfume_img: {
        type: String,
        require: true,
    },
    palette_id: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        require: true,
        ref: "Palette"
    },
});
exports.default = mongoose_1.default.model("Perfume", PerfumeSchema);
//# sourceMappingURL=Perfume.js.map