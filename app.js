const indexRouter = require("./routes/index");
const message = require("./routes/message");
const notFoundRouter = require("./routes/notFound");
const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

app.use("/", indexRouter);
app.use("/new", message);

app.use("/{*splat}", notFoundRouter);
const PORT = 5000;
app.listen(PORT, () => console.log(`Express Host Listening ${PORT}`));
