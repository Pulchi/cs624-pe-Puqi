import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function CountriesScreen() {
  const [countries, setCountries] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadCountries();
    }, [])
  );

  const loadCountries = async () => {
    try {
      const storedCountries = await AsyncStorage.getItem('countries');
      if (storedCountries) {
        setCountries(JSON.parse(storedCountries));
      }
    } catch (error) {
      console.log('Error loading countries:', error);
    }
  };

  const renderCountryItem = ({ item }) => (
    <View style={styles.countryItem}>
      <Text style={styles.countryName}>{item.name}</Text>
      <Text style={styles.countryCurrency}>Currency: {item.currency}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countries List</Text>
      {countries.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No countries added yet</Text>
          <Text style={styles.emptySubText}>Add countries using the AddCountry tab</Text>
        </View>
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCountryItem}
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
  countryItem: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#f4511e',
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  countryCurrency: {
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
    marginBottom: 10,
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
  },
});