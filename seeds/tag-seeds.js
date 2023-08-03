const { Tag } = require('../models');

const tagData = [
  { tag_name: 'Technology' },
  { tag_name: 'Fashion' },
  { tag_name: 'Literature' },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
