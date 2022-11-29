const express = require("express");
const router = express.Router();
const productsRoutes = require("./products");
const tokenRoutes = require("./token");
const { checkToken } = require('../middlewares/token_check');

router.use("/api/products", checkToken, productsRoutes);
router.use("/api/token", tokenRoutes);

module.exports = router;