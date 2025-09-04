const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/create", messageController.createMessage);

messageRouter.post("/create", messageController.postMessage);

module.exports = messageRouter;
