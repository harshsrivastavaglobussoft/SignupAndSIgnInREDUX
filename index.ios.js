/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AllReducer from './Reducers/index';
import App from './Component/app';
const store = createStore(AllReducer);

export default class LoginDemoRedux extends Component {
  render() {
    return (
      <Provider store={store}>
       <App/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('LoginDemoRedux', () => LoginDemoRedux);
