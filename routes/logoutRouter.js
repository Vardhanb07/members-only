const { Router } = require("express");

const logoutRouter = Router();

logoutRouter.get("/", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = logoutRouter;
