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

const Search = () => {
  return (
    // <FancyInput />
    // <View
    //   style={{
    //     flexDirection: 'row',
    //     backgroundColor: 'green',
    //     alignItems: 'center',
    //     paddingHorizontal: 5,
    //     borderRadius: 10,
    //   }}>
    //   <Image
    //     source={SearchIcon}
    //     width={20}
    //     height={20}
    //     resizeMode="cover"
    //     style={{width: 20, height: 20}}
    //   />

    //   <TextInput
    //     style={{
    //       backgroundColor: 'red',
    //       padding: 10,
    //     }}
    //   />
    // </View>

    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
      {/* {!showBtn && ( */}

      <LinearGradient
        colors={['#5A9CA9', '#345B61']}
        style={styles.linearStyle}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View style={styles.circleTwoGradient}>
          {/* {showValetImg ? ( */}
          {/* <View> */}
          {/* <Valet width={22} height={22} /> */}
          <Image
            source={SearchIcon}
            width={20}
            height={20}
            resizeMode="cover"
            style={{width: 20, height: 20}}
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
            style={{width: 25, height: 25}}
          />

          {/* <LinearGradient
            colors={['red', 'green']}
            style={styles.linearStyle}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <Image
              source={SearchIcon}
              resizeMode="cover"
              style={{width: 40, height: 40}}
            />
          </LinearGradient> */}
          {/* ) : (
            <Text style={{color: '#fff'}}>Skip</Text>
          )} */}
          {/*  */}
          {/* <LinearGradient
            colors={['#5A9CA9', '#345B61']}
            style={styles.linearStyle}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <Image
              source={SearchIcon}
              resizeMode="cover"
              style={{width: 20, height: 20}}
            />
          </LinearGradient> */}
        </View>
      </LinearGradient>
      {/* {showValetImg && <ValetService style={{margin: 10}} />} */}

      {/* )} */}
    </View>
  );
};

export default Search;
