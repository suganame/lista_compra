import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ListScreen = ({ navigation }) => {
  

  return (
    <View>
      <Text>Victor Viado</Text>
      <Button 
        title="CreateList"
        onPress={() => navigation.navigate('CreateList')}
        />
    </View>
  )
}

export default ListScreen;