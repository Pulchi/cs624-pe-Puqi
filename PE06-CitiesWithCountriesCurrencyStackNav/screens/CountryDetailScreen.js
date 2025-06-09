import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Alert,
  Switch
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function CountryDetailScreen({ route, navigation }) {
  const { countryName, currency, countryData } = route.params;
  const [currencyInUse, setCurrencyInUse] = useState(true);
  const [countryInfo, setCountryInfo] = useState(countryData || {});

  useEffect(() => {
    loadCountryDetails();
  }, []);

  const loadCountryDetails = async () => {
    try {
      const storedCountries = await AsyncStorage.getItem('countries');
      if (storedCountries) {
        const countries = JSON.parse(storedCountries);
        const country = countries.find(c => c.name === countryName);
        if (country) {
          setCountryInfo(country);
          setCurrencyInUse(country.currencyInUse !== false); // Default to true if not set
        }
      }
    } catch (error) {
      console.log('Error loading country details:', error);
    }
  };

  const updateCurrencyStatus = async (isInUse) => {
    try {
      const storedCountries = await AsyncStorage.getItem('countries');
      if (storedCountries) {
        const countries = JSON.parse(storedCountries);
        const countryIndex = countries.findIndex(c => c.name === countryName);
        
        if (countryIndex !== -1) {
          countries[countryIndex] = {
            ...countries[countryIndex],
            currencyInUse: isInUse
          };
          
          await AsyncStorage.setItem('countries', JSON.stringify(countries));
          setCurrencyInUse(isInUse);
          setCountryInfo(countries[countryIndex]);
          
          Alert.alert(
            'Updated',
            `Currency status updated: ${isInUse ? 'In Use' : 'Not In Use'}`
          );
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to update currency status');
      console.log('Error updating currency status:', error);
    }
  };

  const deleteCountry = async () => {
    Alert.alert(
      'Delete Country',
      `Are you sure you want to delete ${countryName}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const storedCountries = await AsyncStorage.getItem('countries');
              if (storedCountries) {
                const countries = JSON.parse(storedCountries);
                const filteredCountries = countries.filter(c => c.name !== countryName);
                await AsyncStorage.setItem('countries', JSON.stringify(filteredCountries));
                
                Alert.alert('Deleted', 'Country deleted successfully');
                navigation.goBack();
              }
            } catch (error) {
              Alert.alert('Error', 'Failed to delete country');
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.countryName}>{countryName}</Text>
        <View style={styles.flagContainer}>
          <Ionicons name="flag" size={48} color="#f4511e" />
        </View>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.sectionTitle}>Currency Information</Text>
        
        <View style={styles.currencyRow}>
          <View style={styles.currencyInfo}>
            <Text style={styles.currencyLabel}>Currency Code:</Text>
            <Text style={styles.currencyValue}>{currency}</Text>
          </View>
          <Ionicons name="card" size={32} color="#f4511e" />
        </View>

        <View style={styles.statusRow}>
          <View style={styles.statusInfo}>
            <Text style={styles.statusLabel}>Currency Status:</Text>
            <Text style={[
              styles.statusValue, 
              currencyInUse ? styles.inUse : styles.notInUse
            ]}>
              {currencyInUse ? 'In Use' : 'Not In Use'}
            </Text>
          </View>
          
          <Switch
            value={currencyInUse}
            onValueChange={updateCurrencyStatus}
            trackColor={{ false: '#767577', true: '#f4511e' }}
            thumbColor={currencyInUse ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Additional Information</Text>
        
        <View style={styles.infoRow}>
          <Ionicons name="calendar" size={20} color="#666" />
          <Text style={styles.infoText}>
            Added: {countryInfo.dateAdded || 'Recently'}
          </Text>
        </View>
        
        <View style={styles.infoRow}>
          <Ionicons name="information-circle" size={20} color="#666" />
          <Text style={styles.infoText}>
            Currency {currencyInUse ? 'is currently' : 'is not'} being used in {countryName}
          </Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={[styles.button, styles.editButton]}
          onPress={() => Alert.alert('Edit', 'Edit functionality coming soon!')}
        >
          <Ionicons name="pencil" size={20} color="#fff" />
          <Text style={styles.buttonText}>Edit Country</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.deleteButton]}
          onPress={deleteCountry}
        >
          <Ionicons name="trash" size={20} color="#fff" />
          <Text style={styles.buttonText}>Delete Country</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  countryName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  flagContainer: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 50,
  },
  detailCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  currencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  currencyInfo: {
    flex: 1,
  },
  currencyLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  currencyValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f4511e',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusInfo: {
    flex: 1,
  },
  statusLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  statusValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  inUse: {
    color: '#4CAF50',
  },
  notInUse: {
    color: '#FF9800',
  },
  infoCard: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 12,
    flex: 1,
  },
  actionButtons: {
    margin: 16,
    marginTop: 0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: '#2196F3',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});