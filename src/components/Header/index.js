/* eslint-disable prettier/prettier */
import React from 'react';
import {Header} from 'react-native-elements';
import styles from './styles';

const MainHeader = () => {
  return (
    <Header
      containerStyle={styles.headerContainer}
      leftComponent={{
        text: 'Lista',
        style: {color: '#fff', fontSize: 24},
      }}
      rightComponent={{
        icon: 'trash',
        color: '#fff',
        type: 'font-awesome',
        size: 32,
        onPress: () => {
          console.log('tap here');
        },
      }}
    />
  );
};

export default MainHeader;
