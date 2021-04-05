/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';

const Tab = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Lista"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#2aaf62',
          },
          headerStyle: {
            backgroundColor: '#2aaf62',
            height: 90,
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTitleAlign: 'left',
        }}>
        <Tab.Screen
          name="Lista"
          component={ListScreen}
          options={{
            headerRight: () => (
              <View>
                <Icon
                  name="trash"
                  color="#fff"
                  type="font-awesome"
                />
                <Icon
                  name="save"
                  color="#fff"
                  type="font-awesome"
                />
              </View>
            ),
          }}
           />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
