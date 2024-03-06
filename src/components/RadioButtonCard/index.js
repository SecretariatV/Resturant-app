import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../theme/FontFamily';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FadedSeparator from '../FadedSeparator';
import {Colors} from '../../theme';

const RadioButtonCard = ({cardName}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          // marginBottom: 10,
          padding: 8,
        }}>
        {/* Credit Card Image */}
        <Image
          source={require('../../assets/images/Mastercard.png')}
          style={{width: 50, height: 30, marginRight: 10}}
        />

        {/* Card Number */}
        <Text
          style={{
            flex: 1,
            marginRight: 10,
            fontSize: 16,
            color: '#fff',
            fontFamily: fonts.URBANIST_BOLD,
          }}>
          {/* {item.cardName} */}
          {cardName}
        </Text>

        {/* Radio Button */}

        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: Colors.WHITE,
            }}>
            {checked && (
              <LinearGradient
                colors={['#00FC92', '#00A7F7', '#00FC92', '#00A7F7']}
                useAngle={true}
                angle={390}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    // backgroundColor: 'blue',
                  }}
                />
              </LinearGradient>
            )}
          </View>
        </TouchableOpacity>
        {/* Custom Radio Button */}
      </View>
      {/* <FadedSeparator /> */}
    </View>
  );
};

export default RadioButtonCard;
