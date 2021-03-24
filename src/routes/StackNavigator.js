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
        initialRouteName="Lista"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#2aaf62'
          },
          headerStyle: {
            backgroundColor: '#2aaf62',
            shadowColor: 'transparent',
            height: 60
          },
          headerTitleStyle: {
            color: '#fff'
          },
          headerTitleAlign: 'center'
        }}
      >
        <Tab.Screen
          name="Lista"
          component={ListScreen} />
        <Tab.Screen
          name="CreateList"
          component={CreateList} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;