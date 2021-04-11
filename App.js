/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ListaProvider} from './src/contexts/ListaContext';
import StackNavigator from './src/routes/StackNavigator';

const App = () => {
  return (
    <ListaProvider>
      <StatusBar hidden={true} />
      <StackNavigator />
    </ListaProvider>
  );
};

export default App;
