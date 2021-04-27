import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Overlay, Input} from 'react-native-elements';

import styles from './styles';
import {ModalContext} from '../../contexts/ModalContext';
import {ListaContext} from '../../contexts/ListaContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const OverlayList = ({formVisible}) => {
  const {show, toggleShow} = useContext(ModalContext);
  const [item, setItem] = useState({});
  const {changeList, list} = useContext(ListaContext);
  const [count, setCount] = useState(0);

  async function saveList() {
    try {
      item.key = list.length + 1;
      if (!item.quantity) {
        item.quantity = 1;
      }
      if (!item.value) {
        item.value = 0;
      }
      item.checked = false;
      const newList = [...list, item];
      changeList(newList);
      toggleShow(false);
    } catch (e) {}
  }

  function handleChange(e, name) {
    setItem({...item, [name]: e.nativeEvent.text});
  }

  return (
    <Overlay
      style={styles.formItem}
      isVisible={show}
      overlayStyle={styles.overlayStyle}
      onBackdropPress={() => toggleShow(false)}>
      <Input
        placeholder="Item"
        name={'description'}
        onChange={e => handleChange(e, 'description')}
      />

      <View style={styles.flexRow}>
        <Input
          style={styles.inputRow}
          placeholder="Valor"
          placeholderTextColor="#2aaf6d"
          keyboardType="decimal-pad"
          name="value"
          onChange={e => handleChange(e, 'value')}
        />
        <View style={styles.viewButtons}>
          <TouchableOpacity onPress={() => setCount(count+1)} style={styles.countButton}>
            <Icon name="plus" size={20} color="#fff"/>
            </TouchableOpacity>
          <Text style={styles.quantity}>{count}</Text>
          <TouchableOpacity onPress={() => {count > 0 ? setCount(count-1) : null }} style={styles.countButton}>
            <Icon name="minus" size={20} color="#fff"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={saveList}>
            <Text style={styles.submit}>Inserir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Overlay>
  );
};

export default OverlayList;
