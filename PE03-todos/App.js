import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.inputChange = this.inputChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  submitTodo() {
    if (this.state.inputValue.trim() === '') {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex: this.state.todos.length,
      complete: false,
    };
    const todos = [...this.state.todos, todo];
    console.log('Todo added: ', todo.title);
    console.log('Current todos: ', todos.map(t => t.title));
    this.setState({
      todos,
      inputValue: '',
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps="always">
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
          />
          <Button
            submitTodo={this.submitTodo}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});