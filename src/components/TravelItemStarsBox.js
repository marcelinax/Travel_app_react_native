import React from 'react';
import {Image, Text, View} from 'react-native';
import star from '../assets/media/star.png';
import regularStar from '../assets/media/regularStar.png';
import StarsBoxStyles from '../assets/styles/StarsBox.styles';

const TravelItemStarsBox = ({rating}) => {
  const renderStars = () => {
    const solidStars = Math.ceil(rating / 2);
    const stars = [];
    for (let i = 0; i < solidStars; i++) {
      stars.push(
        <Image style={{...StarsBoxStyles.star}} source={star} key={i} />,
      );
    }
    for (let i = solidStars; i < 5; i++) {
      stars.push(
        <Image style={{...StarsBoxStyles.star}} source={regularStar} key={i} />,
      );
    }
    return stars;
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>{renderStars()}</View>
      <Text
        style={{
          marginLeft: 5,
          color: '#E2B477',
          fontWeight: '500',
          fontSize: 12,
        }}>
        {rating}
      </Text>
    </View>
  );
};

export default TravelItemStarsBox;
