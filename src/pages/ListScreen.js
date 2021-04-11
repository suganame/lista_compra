import React, {useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SwipeListView} from 'react-native-swipe-list-view';

import ListItem from '../components/ListItem';
import OverlayList from '../components/OverlayList';
import {ModalContext} from '../context/ModalContext';
import styles from './styles';

const ListScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState({});
  const {show, toggleShow} = useContext(ModalContext);

  useEffect(() => {
    AsyncStorage.getItem('purchaseList').then(data => {
      if (data) {
        const list = JSON.parse(data);
        setList(list);
      }
    });
  }, []);

  // async function saveList() {
  //   try {
  //     item.key = list.length + 1;
  //     const newList = [...list, item];
  //     setList(newList);
  //     const purchaseList = JSON.stringify(newList);
  //     await AsyncStorage.setItem('purchaseList', purchaseList);
  //     setFormVisible(false);
  //   } catch (e) {}
  // }

  // async function resetList() {
  //   await AsyncStorage.clear();
  //   setList([]);
  // }

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
      setList(newList);
    }
  };

  return (
    <View style={styles.listScreenContainer}>
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
            <ListItem description={data.item.item} />
          </View>
        )}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={900}
        rightOpenValue={-Dimensions.get('window').width}
        previewOpenValue={-1}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
      />
      {/* 
      this function will clear all list data
      <TouchableOpacity
        style={styles.floatLeftButton}
        activeOpacity={1}
        onPress={resetList}>
        <Icon name="minus" size={16} color="#fff" />
      </TouchableOpacity> */}

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
    </View>
  );
};

export default ListScreen;
