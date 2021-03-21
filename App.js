/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import StackNavigator from './src/routes/StackNavigator';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  return (
    <StackNavigator />
  )
}

// import ListScreen from './src/pages/ListScreen';

// const Tab = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen
//           name="Home"
//           component={ListScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const Tab = createBottomTabNavigator();

// const TabScreens = () => {
//   return(
//     <Tab.Navigator
//       headerMode="none"
//       tabBarOptions={{
//         inactiveTintColor: "#c9c9cf",
//         activeTintColor: "#006573",
//         labelStyle: {
//           fontSize: 12,
//         },
//         style: {
//           height: 55,
//           paddingBottom: 5,
//           paddingTop: 5,
//         },
//       }}
//       screenOptions={{
//         cardStyle: {
//           backgroundColor: "#f0f0f5",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={ListScreen}
//         activeTintColor="#FFF"
//         options={{
//           title: "Principal",
//           tabBarIcon: ({ color }) =>
//             <Icon name="list" size={28} color={color} />
//         }}
//       />

//       <Tab.Screen
//         name="List"
//         component={CreateList}
//         options={{
//           title: "Lista",
//           tabBarIcon: ({ color }) => 
//             <Icon name="list" size={28} color={color} />
//         }}
//        />
//     </Tab.Navigator>
//   )
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <TabScreens />
//     </NavigationContainer>
//   )
// }

export default App;
