import {StyleSheet} from 'react-native';

const PreviewOfferStyles = StyleSheet.create({
  infoBoxTop: {
    backgroundColor: '#F7F7F9',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 20,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  iconsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 6,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  iconText: {
    color: '#D0D2DA',
    fontWeight: '700',
  },
  infoBoxBottom: {
    padding: 32,
    flex: 1,
  },
  description: {
    color: '#D0D2DA',
    fontWeight: '500',
    lineHeight: 24,
  },
  priceBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#1B4084',
    width: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    marginTop: 3,
    letterSpacing: 1,
  },
  button: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEF1FB',
    borderRadius: 15,
    width: 140,
  },
  goBackBtn: {
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 2,
  },
});

export default PreviewOfferStyles;
