const pool = require("./pool");
const bcrypt = require("bcryptjs");

async function insertUser(name, username, password, membershipstatus) {
  try {
    password = await bcrypt.hash(password, 11);
    await pool.query(
      "INSERT INTO users (name, username, password, membershipstatus) VALUES ($1, $2, $3, $4)",
      [name, username, password, membershipstatus]
    );
    return true;
  } catch (err) {
    return false;
  }
}

async function insertMessage(message, user_id) {
  try {
    await pool.query(
      "INSERT INTO messages (message, added, user_id) VALUES ($1, $2, $3)",
      [message, new Date(), user_id]
    );
    return true;
  } catch (err) {
    return false;
  }
}

async function getUser(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
  return rows[0];
}

async function getMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (err) {
    return false;
  }
}

module.exports = {
  insertUser,
  insertMessage,
  getMessages,
  getUser,
};
