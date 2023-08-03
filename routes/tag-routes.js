const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET all tags
router.get('/', async (req, res) => {
  const tags = await Tag.findAll({ include: Product });
  res.json(tags);
});

// GET a single tag by ID
router.get('/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id, { include: Product });
  res.json(tag);
});

// POST a new tag
router.post('/', async (req, res) => {
  const tag = await Tag.create(req.body);
  res.json(tag);
});

// PUT to update a tag
router.put('/:id', async (req, res) => {
  const tag = await Tag.update(req.body, { where: { id: req.params.id } });
  res.json(tag);
});

// DELETE a tag
router.delete('/:id', async (req, res) => {
  const tag = await Tag.destroy({ where: { id: req.params.id } });
  res.json(tag);
});

module.exports = router;
