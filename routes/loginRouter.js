const { Router } = require("express");

const loginRouter = Router();

loginRouter.get("/", (req, res) => {
  res.render("log-in");
});

module.exports = loginRouter;
