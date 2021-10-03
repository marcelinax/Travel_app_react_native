import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import CityNameHeading from './CityNameHeading';
import TravelItemStarsBox from './TravelItemStarsBox';
import TravelListItemStyles from '../assets/styles/TravelListItem.styles';
import {useHistory} from 'react-router';
import {useDispatch} from 'react-redux';
import {setCurrentResort} from '../state/resortsSlice';

const TravelListItem = ({resort, img, id, country, price, rating}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        history.push('/offer');
        dispatch(setCurrentResort({id}));
      }}>
      <View style={{...TravelListItemStyles.travelItemBox}}>
        <View style={{flex: 1, borderRadius: 20, overflow: 'hidden'}}>
          <ImageBackground
            style={{...TravelListItemStyles.img}}
            source={{
              uri: img,
            }}
            resizeMode={'cover'}
          />
        </View>
        <View
          style={{flex: 1, padding: 16, overflow: 'hidden', borderRadius: 20}}>
          <CityNameHeading city={resort} fontSize={18} />
          <TravelItemStarsBox rating={rating} />
          <Text style={{color: '#D2D3DC', fontWeight: '600', marginTop: 10}}>
            {country}
          </Text>
          <Text style={{color: '#64B3D9', fontWeight: '600', marginTop: 10}}>
            $ {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TravelListItem;
