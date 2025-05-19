# Programming Exercise 4 - React Native Styling

## Input
- React Native styling concepts from textbook chapters 4 and 5
- Profile Card component requirements from HOS05
- Gallery layout requirements with expand/collapse functionality
- TypeScript for type safety and better development experience

## Process

### Part 1: Enhanced Profile Card
I implemented an enhanced Profile Card component building upon the concepts from HOS05:

1. **Text Styling**: Applied comprehensive text styling using properties like fontSize, fontWeight, color, and textAlign to create a hierarchy of information
2. **Layout Design**: Used margin and padding properties to create proper spacing between elements
3. **Shadow Effects**: Implemented platform-specific shadows using Platform.select() to provide different shadow styles for iOS, Android, and Web
4. **Color Scheme**: Used a blue (#4682B4) background with white and black text to ensure good contrast and readability
5. **Border Radius**: Applied border radius to create rounded corners for a modern look

The component displays user information including name, occupation, and a brief description in a card format.

### Part 2: Profile Cards Gallery
For the gallery implementation, I utilized several React Native concepts:

1. **Flexbox Layout**: Used flexDirection:'row' and flexWrap:'wrap' to create a responsive grid layout that adapts to different screen sizes
2. **State Management**: Implemented useState hook to track which card is currently expanded
3. **Component Reusability**: Created a reusable ProfileCard component that accepts props for customization
4. **Conditional Rendering**: Used conditional rendering to show/hide detailed information based on card state
5. **Interactive Elements**: Implemented TouchableOpacity for user interaction with visual feedback
6. **Dynamic Styling**: Applied different styles based on the expanded state using conditional style application
7. **TypeScript Integration**: Used TypeScript interfaces for props to ensure type safety

The gallery displays 6 profile cards in a 2x3 grid layout when collapsed, and individual cards expand to full width when selected.

## Output

The application produces two distinct interfaces:

### Part 1: Single Enhanced Profile Card
- A detailed profile card with user avatar, name, occupation, and description
- Professional blue color scheme with proper contrast
- Subtle shadow effects for depth
- Responsive text layout with proper hierarchy

### Part 2: Interactive Profile Gallery
- **Collapsed State**: Grid of 6 thumbnail profile cards arranged in 2 columns
- **Expanded State**: Selected card expands to full width showing complete details
- **Interactive Features**: Tap to expand/collapse functionality
- **Visual Feedback**: Smooth transitions and consistent styling

Both implementations demonstrate effective use of:
- React Native styling techniques
- Component organization and reusability
- State management
- Platform-specific features
- TypeScript for type safety
- Responsive design principles