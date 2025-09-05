const { Router } = require("express");
const loginController = require("../controllers/loginController");

const loginRouter = Router();

loginRouter.get("/", loginController.showPage);

loginRouter.post("/", loginController.loginUser);

module.exports = loginRouter;
