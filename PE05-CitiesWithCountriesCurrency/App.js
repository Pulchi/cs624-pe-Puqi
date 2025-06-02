import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import CitiesScreen from './screens/CitiesScreen';
import AddCityScreen from './screens/AddCityScreen';
import AddCountryScreen from './screens/AddCountryScreen';
import CountriesScreen from './screens/CountriesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Cities') {
              iconName = focused ? 'location' : 'location-outline';
            } else if (route.name === 'AddCity') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'AddCountry') {
              iconName = focused ? 'flag' : 'flag-outline';
            } else if (route.name === 'Countries') {
              iconName = focused ? 'globe' : 'globe-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Cities" component={CitiesScreen} />
        <Tab.Screen name="AddCity" component={AddCityScreen} />
        <Tab.Screen name="AddCountry" component={AddCountryScreen} />
        <Tab.Screen name="Countries" component={CountriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}