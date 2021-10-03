import React from 'react';
import {Image, Text, View} from 'react-native';
import CityNameHeading from './CityNameHeading';
import star from '../assets/media/star.png';
import dollar from '../assets/media/dollar.png';
import cloud from '../assets/media/cloud.png';
import PreviewOfferStyles from '../assets/styles/PreviewOffer.styles';

const PreviewOfferInfoBoxTop = () => {
  return (
    <View style={{...PreviewOfferStyles.infoBoxTop}}>
      <CityNameHeading city={'Bali'} fontSize={32} />
      <View style={{...PreviewOfferStyles.iconsBox}}>
        <View style={{...PreviewOfferStyles.iconBox}}>
          <Image source={star} style={{...PreviewOfferStyles.icon}} />
          <Text style={{color: '#E2B477', fontWeight: '700'}}>4.5</Text>
        </View>
        <View style={{...PreviewOfferStyles.iconBox}}>
          <Image source={cloud} style={{...PreviewOfferStyles.icon}} />
          <Text style={{...PreviewOfferStyles.iconText}}>25 C</Text>
        </View>
        <View style={{...PreviewOfferStyles.iconBox}}>
          <Image source={dollar} style={{...PreviewOfferStyles.icon}} />
          <Text style={{...PreviewOfferStyles.iconText}}>4500</Text>
        </View>
      </View>
    </View>
  );
};

export default PreviewOfferInfoBoxTop;
