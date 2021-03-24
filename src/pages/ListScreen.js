import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { CheckBox } from 'react-native-elements';

import ListItem from '../components/ListItem';

const products = [
  {
    'list_id': 1,
    'orderView': 1,
    'description' : 'Arroz'
  },
  {
    'list_id': 1,
    'orderView': 2,
    'description' : 'Feijão'
  },
  {
    'list_id': 1,
    'orderView': 3,
    'description' : 'Açucar'
  },
  {
    'list_id': 1,
    'orderView': 4,
    'description' : 'Coca-Cola'
  },
  {
    'list_id': 1,
    'orderView': 5,
    'description' : 'Óleo'
  },
  {
    'list_id': 1,
    'orderView': 6,
    'description' : 'Alface'
  },
  {
    'list_id': 1,
    'orderView': 7,
    'description' : 'Cebola'
  },
  {
    'list_id': 1,
    'orderView': 8,
    'description' : 'Cenoura'
  },
  {
    'list_id': 1,
    'orderView': 9,
    'description' : 'Sabão em pó'
  },
  {
    'list_id': 1,
    'orderView': 10,
    'description' : 'Danone'
  },
  {
    'list_id': 1,
    'orderView': 11,
    'description' : 'Bife'
  }
]

const ListScreen = ({ navigation }) => {

  return (
    <View style={styles.listScreenContainer}>
      <View style={styles.listTitles}>
        <View></View>
        <Text style={styles.title}>Item</Text>
        <Text style={styles.title}>Valor</Text>
        <Text style={styles.title}>Qtd.</Text>
      </View>
      <ScrollView style={styles.listItemContainer}>
        {products.map(product => (
          <ListItem description={product.description} key={product.orderView}/>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.floatButton} activeOpacity={0.8}>
        <Icon name="plus" size={16} color="#fff"/>
      </TouchableOpacity>
      {/* <Button buttonStyle={styles.floatButton} icon={<Icon name="plus" size={28}/>}></Button> */}
    </View>
  )
}

const styles = StyleSheet.create({

  listScreenContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: 500,
    backgroundColor: '#F4F5F7',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 16
  },

  listTitles: {
    // position: 'absolute',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  title: {
    color: '#2aaf62',
    fontSize: 16
  },

  listItemContainer: {
    marginTop: 8
  },

  floatButton: {
    padding: 16,
    backgroundColor: '#2aaf62',
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 100
  }

});

export default ListScreen;