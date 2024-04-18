import {View, Text, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import {widthToDp} from '../../utils/Dimensions';
import BottomLine from '../../components/BottomLine';
import BackButton from '../../components/NavButtons/BackButton';
import HeaderModed from '../../components/HeaderModed';
import {commonStyles} from '../../theme';

const AccountDetail = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <View style={{marginHorizontal: 15}}>
        <HeaderModed
          slotLeft={<BackButton />}
          slotCenter={
            <Text style={commonStyles.headerText}>Account Detail</Text>
          }
          slotRight={<></>}
        />
        <View style={styles.subContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // marginTop: widthToDp(5),
              marginBottom: widthToDp(2),
            }}>
            <Image source={require('../../assets/images/language_icon.png')} />
            <View style={{paddingHorizontal: 10}}>
              <Text style={styles.subTitle}>Language Selection</Text>
              <Text style={styles.subTitleTwo}>English (united States)</Text>
            </View>
          </View>

          <BottomLine />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: widthToDp(5),
              marginBottom: widthToDp(2),
            }}>
            <Image source={require('../../assets/images/currency_icon.png')} />
            <View style={{paddingHorizontal: 10}}>
              <Text style={styles.subTitle}>Currency Selection</Text>
              <Text style={styles.subTitleTwo}>USD</Text>
            </View>
          </View>
          <BottomLine />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: widthToDp(5),
              marginBottom: widthToDp(2),
            }}>
            <Image
              source={require('../../assets/images/notification_icon.png')}
            />
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <View>
                <Text style={styles.subTitle}>Notification</Text>
                <Text style={styles.subTitleTwo}>Email, Newsletter etc</Text>
              </View>
              <View>
                <Switch
                  trackColor={{false: '#767577', true: '#00E8AB'}}
                  thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </View>
          <BottomLine />
        </View>
      </View>
    </View>
  );
};

export default AccountDetail;
