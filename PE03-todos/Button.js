import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Button = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      style={styles.button}
      onPress={submitTodo}
      underlayColor="#efefef"
    >
      <Text style={styles.submit}>Add</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});

export default Button;