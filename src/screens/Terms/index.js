import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import LinearGradient from 'react-native-linear-gradient';
import BottomLine from '../../components/BottomLine';

import {widthToDp} from '../../../utils/Dimensions.js';
import HeaderModed from '../../components/HeaderModed/index.js';
import BackButton from '../../components/NavButtons/BackButton/index.js';
import {useNavigation} from '@react-navigation/native';

const Terms = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<BackButton onPress={() => navigation.goBack()} />}
        slotCenter={<></>}
        slotRight={<></>}
      />
      <View style={{paddingHorizontal: 15}}>
        <Text style={styles.privacyHeading}>Terms & Conditions</Text>
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
      </View>
    </View>
  );
};

export default Terms;
