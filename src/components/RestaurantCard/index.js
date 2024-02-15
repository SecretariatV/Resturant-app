import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import bg from '../../assets/images/restaurant_back.png';
import arrow from '../../assets/images/arrow.png';

import logoImage from '../../assets/images/resturant_log.png';
import star from '../../assets/images/star.png';

import {styles} from './styles';
import {Colors} from '../../theme';
import {fonts} from '../../theme/FontFamily';

const ResturantCard = ({name, location, cuisine}) => {
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

  return (
    // <TouchableOpacity
    //   style={{
    //     width: widthToDp(100),
    //     marginVertical: 5,
    //     flexDirection: 'row',
    //   }}>
    //   <Image source={bg} resizeMode="cover" />
    //   <Image source={logoImage} style={styles.logoImage} />
    //   <View
    //     style={{
    //       position: 'absolute',
    //       top: 10,
    //       left: -20,
    //       right: 0,
    //       bottom: 0,

    //       alignItems: 'center',
    //     }}>
    //     <Text
    //       style={{
    //         color: Colors.WHITE,
    //         fontSize: 18,
    //         fontFamily: fonts.URBANIST_BOLD,
    //       }}>
    //       {name}
    //     </Text>

    //     <Text
    //       style={{
    //         color: Colors.WHITE,
    //         fontSize: 16,
    //         fontFamily: fonts.URBANIST_THIN,
    //         textAlign: 'left',
    //         // backgroundColor: 'red',
    //         left: -15,
    //       }}>
    //       {location}
    //     </Text>
    //   </View>
    // </TouchableOpacity>
    <View style={styles.container}>
      <ImageBackground
        source={bg}
        style={styles.image}
        imageStyle={{borderRadius: 10}}>
        {/* <Text style={styles.text}>Inside</Text> */}
        <Image source={logoImage} style={{margin: 5}} />
        <View style={{margin: 5}}>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: 'red',
              width: widthToDp(60),
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 18,
                fontFamily: fonts.URBANIST_BOLD,
              }}>
              {name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 14,
                  fontFamily: fonts.URBANIST_BOLD,
                  paddingRight: 5,
                }}>
                4.5
              </Text>
              <Image source={star} style={{width: 15, height: 15}} />
            </View>
          </View>
          <Text
            style={[styles.lightText, {color: '#CBCBCA', marginVertical: 5}]}>
            {location}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: Colors.WHITE, marginVertical: 5}}>
              Cuisine Type:{' '}
            </Text>
            <Text style={styles.lightText}>{cuisine}</Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
              //   backgroundColor: 'red',
            }}>
            <Image
              source={arrow}
              width={20}
              height={20}
              style={{width: 20, height: 20}}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ResturantCard;
