const router = require("express").Router();
let Product = require("../models/product.model");

//gets all the products in the database
router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

//gets one product in the database
router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

//gets products based on type of product
router.route("/category/:category").get((req, res) => {
  Product.find({ category: req.params.category })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/featured").get((req, res) => {
  Product.find()
    .limit(2)
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const inStock = req.body.inStock;
  const category = req.body.category;

  const newProduct = new Product({ name, imageUrl, price, inStock, category });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
