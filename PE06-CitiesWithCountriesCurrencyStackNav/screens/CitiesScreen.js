import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function CitiesScreen() {
  const [cities, setCities] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadCities();
    }, [])
  );

  const loadCities = async () => {
    try {
      const storedCities = await AsyncStorage.getItem('cities');
      if (storedCities) {
        setCities(JSON.parse(storedCities));
      }
    } catch (error) {
      console.log('Error loading cities:', error);
    }
  };

  const renderCityItem = ({ item }) => (
    <View style={styles.cityItem}>
      <Text style={styles.cityName}>{item.name}</Text>
      <Text style={styles.cityCountry}>{item.country}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cities List</Text>
      {cities.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No cities added yet</Text>
        </View>
      ) : (
        <FlatList
          data={cities}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCityItem}
          style={styles.list}
        />
      )}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  cityItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cityCountry: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
});