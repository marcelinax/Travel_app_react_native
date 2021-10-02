import React from 'react';
import {Image, Text, View} from 'react-native';
import star from '../assets/media/star.png';
import StarsBoxStyles from '../assets/styles/StarsBox.styles';

const TravelItemStarsBox = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <Image style={{...StarsBoxStyles.star}} source={star} />
        <Image style={{...StarsBoxStyles.star}} source={star} />
        <Image style={{...StarsBoxStyles.star}} source={star} />
        <Image style={{...StarsBoxStyles.star}} source={star} />
        <Image style={{...StarsBoxStyles.star}} source={star} />
      </View>
      <Text
        style={{
          marginLeft: 5,
          color: '#E2B477',
          fontWeight: '500',
          fontSize: 12,
        }}>
        4.0
      </Text>
    </View>
  );
};

export default TravelItemStarsBox;
