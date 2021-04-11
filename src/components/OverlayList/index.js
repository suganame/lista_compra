import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Overlay, Input} from 'react-native-elements';

import styles from './styles';
import {ModalContext} from '../../context/ModalContext';

const OverlayList = ({formVisible}) => {
  const {show, toggleShow} = useContext(ModalContext);
  const [item, setItem] = useState({});

  async function saveList() {
    // try {
    //   item.key = list.length + 1;
    //   const newList = [...list, item];
    //   setList(newList);
    //   const purchaseList = JSON.stringify(newList);
    //   await AsyncStorage.setItem('purchaseList', purchaseList);
    //   setFormVisible(true);
    // } catch (e) {}
    toggleShow(false);
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
        <TouchableOpacity onPress={saveList}>
          <Text>Inserir</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

export default OverlayList;
