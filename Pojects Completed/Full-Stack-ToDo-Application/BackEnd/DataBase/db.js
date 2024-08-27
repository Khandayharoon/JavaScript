// Importing mongoose from npm
const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

// Access the database URL from environment variables
const Database_URL = process.env.DATABASE_URL;

// Check if the Database_URL is correctly loaded
if (!Database_URL) {
  console.error('DATABASE_URL is not defined in the environment variables.');
  process.exit(1);
}

// Connect to the database
mongoose.connect(Database_URL)
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log('Database connection error:', err));

// DataBase Schema for a Single Todo
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model('Todos', todoSchema);

module.exports = { todo };

