import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import CountriesFilterButtonsStyles from '../assets/styles/CountriesFilterButtons.styles';

const CountryFilterButton = ({country}) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={{...CountriesFilterButtonsStyles.button}}>{country}</Text>
    </TouchableWithoutFeedback>
  );
};

export default CountryFilterButton;
