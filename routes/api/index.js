//prefixing /users on all of my users routes
const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");
const userRoutes = require("./userRoutes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);
router.use("/user", userRoutes);

module.exports = router;
