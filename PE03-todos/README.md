# PE03 - Todos App

## Input
- Users can enter todo items in the text input field
- Users can click the "Add" button to add the entered todo to the list

## Process
- When users type text in the input field, the application captures the input value through the inputChange function and updates the state
- When users click the "Add" button, the submitTodo function is called
- The submitTodo function checks if the input value is empty
- If the input value is not empty, a new todo object is created, containing a title, index, and completion status
- The new todo object is added to the todos array
- The input field is cleared, ready to receive the next input
- Each time a new todo is added, the console logs the added task and the current list of all tasks

## Output
- The user interface displays a "todos" title, an input field, and an "Add" button
- When users add todo items, the console displays the added item and the list of all current items
- This version of the application only implements the add functionality; the display of the task list and filtering functionality will be implemented in Part 2