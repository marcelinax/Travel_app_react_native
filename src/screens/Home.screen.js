import React, {useEffect} from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import CountriesFilterButtons from '../components/CountriesFilterButtons';
import TravelList from '../components/TravelList';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setResorts} from '../state/resortsSlice';
import shoppingBag from '../assets/media/shoppingBag.png';
import {useHistory} from 'react-router';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getResorts = () => {
    axios.get('http://192.168.0.227:1337/resorts').then(res => {
      dispatch(setResorts(res.data));
    });
  };

  useEffect(() => {
    getResorts();
  }, []);

  return (
    <View style={{padding: 32, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#1F2834',
            fontWeight: '800',
            fontSize: 40,
            marginBottom: 32,
            flex: 5,
          }}>
          Where do you want to travel?
        </Text>
        <TouchableWithoutFeedback onPress={() => history.push('/shopping-bag')}>
          <View
            style={{
              width: 50,
              height: 50,
              elevation: 10,
              backgroundColor: 'white',
              borderRadius: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={shoppingBag} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <CountriesFilterButtons />
      <TravelList />
    </View>
  );
};

export default HomeScreen;
