const { Router } = require("express");
const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("index", { error: null });
});

module.exports = messageRouter;
