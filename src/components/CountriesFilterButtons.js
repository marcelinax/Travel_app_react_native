import React from 'react';
import {ScrollView, View} from 'react-native';
import CountryFilterButton from './CountryFilterButton';
import {useSelector} from 'react-redux';

const CountriesFilterButtons = () => {
  const resorts = useSelector(state => state.resorts.resorts);

  const getCountries = () => {
    if (resorts.length > 0) {
      const countries = [...new Set(resorts.map(resort => resort.country))];
      return countries.map(country => (
        <CountryFilterButton country={country} key={country} />
      ));
    } else {
      return <></>;
    }
  };

  return (
    <View>
      <ScrollView horizontal style={{paddingBottom: 20}}>
        {getCountries()}
      </ScrollView>
    </View>
  );
};

export default CountriesFilterButtons;
