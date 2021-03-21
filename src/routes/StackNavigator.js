import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import CreateList from '../pages/CreateList';

const Tab = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        headerMode="none"
      >
        <Tab.Screen
          name="Home"
          component={ListScreen} />
        <Tab.Screen
          name="CreateList"
          component={CreateList} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;