import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Vitao Viado</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
})

export default ListScreen;