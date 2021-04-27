import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  viewButtons: {
    width: '100%',
    height: 70,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countButton: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#2aaf62',

    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',

    borderColor: '#2aaf62',
    borderRadius: 4,
    borderWidth: 1,
    width: 40,
    height: 40,
  },
  submit: {
    width: 120,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#2aaf62',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    color: '#fff',
    marginLeft: 8,
  }
});

export default styles;
