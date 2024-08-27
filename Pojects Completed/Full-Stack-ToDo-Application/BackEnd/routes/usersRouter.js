const express = require('express');
const { zodSchemaForCreateTodo, zodSchemaForUpdateTodo } = require('../ZodValidation/ZodValidation'); 
const { todo } = require('../DataBase/db');
const router = express.Router();

// Create a todo and save it in the database
router.post('/todo', async function (req, res) {
  const payload = req.body;

  // Validate the payload using Zod schema
  const parsedPayload = zodSchemaForCreateTodo.safeParse(payload);

  // Check if validation failed
  if (!parsedPayload.success) {
    return res.status(400).json({
      message: "Invalid input - Error",
      errors: parsedPayload.error.errors // Include validation errors 
    });
  }

  try {
    // Create the todo item in the database
    const newTodo = await todo.create({ 
      title: payload.title,
      description: payload.description,
      completed: false
    });

    // Respond with success message
    res.status(201).json({ message: "Todo has been created successfully" , newTodo : newTodo });
  } catch (error) {
    // Handle database errors or other issues
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// Get all todos from the database
router.get('/allTodos', async function (req, res) {
  try {
    const todos = await todo.find({});
    if (todos.length === 0) {
      return res.status(200).json({ message: "No todos so far" });
    }
    res.status(200).json({ todos: todos });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// Mark a todo as completed
router.put('/todo-completed', async function (req, res) {
  try {
    const updatePayload = req.body;
    const parsedPayload = zodSchemaForUpdateTodo.safeParse(updatePayload);

    // Check if validation failed
    if (!parsedPayload.success) {
      return res.status(400).json({
        message: "Invalid input - Error",
        errors: parsedPayload.error.errors // Include validation errors 
      });
    }

    const updateResult = await todo.updateOne({ _id: req.body.id }, { completed: true });

    if (updateResult.nModified === 0) {
      return res.status(404).json({ message: "Todo not found or already completed" });
    }

    res.status(200).json({ message: "Marked Done / completed" });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
});


// Delete a todo by ID using POST
router.post('/delete-todo', async function (req, res) {
  try {
    const { id } = req.body;

    // Check if the ID is valid and not empty
    if (!id) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const deleteResult = await todo.deleteOne({ _id: id });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
});

module.exports = router;
