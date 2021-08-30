import express from "express";
const app = express();
import connectDB from "./Loader/db";
import cors from "cors";
//const { swaggerUi, specs } = require('./modules/swagger');


// Connect Database
app.use(cors());

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:4300', 'http://colfume.co.kr'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

connectDB();
app.use(express.urlencoded());
app.use(express.json());

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
