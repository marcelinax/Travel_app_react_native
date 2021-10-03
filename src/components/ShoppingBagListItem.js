import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CityNameHeading from './CityNameHeading';
import ShoppingBagStyles from '../assets/styles/ShoppingBag.styles';

const ShoppingBagListItem = ({
  imgUrl,
  resort,
  price,
  amount,
  decrementAmount,
  incrementAmount,
}) => {
  return (
    <View style={{...ShoppingBagStyles.shoppingBagItem}}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={{uri: imgUrl}}
          resizeMode={'cover'}
          style={{...ShoppingBagStyles.img}}
        />
      </View>
      <View style={{flex: 1, padding: 16, justifyContent: 'space-between'}}>
        <CityNameHeading city={resort} fontSize={16} />

        <Text style={{...ShoppingBagStyles.price}}>$ {price * amount}</Text>

        <View style={{...ShoppingBagStyles.buttonsBox}}>
          <TouchableWithoutFeedback onPress={decrementAmount}>
            <View style={{...ShoppingBagStyles.button, marginRight: 10}}>
              <Text style={{...ShoppingBagStyles.buttonText}}>-</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text>{amount}</Text>
          <TouchableWithoutFeedback onPress={incrementAmount}>
            <View style={{...ShoppingBagStyles.button, marginLeft: 10}}>
              <Text style={{...ShoppingBagStyles.buttonText}}>+</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default ShoppingBagListItem;
