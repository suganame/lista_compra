import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from './styles';

const ListItem = ({data}) => {
  const [checked, setChecked] = useState(data.checked);

  const handleCheck = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
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
          {data.description ? data.description : <Text> teste </Text>}
        </Text>
        <Text
          style={checked ? styles.textListItemDisabled : styles.textListItem}>
          {data.value}
        </Text>
        <Text
          style={checked ? styles.textListItemDisabled : styles.textListItem}>
          {data.quantity}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;
