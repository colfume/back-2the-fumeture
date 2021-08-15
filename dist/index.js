"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const db_1 = __importDefault(require("./Loader/db"));
const cors_1 = __importDefault(require("cors"));
//const { swaggerUi, specs } = require('./modules/swagger');
// Connect Database
app.use(cors_1.default());
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
app.use(cors_1.default(options));
db_1.default();
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
// Define Routes
app.use("/api/search", require("./api/search"));
app.use("/api/product", require("./api/product"));
app.use("/api/colfume", require("./api/colfumetest"));
app.use("/api/home", require("./api/home"));
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
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