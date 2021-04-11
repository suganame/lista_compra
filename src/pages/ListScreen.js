/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-duplicate-props */
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Overlay, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SwipeListView} from 'react-native-swipe-list-view';

import ListItem from '../components/ListItem';

import styles from './styles';
import { ListaContext } from '../contexts/ListaContext';

const ListScreen = ({navigation}) => {
  const [formVisible, setFormVisible] = useState(false);
  const [item, setItem] = useState({});

  const {list, changeList} = useContext(ListaContext);

  async function saveList() {
    try {
      item.key = list.length + 1;
      const newList = [...list, item];
      changeList(newList);
      setFormVisible(false);
    } catch (e) {}
  }

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

  function handleChange(e, name) {
    setItem({...item, [name]: e.nativeEvent.text});
  }

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

      {/* <Text style={{fontSize: 32, fontWeight: 'bold'}}>R$ 200,00</Text> */}

      <TouchableOpacity
        style={styles.floatButton}
        activeOpacity={1}
        onPress={() => setFormVisible(true)}>
        <Icon name="plus" size={16} color="#fff" />
      </TouchableOpacity>

      <Overlay
        style={styles.formItem}
        isVisible={formVisible}
        overlayStyle={styles.overlayStyle}
        onBackdropPress={() => setFormVisible(false)}>
        <Input
          placeholder="Item"
          name={'item'}
          onChange={e => handleChange(e, 'item')}
        />

        <View style={styles.flexRow}>
          <Input
            style={styles.inputRow}
            placeholder="Valor"
            keyboardType="decimal-pad"
            name="value"
            onChange={e => handleChange(e, 'value')}
          />
          <Input
            style={styles.inputRow}
            placeholder="Quantidade"
            keyboardType="number-pad"
            name="quantity"
            onChange={e => handleChange(e, 'quant')}
          />
        </View>

        <View style={styles.flexRow}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={saveList}
            style={styles.btnAdd}
          >
            <Text style={styles.btnAddText}>Inserir</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </View>
  );
};

export default ListScreen;
