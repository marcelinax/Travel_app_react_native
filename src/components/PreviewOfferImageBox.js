import React from 'react';
import {ImageBackground, View} from 'react-native';
import PreviewOfferStyles from '../assets/styles/PreviewOffer.styles';

const PreviewOfferImageBox = ({imgUrl}) => {
  return (
    <View
      style={{
        // flex: 1,
        height: 250,
        overflow: 'hidden',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}>
      <ImageBackground
        source={{
          uri: imgUrl,
        }}
        resizeMode={'cover'}
        style={{...PreviewOfferStyles.image}}
      />
    </View>
  );
};

export default PreviewOfferImageBox;
