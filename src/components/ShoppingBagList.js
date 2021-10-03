import React from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ShoppingBagListItem from './ShoppingBagListItem';
import {
  decrementAmountItemInShoppingBag,
  incrementAmountItemInShoppingBag,
} from '../state/resortsSlice';

const ShoppingBagList = () => {
  const shoppingBag = useSelector(state => state.resorts.shoppingBag);
  const dispatch = useDispatch();
  const shoppingBagItemsAmount = useSelector(
    state => state.resorts.shoppingBagItemsAmount,
  );

  const renderShoppingBagItems = () => {
    return shoppingBag.length > 0 ? (
      shoppingBag.map((item, index) => (
        <ShoppingBagListItem
          key={item.id}
          price={item.price}
          resort={item.name}
          imgUrl={item.imgUrl}
          amount={shoppingBagItemsAmount[index]}
          decrementAmount={() =>
            dispatch(decrementAmountItemInShoppingBag({id: item.id}))
          }
          incrementAmount={() =>
            dispatch(incrementAmountItemInShoppingBag({id: item.id}))
          }
        />
      ))
    ) : (
      <></>
    );
  };

  return (
    <View style={{flex: 1, marginBottom: 50, marginTop: 20}}>
      <ScrollView>{renderShoppingBagItems()}</ScrollView>
    </View>
  );
};

export default ShoppingBagList;
