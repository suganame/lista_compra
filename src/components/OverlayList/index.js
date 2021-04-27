import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Overlay, Input} from 'react-native-elements';

import styles from './styles';
import {ModalContext} from '../../contexts/ModalContext';
import {ListaContext} from '../../contexts/ListaContext';

const OverlayList = ({formVisible}) => {
  const {show, toggleShow} = useContext(ModalContext);
  const [item, setItem] = useState({});
  const {changeList, list} = useContext(ListaContext);

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
          keyboardType="decimal-pad"
          name="value"
          onChange={e => handleChange(e, 'value')}
        />
        <Input
          style={styles.inputRow}
          placeholder="Quantidade"
          keyboardType="number-pad"
          name="quantity"
          onChange={e => handleChange(e, 'quantity')}
        />
      </View>

      <View style={styles.flexRow}>
        <TouchableOpacity onPress={saveList}>
          <Text>Inserir</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

export default OverlayList;
