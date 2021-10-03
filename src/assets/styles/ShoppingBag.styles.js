import {Dimensions, StyleSheet} from 'react-native';

const ShoppingBagStyles = StyleSheet.create({
  shoppingBagItem: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    backgroundColor: '#F7F7F9',
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  price: {
    color: '#64B3D9',
    fontWeight: '500',
    marginRight: 3,
    fontSize: 15,
  },
  buttonsBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    backgroundColor: 'white',
    elevation: 2,
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 15,
  },
  resultBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'space-between',
    backgroundColor: '#1B4084',
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
  },
  resultBoxButton: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEF1FB',
    borderRadius: 15,
    width: 140,
  },
  goBackIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
});

export default ShoppingBagStyles;
