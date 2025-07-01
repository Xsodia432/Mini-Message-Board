const { Router } = require("express");
const notFoundRouter = Router();
notFoundRouter.get("/", (req, res) => res.send("Page Not Found"));
module.exports = notFoundRouter;
