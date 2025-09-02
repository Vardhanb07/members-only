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

module.exports = {
  insertUser,
};
