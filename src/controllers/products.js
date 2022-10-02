const Products = require("../models/Products");

const getStatus = (req, res) => {
  Products.find()
    .then(() => res.status(200).json({msg: `OK`}))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

const getAll = (req, res) => {
    // Products.find({ isDeleted: false })
    Products.find()
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  }

const getProduct = (req, res) => {
    Products.find({ id: req.params.id })
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

  const deleteProd = (req, res) => {
    Products.deleteOne({id: req.params.id})
        .then((data) => res.json({ msg: "Product deleted: ", data }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const updateProd = (req, res) => {
  Products.updateOne({id: req.params.id},{
    $set:{name: req.body.name, price: req.body.price, stock: req.body.stock, description: req.body.description}
  })
      .then((data) => res.json({ msg: "Product updated: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

module.exports = {
    getStatus,
    getAll,
    create,
    deleteProd,
    updateProd,
    getProduct,
  };