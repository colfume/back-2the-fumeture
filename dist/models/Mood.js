"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MoodSchema = new mongoose_1.default.Schema({
    mood_name: {
        type: String,
        require: true,
    },
});
exports.default = mongoose_1.default.model("Mood", MoodSchema);
//# sourceMappingURL=Mood.js.map