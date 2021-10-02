import React from 'react';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import left from '../assets/media/left.png';
import PreviewOfferStyles from '../assets/styles/PreviewOffer.styles';
import {useHistory} from 'react-router';

const GoBackButton = () => {
  const history = useHistory();

  return (
    <TouchableWithoutFeedback onPress={() => history.push('/')}>
      <View style={{...PreviewOfferStyles.goBackBtn}}>
        <Image source={left} style={{width: '100%', height: '100%'}} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GoBackButton;
