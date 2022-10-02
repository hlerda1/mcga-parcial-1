const products = require("../controllers/products");

const router = require("express").Router();

router.get("/status", products.getStatus);
router.get("/", products.getAll);
router.get("/:id", products.getProduct);
router.post("/", products.create);
router.delete("/:id", products.deleteProd);
router.patch("/:id", products.updateProd);

module.exports = router;