import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import CountriesFilterButtonsStyles from '../assets/styles/CountriesFilterButtons.styles';

const CountryFilterButton = ({country, setCurrentCountry, isActive}) => {
  return (
    <TouchableWithoutFeedback onPress={setCurrentCountry}>
      {isActive ? (
        <Text style={{...CountriesFilterButtonsStyles.activeBtn}}>
          {country}
        </Text>
      ) : (
        <Text style={{...CountriesFilterButtonsStyles.button}}>{country}</Text>
      )}
    </TouchableWithoutFeedback>
  );
};

export default CountryFilterButton;
