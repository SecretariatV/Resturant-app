import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../theme/FontFamily';
import {styles} from './styles';
import {Colors} from '../../theme';

const AmountStatusCard = ({name, status, amount}) => {
  const activeGrad = ['#FFFFFF33', '#FFFFFF33', '#FFFFFF55', '#FFFFFF55'];
  const inactiveGrad = ['#00F69299', '#00A7F7FF'];
  const [activeField, setActiveField] = useState(inactiveGrad);

  return (
    <LinearGradient
      colors={status != 'paid' ? activeGrad : inactiveGrad}
      useAngle={true}
      angle={820}
      style={{borderRadius: 22, marginTop: 10}}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      <View style={styles.circleGradientTwo}>
        <View style={styles.approveContainer}>
          <View style={styles.approveSubContainer}>
            <Image source={require('../../assets/images/paid_user.png')} />
            <Text
              style={{
                color: '#fff',
                marginLeft: 10,
                fontFamily: fonts.URBANIST_BOLD,
                fontSize: 16,
              }}>
              {name}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            {status == 'paid' ? (
              <Image source={require('../../assets/images/approved.png')} />
            ) : (
              <Text
                style={{
                  color: Colors.WHITE,
                  fontFamily: fonts.URBANIST_EXTRABOLD,
                  marginRight: 10,
                }}>
                ${amount}
              </Text>
            )}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default AmountStatusCard;
