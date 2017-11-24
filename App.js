/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Routes from './component/routes.js'
import './constant/global.js'


import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './component/login.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      
      <Routes>
      </Routes>
    );
  }
}


