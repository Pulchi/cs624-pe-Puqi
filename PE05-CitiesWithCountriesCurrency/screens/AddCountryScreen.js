import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddCountryScreen() {
  const [countryName, setCountryName] = useState('');
  const [currency, setCurrency] = useState('');

  const addCountry = async () => {
    if (!countryName.trim() || !currency.trim()) {
      Alert.alert('Error', 'Please enter both country name and currency');
      return;
    }

    try {
      const existingCountries = await AsyncStorage.getItem('countries');
      const countries = existingCountries ? JSON.parse(existingCountries) : [];
      
      // Check if country already exists
      const existingCountry = countries.find(
        country => country.name.toLowerCase() === countryName.trim().toLowerCase()
      );
      
      if (existingCountry) {
        Alert.alert('Error', 'This country already exists in the list');
        return;
      }

      const newCountry = {
        name: countryName.trim(),
        currency: currency.trim(),
      };

      countries.push(newCountry);
      await AsyncStorage.setItem('countries', JSON.stringify(countries));
      
      Alert.alert('Success', 'Country added successfully!');
      setCountryName('');
      setCurrency('');
    } catch (error) {
      Alert.alert('Error', 'Failed to add country');
      console.log('Error adding country:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Country</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter country name"
        value={countryName}
        onChangeText={setCountryName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter currency (e.g., USD, EUR, JPY)"
        value={currency}
        onChangeText={setCurrency}
      />
      
      <TouchableOpacity style={styles.button} onPress={addCountry}>
        <Text style={styles.buttonText}>Add Country</Text>
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