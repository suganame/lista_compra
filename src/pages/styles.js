/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listScreenContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: 500,
    backgroundColor: '#F4F5F7',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 16,
  },

  listTitles: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  title: {
    color: '#2aaf62',
    fontSize: 16,
  },

  listItemContainer: {
    marginTop: 8,
  },

  floatButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#2aaf62',
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 100,
  },

  floatLeftButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#2aaf62',
    position: 'absolute',
    bottom: 16,
    left: 16,
    borderRadius: 100,
  },

  rowFront: {
    backgroundColor: '#F4F5F7',
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  textRowBack: {
    color: '#fff',
    marginRight: 8,
  },
  listItemBorderBottom: {
    height: 0.5,
    backgroundColor: 'black',
    width: '90%',
  },
  overlayStyle: {
    width: '90%',
    paddingVertical: 16,
    display: 'flex',
  },
  flexRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRow: {
    width: 10,
  },
  btnAdd: {
    padding:  16,
    width: '100%',
    backgroundColor: '#97C85F',
  },
  btnAddText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
