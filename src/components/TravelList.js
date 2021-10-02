import React from 'react';
import {ScrollView, View} from 'react-native';
import TravelListItem from './TravelListItem';

const TravelList = () => {
  return (
    <View style={{height: '100%', flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <TravelListItem />
        <TravelListItem />
        <TravelListItem />
        <TravelListItem />
        <TravelListItem />
      </ScrollView>
    </View>
  );
};

export default TravelList;
