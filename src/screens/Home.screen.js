import React from 'react';
import {Text, View} from 'react-native';
import CountriesFilterButtons from '../components/CountriesFilterButtons';
import TravelList from '../components/TravelList';

const HomeScreen = () => {
  return (
    <View style={{padding: 32, flex: 1}}>
      <Text
        style={{
          color: '#1F2834',
          fontWeight: '800',
          fontSize: 40,
          marginBottom: 32,
        }}>
        Where do you want to travel?
      </Text>
      <CountriesFilterButtons />
      <TravelList />
    </View>
  );
};

export default HomeScreen;
