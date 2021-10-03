import React from 'react';
import {Image, Text, View} from 'react-native';
import CityNameHeading from './CityNameHeading';
import star from '../assets/media/star.png';
import time from '../assets/media/time.png';
import PreviewOfferStyles from '../assets/styles/PreviewOffer.styles';

const PreviewOfferInfoBoxTop = ({rating, days, resort, weather}) => {
  return (
    <View style={{...PreviewOfferStyles.infoBoxTop}}>
      <CityNameHeading city={resort} fontSize={32} />
      <View style={{...PreviewOfferStyles.iconsBox}}>
        <View style={{...PreviewOfferStyles.iconBox}}>
          <Image source={star} style={{...PreviewOfferStyles.icon}} />
          <Text style={{color: '#E2B477', fontWeight: '700'}}>{rating}</Text>
        </View>
        <View style={{...PreviewOfferStyles.iconBox}}>
          {Object.keys(weather).length > 0 ? (
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
              }}
              style={{...PreviewOfferStyles.icon, width: 30, height: 30}}
            />
          ) : (
            <></>
          )}

          <Text style={{...PreviewOfferStyles.iconText}}>
            {Object.keys(weather).length > 0
              ? Math.floor(weather.main.temp - 273.15)
              : ''}
            ℃
          </Text>
        </View>
        <View style={{...PreviewOfferStyles.iconBox}}>
          <Image source={time} style={{...PreviewOfferStyles.icon}} />
          <Text style={{...PreviewOfferStyles.iconText}}>{days} days</Text>
        </View>
      </View>
    </View>
  );
};

export default PreviewOfferInfoBoxTop;
