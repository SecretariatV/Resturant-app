import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import {widthToDp} from '../../utils/Dimensions';
import BottomLine from '../../components/BottomLine';
import HeaderModed from '../../components/HeaderModed';
import {commonStyles} from '../../theme';
import User from '../../assets/images/user_icon.svg';
import UserDetail from '../../assets/images/user_detail.svg';
import MenuCustomize from '../../assets/images/menu_customization.svg';
import FadedSeparator from '../../components/FadedSeparator';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackgroundLayout />

      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={commonStyles.headerText}>Settings</Text>}
        slotRight={<></>}
      />
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={styles.sectionContainer}
            onPress={() =>
              navigation.navigate('SettingStack', {screen: 'Profile'})
            }>
            <User />

            <View style={styles.sectionTxt}>
              <Text style={styles.subTitle}>Profile settings</Text>
            </View>
          </TouchableOpacity>

          <FadedSeparator containerStyle={styles.separator} />
          <TouchableOpacity
            style={[styles.sectionTop, styles.sectionContainer]}>
            <UserDetail />
            <View style={styles.sectionTxt}>
              <Text style={styles.subTitle}>Account details</Text>
            </View>
          </TouchableOpacity>
          <FadedSeparator containerStyle={styles.separator} />
          <TouchableOpacity
            style={[styles.sectionTop, styles.sectionContainer]}>
            <MenuCustomize />
            <View style={styles.sectionTxt}>
              <View>
                <Text style={styles.subTitle}>Menu Customization</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FadedSeparator containerStyle={styles.separator} />
        </View>
      </View>
    </View>
  );
};

export default Setting;
