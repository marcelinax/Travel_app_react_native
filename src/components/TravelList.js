import React from 'react';
import {ScrollView, View} from 'react-native';
import TravelListItem from './TravelListItem';
import {useSelector} from 'react-redux';

const TravelList = () => {
  const resorts = useSelector(state => state.resorts.resorts);
  const currentCountry = useSelector(state => state.resorts.currentCountry);

  const renderResorts = () => {
    if (currentCountry === 'All') {
      return resorts.length > 0 ? (
        resorts.map(resort => (
          <TravelListItem
            resort={resort.name}
            img={resort.imgUrl}
            key={resort.id}
            id={resort.id}
            country={resort.country}
            price={resort.price}
            rating={resort.rating}
          />
        ))
      ) : (
        <></>
      );
    } else {
      if (resorts.length > 0) {
        const resortsInCurrentCountry = resorts.filter(
          resort => resort.country === currentCountry,
        );
        return resortsInCurrentCountry.map(resort => (
          <TravelListItem
            resort={resort.name}
            img={resort.imgUrl}
            key={resort.id}
            id={resort.id}
            country={resort.country}
            price={resort.price}
            rating={resort.rating}
          />
        ));
      } else {
        return <></>;
      }
    }
  };

  return (
    <View style={{height: '100%', flex: 1, marginTop: 25}}>
      <ScrollView style={{flex: 1}}>{renderResorts()}</ScrollView>
    </View>
  );
};

export default TravelList;
