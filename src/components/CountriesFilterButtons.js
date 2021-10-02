import React from 'react';
import {ScrollView, View} from 'react-native';
import CountryFilterButton from './CountryFilterButton';

const CountriesFilterButtons = () => {
  return (
    <View>
      <ScrollView horizontal style={{paddingBottom: 20}}>
        <CountryFilterButton country={'Poland'} />
        <CountryFilterButton country={'Germany'} />
        <CountryFilterButton country={'France'} />
        <CountryFilterButton country={'France'} />
        <CountryFilterButton country={'France'} />
      </ScrollView>
    </View>
  );
};

export default CountriesFilterButtons;
