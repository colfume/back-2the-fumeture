"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const db_1 = __importDefault(require("./Loader/db"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const path_1 = __importDefault(require("path"));
const swaggerSpec = yamljs_1.default.load(path_1.default.join(__dirname, '../build/swagger.yaml'));
// Connect Database
app.use(cors_1.default());
db_1.default();
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
// Define Routes
app.use("/api/search", require("./api/search"));
app.use("/api/product", require("./api/product"));
app.use("/api/home", require("./api/home"));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
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
    .listen(4300, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 4300 🛡️
    ################################################
`);
})
    .on("error", (err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map