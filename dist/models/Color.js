"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ColorSchema = new mongoose_1.default.Schema({
    color_name: {
        type: String,
        require: true,
    },
    color_img: {
        type: String,
        require: true,
    },
});
exports.default = mongoose_1.default.model("Color", ColorSchema);
//# sourceMappingURL=Color.js.map