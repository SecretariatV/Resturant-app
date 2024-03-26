import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import {styles} from './styles';

import HeaderModed from '../../components/HeaderModed';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import {Colors, commonStyles} from '../../theme';

import GradientText from '../../components/GradientText';
import {rewards} from '../../utils/demodata';
import Footer from '../../components/Footer';
import RestaurantButton from '../../components/Buttons/RestaurantButton';
import {fonts} from '../../theme/FontFamily';
const OrderHistory = () => {
  const [points, setPoints] = useState(500);

  const renderItem = ({item, index}) => (
    <View
      class="menu-item-smallbox"
      style={styles.menuItemSmallbox}
      key={index}>
      <View style={styles.rewardContainer}>
        <Image source={require('../../assets/images/rest_profile.png')} />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '70%',
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Text style={styles.rewardText}>{item.restaurant}</Text>
            <GradientText style={{marginTop: 5}}>
              <Text>22/1/2024</Text>
            </GradientText>
          </View>
          <View>
            <Text
              style={{
                color: Colors.GREEN,
                fontSize: 22,
                fontFamily: fonts.URBANIST_BOLD,
              }}>
              $300
            </Text>
          </View>
        </View>
      </View>

      <RestaurantButton
        btnText={'Leave a Review'}
        style={{width: '95%', marginBottom: 10}}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={commonStyles.headerText}>Order History</Text>}
        slotRight={<></>}
      />
      <View style={{width: '100%', alignItems: 'center', marginBottom: 200}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}
          data={rewards}
          renderItem={renderItem}
        />
      </View>
      <Footer />
    </View>
  );
};

export default OrderHistory;
