import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import CityNameHeading from './CityNameHeading';
import TravelItemStarsBox from './TravelItemStarsBox';
import TravelListItemStyles from '../assets/styles/TravelListItem.styles';
import {useHistory} from 'react-router';

const TravelListItem = () => {
  const history = useHistory();
  return (
    <TouchableOpacity onPress={() => history.push('/offer')}>
      <View style={{...TravelListItemStyles.travelItemBox}}>
        <View style={{flex: 1, borderRadius: 20, overflow: 'hidden'}}>
          <ImageBackground
            style={{...TravelListItemStyles.img}}
            source={{
              uri: 'https://images.r.pl/zdjecia/lokalizacje/515/australia_515_85206_110275_1000x1000.jpg',
            }}
            resizeMode={'cover'}
          />
        </View>
        <View
          style={{flex: 1, padding: 16, overflow: 'hidden', borderRadius: 20}}>
          <CityNameHeading city={'Bali'} fontSize={18} />
          <TravelItemStarsBox />
          <Text style={{color: '#D2D3DC', fontWeight: '600'}}>
            Miejsce to ID, tytuł, opis, ocena, pogoda, ilość osób jaka może
            jechać i cena za jedną osobę oraz url do zdjecia
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TravelListItem;
