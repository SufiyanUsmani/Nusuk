/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './navigation/StackNavigator';

const App = () => {
  return (
    <View>
      <StackNavigator/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})

AppRegistry.registerComponent("Nusuk", () => StackNavigator);
