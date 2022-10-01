const Products = require("../models/Products");

const getAll = (req, res) => {
    Products.find({ isDeleted: false })
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  }

const create = (req, res) => {
    const newProduct = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      description: req.body.description,
    };
    Products.create(newProduct)
      .then((data) => res.json({ msg: "Product added: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  };

module.exports = {
    getAll,
    create,
  };