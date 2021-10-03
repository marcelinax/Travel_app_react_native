import React from 'react';
import {View} from 'react-native';
import PreviewOfferImageBox from '../components/PreviewOfferImageBox';
import PreviewOfferInfoBox from '../components/PreviewOfferInfoBox';
import PreviewOfferPriceBox from '../components/PreviewOfferPriceBox';
import GoBackButton from '../components/GoBackButton';
import {useDispatch, useSelector} from 'react-redux';
import {addResortToShoppingBag} from '../state/resortsSlice';

const PreviewOfferScreen = () => {
  const currentResort = useSelector(state => state.resorts.currentResort);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <GoBackButton />
      <PreviewOfferImageBox imgUrl={currentResort.imgUrl} />
      <PreviewOfferInfoBox />
      <PreviewOfferPriceBox
        price={currentResort.price}
        addToShoppingBag={() =>
          dispatch(addResortToShoppingBag({id: currentResort.id}))
        }
      />
    </View>
  );
};

export default PreviewOfferScreen;
