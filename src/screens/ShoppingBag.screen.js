import React from 'react';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import ShoppingBagList from '../components/ShoppingBagList';
import ShoppingBagResultBox from '../components/ShoppingBagResultBox';
import left from '../assets/media/left.png';
import {useHistory} from 'react-router';
import ShoppingBagStyles from '../assets/styles/ShoppingBag.styles';
import {useSelector} from 'react-redux';

const ShoppingBagScreen = () => {
  const history = useHistory();
  const shoppingBag = useSelector(state => state.resorts.shoppingBag);
  const shoppingBagItemsAmount = useSelector(
    state => state.resorts.shoppingBagItemsAmount,
  );

  const getTotalSum = () => {
    const sum = shoppingBag.map(
      (item, index) => item.price * shoppingBagItemsAmount[index],
    );
    return sum.reduce((acc, cur) => acc + cur);
  };

  return (
    <View style={{padding: 32, flex: 1}}>
      <TouchableWithoutFeedback onPress={() => history.push('/')}>
        <View style={{...ShoppingBagStyles.goBackIcon}}>
          <Image source={left} />
        </View>
      </TouchableWithoutFeedback>
      <ShoppingBagList />
      <ShoppingBagResultBox sum={getTotalSum()} />
    </View>
  );
};

export default ShoppingBagScreen;
