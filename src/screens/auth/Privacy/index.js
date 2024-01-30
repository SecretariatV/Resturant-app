import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../../components/BackgroundLayout';
import HeaderCommon from '../../../components/HeaderCommon';
import LinearGradient from 'react-native-linear-gradient';
import BottomLine from '../../../components/BottomLine';
import ButtonsCommonAlt from '../../../components/Buttons/ButtonCommonAlt';
import ButtonsCommon from '../../../components/Buttons/ButtonCommon.js';
import {widthToDp} from '../../../utils/Dimensions.js';

const Privacy = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderCommon showLogo={false} show={true} />
      <Text style={styles.privacyHeading}>Privacy policy</Text>
      <View style={{marginVertical: 30}}>
        <BottomLine />
      </View>

      <Text style={styles.privacyDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>

      <Text style={styles.privacyDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>

      <Text style={styles.privacyDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>

      <Text style={styles.privacyDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>
      <Text style={styles.privacyDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>

      <View style={styles.buttonsContainer}>
        <ButtonsCommonAlt
          btnStyle={{width: widthToDp(42)}}
          btnText={'Accept'}
        />
        <ButtonsCommon btnStyle={{width: widthToDp(42)}} btnText={'Decline'} />
      </View>
      {/* <LinearGradient
        colors={[
          'rgba(200,200,200, 0)',
          'rgba(200,200,200, 0.30)',
          'rgba(200,200,200, 0.7)',
          'rgba(200,200,200, 0.7)',
          'rgba(200,200,200, 0.30)',
          'rgba(200,200,200, 0.0)',
        ]}
        style={{width: '100%', marginTop: 20}}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View
          style={{
            borderBottomColor: 'transparent',
            borderBottomWidth: 1,
            width: '100%',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, height: 1}}></View>
        </View>
      </LinearGradient> */}
    </View>
  );
};

export default Privacy;
