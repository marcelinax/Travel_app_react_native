import React from 'react';
import {View} from 'react-native';
import PreviewOfferImageBox from '../components/PreviewOfferImageBox';
import PreviewOfferInfoBox from '../components/PreviewOfferInfoBox';
import PreviewOfferPriceBox from '../components/PreviewOfferPriceBox';
import GoBackButton from '../components/GoBackButton';
import {useSelector} from 'react-redux';

const PreviewOfferScreen = () => {
  const currentResort = useSelector(state => state.resorts.currentResort);

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <GoBackButton />
      <PreviewOfferImageBox imgUrl={currentResort.imgUrl} />
      <PreviewOfferInfoBox />
      <PreviewOfferPriceBox price={currentResort.price} />
    </View>
  );
};

export default PreviewOfferScreen;
