# PE02-CoreComponents

## Input
- Users can enter their favorite course using the TextInput component
- The application uses predefined course lists, including 8 core courses, 2 depth of study courses, and 1 capstone course
- The application loads the icon.png from the assets directory

## Process
- useState hook manages the state of the user's favorite course input
- ScrollView component makes the content scrollable
- Image component displays the CityU icon
- TextInput component receives user input
- View and Text components organize and display the course lists
- StyleSheet component defines and applies styles to the elements

## Output
- Displays the MSCS program title and CityU icon
- Shows the user's favorite course (if entered)
- Displays categorized course lists:
  - 8 core courses
  - 2 depth of study courses
  - 1 capstone course
- All content is styled appropriately and displayed in a scrollable view