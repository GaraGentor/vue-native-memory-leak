import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';

import TodoItem from "./TodoItem";

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoItem {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});