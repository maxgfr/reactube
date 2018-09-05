import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './src/components/Home'
import Settings from './src/components/Settings'

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home-outline" color={tintColor} size={24} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'SETTINGS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings-outline" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
