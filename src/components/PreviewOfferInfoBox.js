import React from 'react';
import {View} from 'react-native';
import PreviewOfferInfoBoxTop from './PreviewOfferInfoBoxTop';
import PreviewOfferInfoBoxBottom from './PreviewOfferInfoBoxBottom';

const PreviewOfferInfoBox = () => {
  return (
    <View style={{flex: 1, padding: 16}}>
      <PreviewOfferInfoBoxTop />
      <PreviewOfferInfoBoxBottom />
    </View>
  );
};

export default PreviewOfferInfoBox;
