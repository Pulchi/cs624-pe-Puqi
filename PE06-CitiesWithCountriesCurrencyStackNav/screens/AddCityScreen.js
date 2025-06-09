import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddCityScreen() {
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');

  const addCity = async () => {
    if (!cityName.trim() || !countryName.trim()) {
      Alert.alert('Error', 'Please enter both city name and country name');
      return;
    }

    try {
      const existingCities = await AsyncStorage.getItem('cities');
      const cities = existingCities ? JSON.parse(existingCities) : [];
      
      const newCity = {
        name: cityName.trim(),
        country: countryName.trim(),
      };

      cities.push(newCity);
      await AsyncStorage.setItem('cities', JSON.stringify(cities));
      
      Alert.alert('Success', 'City added successfully!');
      setCityName('');
      setCountryName('');
    } catch (error) {
      Alert.alert('Error', 'Failed to add city');
      console.log('Error adding city:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New City</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={cityName}
        onChangeText={setCityName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter country name"
        value={countryName}
        onChangeText={setCountryName}
      />
      
      <TouchableOpacity style={styles.button} onPress={addCity}>
        <Text style={styles.buttonText}>Add City</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f4511e',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});