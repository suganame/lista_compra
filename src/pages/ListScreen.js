import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SwipeListView} from 'react-native-swipe-list-view'
// import { CheckBox } from 'react-native-elements';

import ListItem from '../components/ListItem';

const products = [
  {
    'list_id': 1,
    'key': 1,
    'description' : 'Arroz'
  },
  {
    'list_id': 1,
    'key': 2,
    'description' : 'Feijão'
  },
  {
    'list_id': 1,
    'key': 3,
    'description' : 'Açucar'
  },
  {
    'list_id': 1,
    'key': 4,
    'description' : 'Coca-Cola'
  },
  {
    'list_id': 1,
    'key': 5,
    'description' : 'Óleo'
  },
  {
    'list_id': 1,
    'key': 6,
    'description' : 'Alface'
  },
  {
    'list_id': 1,
    'key': 7,
    'description' : 'Cebola'
  },
  {
    'list_id': 1,
    'key': 8,
    'description' : 'Cenoura'
  },
  {
    'list_id': 1,
    'key': 9,
    'description' : 'Sabão em pó'
  },
  {
    'list_id': 1,
    'key': 10,
    'description' : 'Danone'
  },
  {
    'list_id': 1,
    'key': 11,
    'description' : 'Bife'
  }
]

const ListScreen = ({ navigation }) => {

  const [list, setList] = useState(products);

  // console.log(list);

  const renderHiddenItem = (data, rowMap) => (    
    <View style={styles.rowBack}>
      <Text style={styles.textRowBack}>Remover</Text>
      <Icon name="trash-o" size={28} color='#fff' style={styles.iconRowBack}></Icon>
      
    </View>
  )

  const onSwipeValueChange = swipeData => {
    const {key, value} = swipeData;
    // console.log(swipeData);
    // console.log(this.animationIsRunning)
    if(value < -Dimensions.get('window').width) {
      // console.log(key)
      let newList = list.filter((product) => product.key !== key)
      // console.log(newList);  
      setList(newList)
    }
    // console.log('entrou')
    // const {key, value} = swipeData;
    // console.log(swipeData);
    
  }

  return (

    <View style={styles.listScreenContainer}>
      <View style={styles.listTitles}>
        <View></View>
        <Text style={styles.title}>Item</Text>
        <Text style={styles.title}>Valor</Text>
        <Text style={styles.title}>Qtd.</Text>
      </View>
      <SwipeListView 
        disableRightSwipe
        data={list}
        renderItem={(data, rowMap) => (          
          <View style={styles.rowFront}>
            <ListItem 
              description={data.item.description} />
          </View>
        )}  
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={900}
        rightOpenValue={-Dimensions.get('window').width}
        previewOpenValue={-1}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
      />
      
      <TouchableOpacity style={styles.floatButton} activeOpacity={1}>
        <Icon name="plus" size={16} color="#fff"/>
      </TouchableOpacity>
    </View>

    // <View style={styles.listScreenContainer}>
    //   <View style={styles.listTitles}>
    //     <View></View>
    //     <Text style={styles.title}>Item</Text>
    //     <Text style={styles.title}>Valor</Text>
    //     <Text style={styles.title}>Qtd.</Text>
    //   </View>
    //   <ScrollView style={styles.listItemContainer}>
    //     {products.map(product => (
    //       <ListItem description={product.description} key={product.key}/>
    //     ))}
    //   </ScrollView>
    
    //   {/* <Button buttonStyle={styles.floatButton} icon={<Icon name="plus" size={28}/>}></Button> */}
    // </View>
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
    paddingVertical: 16,
    paddingHorizontal: 24,
    // height: 40,
    // width: 40,
    backgroundColor: '#2aaf62',
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 100
  },

  rowFront: {
      // alignItems: 'center',
      backgroundColor: '#F4F5F7',
      borderBottomColor: '#d9d9d9',
      borderBottomWidth: 1,
      // justifyContent: 'center',
      // height: 90,
  },
  rowBack: {
      alignItems: 'center',
      backgroundColor: 'red',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 15,
  },
  textRowBack: {
    color: '#fff',
    marginRight: 8
  },
  listItemBorderBottom: {
    height: 0.5,
    backgroundColor: 'black',
    width: '90%'
  }

});

export default ListScreen;
