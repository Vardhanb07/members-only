const { insertMessage, deleteMessage } = require("../db/queries");

function createMessage(req, res) {
  res.render("createMessage");
}

async function postMessage(req, res) {
  await insertMessage(req.body.message, req.user.id);
  res.redirect("/");
}

async function removeMessage(req, res) {
  await deleteMessage(req.params.id);
  res.redirect("/")
}

module.exports = {
  createMessage,
  postMessage,
  removeMessage
};
