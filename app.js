const path = require("node:path");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const loginRouter = require("./routes/loginRouter");
const signupRouter = require("./routes/signupRouter");
const logoutRouter = require("./routes/logoutRouter");
const messageRouter = require("./routes/messageRouter");
const { getMessages, getUser } = require("./db/queries");
const pool = require("./db/pool");
const pgSession = require("connect-pg-simple")(session);
require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
    store: new pgSession({
      pool: pool,
      tableName: "session",
    }),
  })
);
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use("/log-in", loginRouter);
app.use("/sign-up", signupRouter);
app.use("/log-out", logoutRouter);
app.use("/message", messageRouter);

app.get("/", async (req, res) => {
  const messages = await getMessages();
  let users = [];
  for (const message of messages) {
    users.push(await getUser(message["user_id"]));
  }
  res.render("index", { user: req.user, messages: messages, users: users });
});

const port = 7777;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
