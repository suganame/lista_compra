import React, { useContext, useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Overlay, Input } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text'

import styles from './styles';
import { ModalContext } from '../../contexts/ModalContext';
import { ListaContext } from '../../contexts/ListaContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const OverlayList = ({ formVisible }) => {
  const { show, toggleShow } = useContext(ModalContext);
  const [item, setItem] = useState({});
  const { changeList, list } = useContext(ListaContext);
  const [quantity, setQuantity] = useState(1);

  async function saveList() {
    try {
      item.key = new Date().getTime();
      item.quantity = quantity;
      if (!item.value) {
        item.value = 0;
      }
      item.checked = false;
      const newList = [...list, item];
      changeList(newList);
      toggleShow(false);
    } catch (e) { }
  }

  function handleChange(e, name) {
    setItem({ ...item, [name]: e.nativeEvent.text });
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
        <TextInputMask
          name="value"
          type={'money'}
          placeholder="Valor"
          keyboardType="decimal-pad"
          onChangeText={text => setItem({ ...item, "value": text })}
          options={{
            precision: 2,
            separator: '',
            delimiter: '',
            unit: '',
            suffixUnit: ''
          }}
        />
        <View style={styles.viewButtons}>
          <TouchableOpacity
            onPress={() => { quantity > 0 ? setQuantity(quantity - 1) : null }}
            style={styles.countButton}
            activeOpacity={0.7}
          >
            <Icon name="minus" size={20} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.quantity}>{quantity}</Text>

          <TouchableOpacity
            onPress={() => setQuantity(quantity + 1)}
            style={styles.countButton}
            activeOpacity={0.7}
          >
            <Icon name="plus" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={saveList}
            activeOpacity={0.7}>
            <Text style={styles.submit}>Inserir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Overlay>
  );
};

export default OverlayList;
