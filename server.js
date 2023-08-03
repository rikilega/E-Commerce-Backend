// Import required packages
const express = require('express');
const routes = require('./routes'); // Ensure you have an index.js file that exports your routes
const sequelize = require('./config/connection');

// Initialize an Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api', routes);

// Sync Sequelize models to the MySQL database, then start Express.js server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
