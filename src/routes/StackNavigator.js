import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {ListaContext} from '../contexts/ListaContext';

const Tab = createStackNavigator();

const StackNavigator = () => {
  const {clearList} = useContext(ListaContext);

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
            height: 72,
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
              <View style={{paddingHorizontal: 24}}>
                <TouchableOpacity activeOpacity={0.8} onPress={clearList}>
                  <Icon name="trash" color="#fff" type="font-awesome" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
