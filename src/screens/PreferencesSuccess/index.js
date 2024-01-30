import {View, Text, Image} from 'react-native';
import React from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';

const PreferencesSuccess = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <LinearGradient
        colors={['#00A7F722', '#00FC9222']}
        style={{
          borderRadius: 89,
          flexWrap: 'nowrap',
          margin: 2,
          width: 178,
          height: 178,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <Image source={require('../../assets/images/thumb.png')} />
      </LinearGradient>
      <Text style={styles.congratulation}>Congratulation</Text>
      <Text style={styles.customizedTxt}>
        Shareabill is now customized to your preference, enjoy your dining
        experience.
      </Text>
      <ButtonsCommon
        btnTextStyle={styles.closeButton}
        containerStyle={styles.saveButton}
        btnText={'Close'}
        navRoute="EditPreferences"
      />
    </View>
  );
};

export default PreferencesSuccess;
