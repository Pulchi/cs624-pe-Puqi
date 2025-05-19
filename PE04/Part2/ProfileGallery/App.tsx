import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Platform
} from 'react-native';

// Interface for Profile Card props with TypeScript
interface ProfileCardProps {
  id: number;
  name: string;
  expanded: boolean;
  onPress: () => void;
}

// Individual Profile Card component
const ProfileCard: React.FC<ProfileCardProps> = ({ name, expanded, onPress }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.card, 
        expanded ? styles.expandedCard : styles.collapsedCard
      ]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* User Avatar Section */}
      <View style={expanded ? styles.cardImageContainerLarge : styles.cardImageContainerSmall}>
        <View style={expanded ? styles.placeholderImageLarge : styles.placeholderImageSmall}>
          <Text style={expanded ? styles.userInitialLarge : styles.userInitialSmall}>
            {name.charAt(0).toUpperCase()}
          </Text>
        </View>
      </View>
      
      {/* Conditional rendering based on expanded state */}
      {expanded ? (
        <>
          {/* Full profile information when expanded */}
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userTitle}>React Native Developer</Text>
          <Text style={styles.userDescription}>
            {name} is a really great JavaScript developer. He loves using JS to 
            build React Native applications for iOS and Android.
          </Text>
        </>
      ) : (
        <>
          {/* Just name when collapsed */}
          <Text style={styles.smallUserName}>{name}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

// Main App component - same structure as Part1
export default function App() {
  // State management for tracking which card is expanded
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  // Sample user data for the gallery
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Alice Brown' },
    { id: 5, name: 'Mike Davis' },
    { id: 6, name: 'Sarah Wilson' },
  ];
  
  // Handle card press - toggle expand/collapse
  const handleCardPress = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null); // Collapse if already expanded
    } else {
      setExpandedCard(id); // Expand the selected card
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Gallery header */}
      <Text style={styles.headerText}>Profile Gallery</Text>
      
      {/* Grid of profile cards using flexbox */}
      <View style={styles.cardGrid}>
        {users.map(user => (
          <ProfileCard 
            key={user.id}
            id={user.id}
            name={user.name}
            expanded={expandedCard === user.id}
            onPress={() => handleCardPress(user.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

// Helper function for shadow styles across platforms
const getShadowStyle = () => ({
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
    },
    android: {
      elevation: 6,
    },
    web: {
      boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
    },
  }),
});

// StyleSheet for the gallery and cards
const styles = StyleSheet.create({
  // Main container with padding and background
  container: {
    padding: 15,
    paddingTop: 50,
    backgroundColor: '#f5f5f5'
  },
  
  // Gallery header styling
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333'
  },
  
  // Flexbox grid container for responsive layout
  cardGrid: {
    flexDirection: 'row', // Arrange cards horizontally
    flexWrap: 'wrap', // Wrap to next line when needed
    justifyContent: 'space-between', // Space between cards
  },
  
  // Base card styling with shadow effects
  card: {
    backgroundColor: '#4682B4',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2F4F4F',
    alignItems: 'center',
    marginBottom: 15,
    ...getShadowStyle(),
  },
  
  // Collapsed state: small cards in 2-column grid
  collapsedCard: {
    width: '48%', // Takes up about half the width
    padding: 12,
    minHeight: 150,
  },
  
  // Expanded state: full width card
  expandedCard: {
    width: '100%', // Takes up full width
    padding: 20,
    minHeight: 350,
  },
  
  // Small avatar container for collapsed cards
  cardImageContainerSmall: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    ...getShadowStyle(),
  },
  
  // Large avatar container for expanded cards
  cardImageContainerLarge: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    ...getShadowStyle(),
  },
  
  // Small avatar placeholder for collapsed state
  placeholderImageSmall: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Large avatar placeholder for expanded state
  placeholderImageLarge: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Small user initial text for collapsed cards
  userInitialSmall: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  // Large user initial text for expanded cards
  userInitialLarge: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  
  // Full name styling for expanded cards
  userName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  
  // Compact name for collapsed cards
  smallUserName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  
  // Job title styling with underline
  userTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  
  // Description text with proper spacing
  userDescription: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    lineHeight: 22, // Improves readability
  },
});