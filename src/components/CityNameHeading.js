import React from 'react';
import {Text} from 'react-native';

const CityNameHeading = ({city, fontSize}) => {
  return (
    <Text style={{fontSize, color: '#1F2834', fontWeight: '700'}}> {city}</Text>
  );
};

export default CityNameHeading;
