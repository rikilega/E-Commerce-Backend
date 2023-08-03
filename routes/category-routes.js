const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
  const categories = await Category.findAll({ include: Product });
  res.json(categories);
});

// GET a single category by ID
router.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id, { include: Product });
  res.json(category);
});

// POST a new category
router.post('/', async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
});

// PUT to update a category
router.put('/:id', async (req, res) => {
  const category = await Category.update(req.body, { where: { id: req.params.id } });
  res.json(category);
});

// DELETE a category
router.delete('/:id', async (req, res) => {
  const category = await Category.destroy({ where: { id: req.params.id } });
  res.json(category);
});

module.exports = router;
