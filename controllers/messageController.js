const { insertMessage } = require("../db/queries");

function createMessage(req, res) {
  res.render("createMessage");
}

async function postMessage(req, res) {
  await insertMessage(req.body.message, req.user.id);
  res.redirect("/");
}

module.exports = {
  createMessage,
  postMessage,
};
