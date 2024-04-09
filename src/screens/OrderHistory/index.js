import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';

const OrderHistory = () => {
  const navigation = useNavigation();

  const [points, setPoints] = useState(500);

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderHistoryDetail')}
      class="menu-item-smallbox"
      style={styles.menuItemSmallbox}
      key={index}>
      <View style={styles.rewardContainer}>
        <Image source={require('../../assets/images/rest_profile.png')} />
        <View style={styles.historyDetail} className="history-detail">
          <View className="rest-detail" style={styles.restDetail}>
            <Text style={styles.rewardText}>{item.restaurant}</Text>
            <GradientText style={{marginTop: 5}}>
              <Text>22/1/2024</Text>
            </GradientText>
          </View>
          <View>
            <Text style={styles.amount}>$300</Text>
          </View>
        </View>
      </View>

      <RestaurantButton
        onPress={() => navigation.navigate('RestaurantReview')}
        btnText={'Leave a Review'}
        style={styles.reviewBtn}
        className="review-btn"
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={commonStyles.headerText}>Order History</Text>}
        slotRight={<></>}
      />
      <View style={styles.subContainer} className="sub-container">
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}
          data={rewards}
          renderItem={renderItem}
        />
      </View>
      {/* <Footer /> */}
    </View>
  );
};

export default OrderHistory;
