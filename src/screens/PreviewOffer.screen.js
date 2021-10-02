import React from 'react';
import {View} from 'react-native';
import PreviewOfferImageBox from '../components/PreviewOfferImageBox';
import PreviewOfferInfoBox from '../components/PreviewOfferInfoBox';
import PreviewOfferPriceBox from '../components/PreviewOfferPriceBox';
import GoBackButton from '../components/GoBackButton';

const PreviewOfferScreen = () => {
  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <GoBackButton />
      <PreviewOfferImageBox />
      <PreviewOfferInfoBox />
      <PreviewOfferPriceBox />
    </View>
  );
};

export default PreviewOfferScreen;
