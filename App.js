/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './src/pages/ListScreen';
import CreateList from './src/pages/CreateList';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ListScreen} />
        <Tab.Screen name="List" component={CreateList} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
