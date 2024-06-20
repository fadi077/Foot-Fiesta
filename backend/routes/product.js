const router = require("express").Router();
const productController = require("../controllers/productController");

router.post("/", productController.addProduct)
router.get("/", productController.getProducts)
router.get("/:id", productController.getProduct)
router.put("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteProduct)
router.get("/category/:category", productController.getProductByCategory);

module.exports = router;