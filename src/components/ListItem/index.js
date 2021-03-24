import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';



const ListItem = ({ description }) => {

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    if(checked)
      setChecked(false)
    else
      setChecked(true)
  }

  return (
    <View style={styles.listItem}>
      <View style={styles.listItemContainer}>
        <CheckBox
          checkedColor='#2aaf62'
          checked={checked}
          onPress={handleCheck}
        />
        <Text 
          style={ checked ? styles.textListItemDisabled : styles.textListItem} 
          numberOfLines={2}
        >
          {description}
        </Text>
        <Text 
          style={ checked ? styles.textListItemDisabled : styles.textListItem} 
        >
          R$ 0,00
        </Text>
        <Text 
          style={ checked ? styles.textListItemDisabled : styles.textListItem} 
        >
          1
        </Text>
      </View>
      
      <View style={styles.listItemBorderBottom}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  listItemContainer: {
    paddingVertical: 8,
    marginVertical: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textListItem: {
    flex: 1,
    textAlign: 'center',
    color: 'black'
  },
  textListItemDisabled: {
    flex: 1,
    textAlign: 'center',
    color: '#b0b0b0',
  },
  listItemBorderBottom: {
    height: 0.1,
    backgroundColor: 'black',
    width: '90%'
  }
});

export default ListItem;