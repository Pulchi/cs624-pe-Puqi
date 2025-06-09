# PE06 - Cities with Countries and Currency using Tab and Stack-based Navigations

## Input

The application receives user input through multiple interaction points. Users can input city names and countries in the AddCity tab, and country names with currencies in the AddCountry tab. In the enhanced Countries navigation, users can tap on any country item to navigate to detailed views. The Country detail screen accepts additional input through a toggle switch to mark whether the currency is currently in use or not in that country. Users can also interact with action buttons to edit or delete country information, providing comprehensive input mechanisms for data management.

## Process

The application processes navigation using a combination of Tab and Stack navigators from React Navigation. The bottom tab navigator manages four main sections, with the Countries tab now containing a nested Stack navigator. When users tap a country in the Countries list, the app navigates to a CountryDetail screen within the stack, passing country data as route parameters. The app processes currency status updates by modifying AsyncStorage data and reflects changes immediately in the interface. State management handles navigation parameters, screen focus effects, and data synchronization between the list and detail screens efficiently.

## Output

The application outputs a sophisticated navigation experience with seamless transitions between tab and stack-based screens. The Countries tab displays an enhanced list with visual cues for navigation, while the Country detail screen presents comprehensive information including currency codes, usage status, and interactive controls. The interface outputs visual feedback for currency status through color-coded indicators and toggle switches. Navigation headers dynamically display country names, and the app provides confirmation dialogs for destructive actions. The enhanced styling includes elevation shadows, color schemes, and professional layouts that create an engaging user experience across all navigation levels.