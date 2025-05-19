import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

// Helper function to create shadow styles for different platforms
const getShadowStyle = () => ({
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    android: {
      elevation: 8, // Android uses elevation for shadows
    },
    web: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
  }),
});

// Helper function for smaller shadow effects
const getSmallShadowStyle = () => ({
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 5,
    },
    web: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  }),
});

// Main component that renders the enhanced Profile Card
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Card Container */}
      <View style={styles.cardContainer}>
        {/* User Avatar Section */}
        <View style={styles.cardImageContainer}>
          <View style={styles.placeholderImage}>
            <Text style={styles.userInitial}>U</Text>
          </View>
        </View>
        
        {/* User Information Section */}
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userTitle}>React Native Developer</Text>
        <Text style={styles.userDescription}>
          John is a really great JavaScript developer. He loves using JS to 
          build React Native applications for iOS and Android.
        </Text>
      </View>
    </View>
  );
}

// StyleSheet for the Profile Card component
const styles = StyleSheet.create({
  // Main container - centers the card on screen
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  
  // Profile card main container with blue background and shadow
  cardContainer: {
    backgroundColor: '#4682B4', // Steel blue color
    width: 300,
    height: 400,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    padding: 20,
    ...getShadowStyle(), // Apply platform-specific shadow
  },
  
  // White circular container for the user avatar with shadow
  cardImageContainer: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 60, // Makes it circular (half of width/height)
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    ...getSmallShadowStyle(), // Apply smaller shadow effect
  },
  
  // Black circular placeholder for user image
  placeholderImage: {
    width: 80,
    height: 80,
    backgroundColor: '#000',
    borderRadius: 40, // Half of width/height for circle
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  // User initial text inside the avatar
  userInitial: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  
  // User's full name styling with improved spacing
  userName: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center'
  },
  
  // User's job title with underline and improved spacing
  userTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  
  // User description text with proper spacing and line height
  userDescription: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
    lineHeight: 22 // Improves text readability
  }
});