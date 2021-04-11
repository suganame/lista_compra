import React from 'react';
import {StatusBar} from 'react-native';
import {ListaProvider} from './src/contexts/ListaContext';
import {ModalProvider} from './src/contexts/ModalContext';
import StackNavigator from './src/routes/StackNavigator';

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
