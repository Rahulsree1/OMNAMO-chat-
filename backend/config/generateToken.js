const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "Rockstar", {
    expiresIn: "30d",
  });
};
//
module.exports = generateToken;
