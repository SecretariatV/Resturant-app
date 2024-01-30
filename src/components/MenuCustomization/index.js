import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthToDp} from '../../utils/Dimensions';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ToggleButton from '../ToggleButton';
import ButtonsCommon from '../Buttons/ButtonCommon.js';
import {useNavigation} from '@react-navigation/native';

const MenuCustomization = ({label, show}) => {
  const navigation = useNavigation();

  const diet = [
    {
      name: 'vegan',
    },
    {
      name: 'Vegetarian',
    },
    {
      name: 'Pescatarian',
    },
    {
      name: 'vegan',
    },
    {
      name: 'Vegetarian',
    },
    {
      name: 'Pescatarian',
    },
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: widthToDp(5),
        }}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPreferences')}>
          <Image source={require('../../assets/images/edit.png')} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: widthToDp(3),
        }}>
        {/* <LinearGradient
          colors={['#02ABEE6E', '#02ABEE', '#00F594']}
          useAngle={true}
          angle={300}
          style={{
            borderRadius: 15,
            flexWrap: 'nowrap',
            //   width: widthToDp(30),
            alignSelf: 'flex-start',
          }}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.circleGradient}>
            <Text style={styles.shareABillTxt}>Vegan</Text>
          </View>
        </LinearGradient> */}
        {diet.map((item, index) => (
          <ToggleButton name={item.name} key={index} show={show} />
        ))}
      </View>
    </View>
  );
};

export default MenuCustomization;
