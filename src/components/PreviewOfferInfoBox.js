import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import PreviewOfferInfoBoxTop from './PreviewOfferInfoBoxTop';
import PreviewOfferInfoBoxBottom from './PreviewOfferInfoBoxBottom';
import {useSelector} from 'react-redux';
import axios from 'axios';

const PreviewOfferInfoBox = () => {
  const currentResort = useSelector(state => state.resorts.currentResort);

  const [weather, setWeather] = useState({});

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentResort.country}&appid=7d113b0de39ac1c331219e3591ef461d`,
      )
      .then(res => setWeather(res.data));
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={{flex: 1, padding: 16}}>
      <PreviewOfferInfoBoxTop
        rating={currentResort.rating}
        days={currentResort.days}
        resort={currentResort.name}
        weather={weather}
      />
      <PreviewOfferInfoBoxBottom />
    </View>
  );
};

export default PreviewOfferInfoBox;
