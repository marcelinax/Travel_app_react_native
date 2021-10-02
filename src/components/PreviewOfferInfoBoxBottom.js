import React from 'react';
import {Text, View} from 'react-native';
import PreviewOfferStyles from '../assets/styles/PreviewOffer.styles';

const PreviewOfferInfoBoxBottom = () => {
  return (
    <View style={{...PreviewOfferStyles.infoBoxBottom}}>
      <Text style={{...PreviewOfferStyles.description}}>
        Miejsce to ID, tytuł, opis, ocena, pogoda ena za jedną osobę oraz url do
        zdjeciaMiejsce to ID, tytuł, opis, ocena, pogoda ena za jedną osobę oraz
        url do zdjecia
      </Text>
    </View>
  );
};

export default PreviewOfferInfoBoxBottom;
