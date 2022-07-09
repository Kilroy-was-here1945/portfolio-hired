const data = require("./db.json")

  module.exports = {
    getData: (req, res) => {
      res.status(200).send(data)
    }
  }