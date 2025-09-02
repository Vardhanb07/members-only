const { Router } = require("express");
const signupController = require("../controllers/signupController");

const signupRouter = Router();

signupRouter.get("/", signupController.showPage);

signupRouter.post("/", signupController.postUser);

module.exports = signupRouter;
