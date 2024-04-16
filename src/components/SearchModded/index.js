import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SearchIcon from '../../assets/images/searchIcon.svg';
import FilterIcon from '../../assets/images/searchFilterIcon.png';

import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions';

const SearchModded = ({isVisible, setIsVisible}) => {
  return (
    <View
      class="searchbar-outer-border-wrapper"
      style={styles.searchBarBorderWrapper}>
      <LinearGradient
        colors={['#5A9CA9aa', '#345B61aa']}
        style={styles.searchBarGradStyle}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View style={styles.searchBarInnerContainer}>
          <SearchIcon width={widthToDp(5)} height={heightToDp(5)} />
          <TextInput
            class="searchbar-text-input"
            style={styles.searchBarTextInput}
            placeholder="Search"
            placeholderTextColor={'#A3AFAF'}
          />
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <Image
              source={FilterIcon}
              // resizeMode="cover"
              style={{width: widthToDp(8), height: heightToDp(8)}}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <FilterIcon width={30} height={30} style={{opacity: 2}} />
          </TouchableOpacity> */}
        </View>
      </LinearGradient>
    </View>
  );
};

export default SearchModded;
