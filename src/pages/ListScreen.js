import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import { TextInputMask } from 'react-native-masked-text'

import styles from './styles';
import ListItem from '../components/ListItem';
import OverlayList from '../components/OverlayList';

import { ModalContext } from '../contexts/ModalContext';
import { ListaContext } from '../contexts/ListaContext';

const ListScreen = ({ navigation }) => {
  const [total, setTotal] = useState(0);
  const { show, toggleShow } = useContext(ModalContext);
  const { list, changeList } = useContext(ListaContext);

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <Text style={styles.textRowBack}>Remover</Text>
      <Icon name="trash-o" size={28} color="#fff" style={styles.iconRowBack} />
    </View>
  );

  const onSwipeValueChange = swipeData => {
    const { key, value } = swipeData;
    if (value < -Dimensions.get('window').width) {
      let newList = list.filter(product => product.key !== key);
      changeList(newList);
    }
  };

  useEffect(() => {
    let total = 0;
    console.log(list)
    list.map(item => {
      let totalItem = parseFloat(item.value.replace(',', '.').replace('.', '')) * item.quantity;
      // let totalItem = 0;
      total += totalItem;
    })
    setTotal(total.toFixed(2))
  }, [list])

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

      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>R$ {total} </Text>

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
