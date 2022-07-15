const data = require("./db.json")
let globalId = 24



  module.exports = {
    createProduct: (req,res)=>{ 
      const {address, price, imageURL} = req.body;
      let newshoe = {
          id: globalId,
          address,
          price:+price,
          imageURL
      }
      data.push(newshoe);

      res.status(200).send(data);
      globalId++;

  },
    getData: (req, res) => {
      res.status(200).send(data)
    },
    deleteData: (req, res) => {
      let index = data.findIndex(elem => elem.id === +req.params.id)
      data.splice(index, 1);
      res.status(200).send(data);
    },
    getCart: (req, res) => {
      res.status(200).send(data)
    }
    
  }