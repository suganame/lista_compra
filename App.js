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
import {ModalProvider} from './src/context/ModalContext';

const App = () => {
  return (
    <ListaProvider>
      <ModalProvider>
        <StatusBar hidden={true} />
        <StackNavigator />
      </ModalProvider>
    </ListaProvider>
  );
};

export default App;
