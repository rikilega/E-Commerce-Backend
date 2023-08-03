const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// GET all products
router.get('/', async (req, res) => {
  const products = await Product.findAll({ include: [Category, Tag] });
  res.json(products);
});

// GET a single product by ID
router.get('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id, { include: [Category, Tag] });
  res.json(product);
});

// POST a new product
router.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// PUT to update a product
router.put('/:id', async (req, res) => {
  const product = await Product.update(req.body, { where: { id: req.params.id } });
  res.json(product);
});

// DELETE a product
router.delete('/:id', async (req, res) => {
  const product = await Product.destroy({ where: { id: req.params.id } });
  res.json(product);
});

module.exports = router;
