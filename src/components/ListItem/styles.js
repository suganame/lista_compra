import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    color: 'black',
  },
  textListItemDisabled: {
    flex: 1,
    textAlign: 'center',
    color: '#b0b0b0',
  },
  // listItemBorderBottom: {
  //   height: 0.1,
  //   backgroundColor: 'black',
  //   width: '90%'
  // }
});

export default styles;
