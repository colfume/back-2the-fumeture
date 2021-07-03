"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const db_1 = __importDefault(require("./Loader/db"));
const cors_1 = __importDefault(require("cors"));
// Connect Database
app.use(cors_1.default());
db_1.default();
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
// Define Routes
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "production" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
app
    .listen(5000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 5000 🛡️
    ################################################
`);
})
    .on("error", (err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map