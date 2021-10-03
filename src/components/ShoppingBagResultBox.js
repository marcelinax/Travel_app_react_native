import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import ShoppingBagStyles from '../assets/styles/ShoppingBag.styles';

const ShoppingBagResultBox = ({sum}) => {
  return (
    <View style={{...ShoppingBagStyles.resultBox}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>
            Total sum:
          </Text>
          <Text
            style={{
              color: '#64B3D9',
              fontWeight: '700',
              fontSize: 18,
              marginLeft: 5,
            }}>
            $ {sum}
          </Text>
        </View>
      </View>
      <TouchableWithoutFeedback>
        <View style={{...ShoppingBagStyles.resultBoxButton}}>
          <Text style={{fontWeight: '800', color: '#64B3D9', fontSize: 16}}>
            Buy
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ShoppingBagResultBox;
