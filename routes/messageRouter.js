const { Router } = require("express");
const messageRouter = Router();

const { messages } = require("./indexRouter");

messageRouter.get("/", (req, res) => res.render("form"));
messageRouter.post("/", (req, res) => {
  messages.push({
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = messageRouter;
