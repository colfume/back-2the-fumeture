import express from "express";
const app = express();
import connectDB from "./Loader/db";
import cors from "cors"

// Connect Database
app.use(cors());
connectDB();
app.use(express.urlencoded());
app.use(express.json());

// Define Routes
app.use("/api/search", require("./api/search"));
app.use("/api/home", require("./api/home"));

//Search API
// app.use("/search", require("./api/search"));

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
