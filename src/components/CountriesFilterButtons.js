import React from 'react';
import {ScrollView, View} from 'react-native';
import CountryFilterButton from './CountryFilterButton';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentCountry} from '../state/resortsSlice';

const CountriesFilterButtons = () => {
  const resorts = useSelector(state => state.resorts.resorts);
  const currentCountry = useSelector(state => state.resorts.currentCountry);
  const dispatch = useDispatch();

  const getCountries = () => {
    if (resorts.length > 0) {
      const countries = [...new Set(resorts.map(resort => resort.country))];
      return countries.map(country => (
        <CountryFilterButton
          country={country}
          key={country}
          setCurrentCountry={() => dispatch(setCurrentCountry(country))}
          isActive={country === currentCountry}
        />
      ));
    } else {
      return <></>;
    }
  };

  return (
    <View>
      <ScrollView horizontal style={{paddingBottom: 20}}>
        <CountryFilterButton
          country={'All'}
          key={'all'}
          setCurrentCountry={() => dispatch(setCurrentCountry('All'))}
          isActive={currentCountry === 'All'}
        />
        {getCountries()}
      </ScrollView>
    </View>
  );
};

export default CountriesFilterButtons;
