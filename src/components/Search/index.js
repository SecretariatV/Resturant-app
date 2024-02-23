import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import FancyInput from '../FancyInput';
import SearchIcon from '../../assets/images/search.png';
import FilterIcon from '../../assets/images/filter.png';

import LinearGradient from 'react-native-linear-gradient';
import Valet from '../../assets/images/valet.svg';
import {widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const Search = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
        paddingHorizontal: 15,
      }}>
      <LinearGradient
        colors={['#5A9CA9', '#345B6199']}
        style={styles.linearStyle}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View style={styles.circleTwoGradient}>
          <Image
            source={SearchIcon}
            width={20}
            height={20}
            resizeMode="cover"
            style={{width: 20, height: 20}}
            tintColor={Colors.GREEN}
          />
          {/* </View> */}
          <TextInput
            style={{
              width: widthToDp(75),
              color: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 10,
            }}
            placeholder="Search"
            placeholderTextColor={'#A3AFAF'}
          />

          <Image
            source={FilterIcon}
            // resizeMode="cover"
            style={{width: 20, height: 25}}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Search;
