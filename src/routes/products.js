const products = require("../controllers/products");

const router = require("express").Router();

router.get("/status", products.getStatus);
router.get("/", products.getAll);
router.post("/", products.create);
router.delete("/:id", products.deleteProd);

module.exports = router;