const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'tech',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

