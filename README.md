# E-Commerce Backend

## Overview
Please view the run through video [here](https://drive.google.com/file/d/1akS_X_OD-5OEDwvZxZrpAJypbVmzXY9N/view) for example of usage. 

The E-Commerce Backend project provides a complete backend solution for managing an online store. It offers a set of RESTful APIs that allow clients to interact with categories, products, and tags within the store.

This project can be easily integrated with a front-end application to create a full-fledged E-Commerce platform.

## Features

- **Categories Management**: Create, read, update, and delete categories.
- **Products Management**: Manage products, including their associated categories and tags.
- **Tags Management**: Define and manage tags associated with products.

## Technologies Used

- **Node.js**: JavaScript runtime used to build the server.
- **Express.js**: Web framework for building the APIs.
- **Sequelize**: ORM for handling database operations.
- **MySQL**: Relational database to store all the data.

## Installation

Follow these steps to get the project running on your local machine:

1. Clone the repository:
   \`\`\`
   git clone https://github.com/username/E-Commerce-Backend.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`
   cd E-Commerce-Backend
   \`\`\`

3. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

4. Set up your environment variables in a `.env` file. See the `.env.example` file for required variables.

5. Start the server:
   \`\`\`
   npm start
   \`\`\`

## Usage

The API provides various endpoints to interact with the store's data. You can use tools like Postman to test the APIs. Below are some examples:

### Categories

- **GET All Categories**: `GET /api/categories`
- **GET Single Category**: `GET /api/categories/:id`
- **POST Create Category**: `POST /api/categories` with JSON body
- **PUT Update Category**: `PUT /api/categories/:id` with JSON body
- **DELETE Category**: `DELETE /api/categories/:id`

## Contributing

If you wish to contribute to this project, please feel free to fork the repository, create a feature branch, and open a Pull Request.

## Contact

If you have any questions or need further assistance, please contact us at rosedoland33@yahoo.com
