import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from './styles';

const ListItem = ({description}) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    if (checked) setChecked(false);
    else setChecked(true);
  };

  return (
    <View style={styles.listItem}>
      <View style={styles.listItemContainer}>
        <CheckBox
          checkedColor="#2aaf62"
          checked={checked}
          onPress={handleCheck}
        />
        <Text
          style={checked ? styles.textListItemDisabled : styles.textListItem}
          numberOfLines={2}>
          {description}
        </Text>
        <Text
          style={checked ? styles.textListItemDisabled : styles.textListItem}>
          R$ a1,00
        </Text>
        <Text
          style={checked ? styles.textListItemDisabled : styles.textListItem}>
          1
        </Text>
      </View>

      {/* <View style={styles.listItemBorderBottom}></View> */}
    </View>
  );
};

export default ListItem;
