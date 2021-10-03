import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import PreviewOfferStyles from '../assets/styles/PreviewOffer.styles';
import {useSelector} from 'react-redux';
import building from '../assets/media/building.png';
import sun from '../assets/media/sun.png';
import dish from '../assets/media/dish.png';
import bed from '../assets/media/bed.png';

const PreviewOfferInfoBoxBottom = () => {
  const currentResort = useSelector(state => state.resorts.currentResort);

  const renderHotelFacilities = () => {
    return currentResort.facilities.hotel.map((item, index) => (
      <Text style={{...PreviewOfferStyles.description}} key={index}>
        {item}
      </Text>
    ));
  };
  const renderHotelAttractions = () => {
    return currentResort.facilities.attractions.map((item, index) => (
      <Text style={{...PreviewOfferStyles.description}} key={index}>
        {item}
      </Text>
    ));
  };

  return (
    <View style={{...PreviewOfferStyles.infoBoxBottom}}>
      <ScrollView style={{flex: 1}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Image
              source={building}
              style={{...PreviewOfferStyles.infoBoxBottomIcon}}
            />
            <Text style={{...PreviewOfferStyles.infoBoxBottomHeading}}>
              Hotel
            </Text>
          </View>

          {renderHotelFacilities()}
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 20,
            }}>
            <Image
              source={sun}
              style={{...PreviewOfferStyles.infoBoxBottomIcon}}
            />
            <Text style={{...PreviewOfferStyles.infoBoxBottomHeading}}>
              Attractions
            </Text>
          </View>
          {renderHotelAttractions()}
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 20,
            }}>
            <Image
              source={dish}
              style={{...PreviewOfferStyles.infoBoxBottomIcon}}
            />
            <Text style={{...PreviewOfferStyles.infoBoxBottomHeading}}>
              Board
            </Text>
          </View>
          <Text style={{...PreviewOfferStyles.description}}>
            {currentResort.info.board}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 20,
            }}>
            <Image
              source={bed}
              style={{...PreviewOfferStyles.infoBoxBottomIcon}}
            />
            <Text style={{...PreviewOfferStyles.infoBoxBottomHeading}}>
              Rooms
            </Text>
          </View>
          <Text style={{...PreviewOfferStyles.description}}>
            {currentResort.info.rooms}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PreviewOfferInfoBoxBottom;
