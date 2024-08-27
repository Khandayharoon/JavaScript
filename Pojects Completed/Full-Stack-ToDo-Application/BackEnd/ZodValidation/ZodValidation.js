// Import the Zod library for schema validation
const zod = require('zod');


// Define a Zod schema for creating a new Todo item
const zodSchemaForCreateTodo = zod.object({
    // Title of the Todo item, must be a string
    title: zod.string(),
    // Description of the Todo item, must be a string
    description: zod.string()
});


// Define a Zod schema for updating an existing Todo item
const zodSchemaForUpdateTodo = zod.object({
    // Unique identifier of the Todo item to be updated, must be a string
    id: zod.string()
});


// Export the schemas for use in other parts of the application
module.exports = {
    zodSchemaForCreateTodo,
    zodSchemaForUpdateTodo
};
