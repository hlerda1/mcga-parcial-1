const Token = require("../models/Token");

const create = (req, res) => {
    const newToken = {
      
    };
    Token.create(newToken)
      .then((data) => res.json({ msg: "Token Created: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  };

  module.exports = {
    create
  };