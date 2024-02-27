import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Menu from '../../../assets/images/hamburger.svg';

const BackButton = ({showMenu}) => {
  const navigation = useNavigation();
  const handleButton = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LinearGradient
        colors={['#5A9CA9', '#345B61']}
        useAngle
        angle={250}
        style={[!showMenu && styles.linearBack, showMenu && styles.linearMenu]}
        start={{x: 1, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <TouchableOpacity
          style={[
            !showMenu && styles.menuGradient,
            showMenu && styles.circleTwoGradient,
          ]}
          onPress={() => (!showMenu ? handleButton() : null)}>
          {showMenu ? (
            <Menu width={40} height={40} style={{marginTop: 5}} />
          ) : (
            <Image
              source={require('../../../assets/images/back_arrow.png')}
              width={38}
              height={38}
            />
          )}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default BackButton;
