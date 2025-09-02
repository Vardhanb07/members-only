const { insertUser } = require("../db/queries");

function showPage(req, res) {
  res.render("sign-up", { isSame: true, isUnique: true });
}

async function postUser(req, res) {
  if (req.body.password !== req.body.repeatPassword) {
    res.render("sign-up", { isSame: false, isUnique: true });
  } else {
    const check = await insertUser(
      req.body.name,
      req.body.username,
      req.body.password,
      true
    );
    if (!check) {
      res.render("sign-up", { isSame: true, isUnique: false });
    }
    res.redirect("/")
  }
}

module.exports = {
  showPage,
  postUser,
};
