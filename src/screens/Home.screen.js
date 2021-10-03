import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import CountriesFilterButtons from '../components/CountriesFilterButtons';
import TravelList from '../components/TravelList';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setResorts} from '../state/resortsSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getResorts = () => {
    axios
      .get('https://my-json-server.typicode.com/marcelinax/Travel_db/resorts')
      .then(res => dispatch(setResorts(res.data.resorts)));
  };

  useEffect(() => {
    getResorts();
  }, []);

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
