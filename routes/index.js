const { Router } = require("express");
const { format } = require("date-fns");

const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "MMMM, dd yyyy HH:mm"),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), "MMMM, dd yyyy HH:mm"),
  },
];

function checkEmpty(req, res, next) {
  if (req.method === "POST") {
    if (req.body.fullName !== "" && req.body.message !== "") {
      next();
    } else {
      console.log("Fill Up the form");
      res.render("index", { error: "Fill out the forms" });
    }
  } else return;
}

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.post("/create", checkEmpty, (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.body.message,
    user: req.body.fullName,
    added: format(new Date(), "MMMM, dd yyyy HH:mm"),
  });
  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const { id } = req.params;
  const userData = messages.find((item) => item.id === Number(id));

  res.render("index", { userData: userData });
});

module.exports = indexRouter;
