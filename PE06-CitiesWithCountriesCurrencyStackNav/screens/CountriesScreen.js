import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function CountriesScreen({ navigation }) {
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

  const navigateToCountryDetail = (country) => {
    navigation.navigate('CountryDetail', { 
      countryName: country.name,
      currency: country.currency,
      countryData: country
    });
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.countryItem}
      onPress={() => navigateToCountryDetail(item)}
      activeOpacity={0.7}
    >
      <View style={styles.countryContent}>
        <Text style={styles.countryName}>{item.name}</Text>
        <Text style={styles.countryCurrency}>Currency: {item.currency}</Text>
        <Text style={styles.tapHint}>Tap for details →</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countries List</Text>
      <Text style={styles.subtitle}>Tap any country to view details</Text>
      
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
          showsVerticalScrollIndicator={false}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
  list: {
    flex: 1,
  },
  countryItem: {
    backgroundColor: '#f8f8f8',
    marginVertical: 8,
    borderRadius: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#f4511e',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  countryContent: {
    padding: 16,
  },
  countryName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  countryCurrency: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  tapHint: {
    fontSize: 14,
    color: '#f4511e',
    fontWeight: '600',
    textAlign: 'right',
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