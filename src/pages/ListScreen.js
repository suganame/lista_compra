import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SwipeListView} from 'react-native-swipe-list-view';

import styles from './styles';
import ListItem from '../components/ListItem';
import OverlayList from '../components/OverlayList';

import {ModalContext} from '../contexts/ModalContext';
import {ListaContext} from '../contexts/ListaContext';

const ListScreen = ({navigation}) => {
  const {show, toggleShow} = useContext(ModalContext);
  const {list, changeList} = useContext(ListaContext);

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <Text style={styles.textRowBack}>Remover</Text>
      <Icon name="trash-o" size={28} color="#fff" style={styles.iconRowBack} />
    </View>
  );

  const onSwipeValueChange = swipeData => {
    const {key, value} = swipeData;
    if (value < -Dimensions.get('window').width) {
      let newList = list.filter(product => product.key !== key);
      changeList(newList);
    }
  };

  return (
    <SafeAreaView style={styles.listScreenContainer}>
      <View style={styles.listTitles}>
        <View />
        <Text style={styles.title}>Item</Text>
        <Text style={styles.title}>Valor</Text>
        <Text style={styles.title}>Qtd.</Text>
      </View>
      <SwipeListView
        disableRightSwipe
        data={list}
        renderItem={(data, rowMap) => (
          <View style={styles.rowFront} key={data.item.key}>
            <ListItem data={data.item} />
          </View>
        )}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={900}
        rightOpenValue={-Dimensions.get('window').width}
        previewOpenValue={-1}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
      />

      {/* <Text style={{fontSize: 32, fontWeight: 'bold'}}>R$ 200,00</Text> */}

      <TouchableOpacity
        style={styles.floatButton}
        activeOpacity={1}
        onPress={() => toggleShow(true)}>
        {show == false ? (
          <Icon name="plus" size={16} color="#fff" />
        ) : (
          <OverlayList />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListScreen;
