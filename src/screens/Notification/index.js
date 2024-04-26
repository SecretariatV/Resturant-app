import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import {styles} from './styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Easing} from 'react-native-reanimated';
import HeaderModed from '../../components/HeaderModed';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import {Colors, FontFamily, commonStyles} from '../../theme';
import {fonts} from '../../theme/FontFamily';
import Loyal from '../../assets/images/loyal.svg';
import GradientText from '../../components/GradientText';
import {rewards} from '../../utils/demodata';
import {widthToDp} from '../../utils/Dimensions';
const Notification = () => {
  const notification = [
    {
      // imgUrl:''
      title: 'Restaurant Name',
      description:
        'Your order from Restaurant Name is ready for pickup. Enjoy your meal!',
      status: 'Recently',
      type: 'pickup',
      restaurantName: 'Restaurant Name',
    },
    {
      title: 'Double Rewards Weekend!',
      description:
        'Your order from Restaurant Name is ready for pickup. Enjoy your meal!',
      restaurantName: 'Restaurant Name',

      status: 'Recently',
      type: 'Offer',
    },
    {
      title: 'New Restaurant Alert:',
      description:
        'Explore a new dining experience! [New Restaurant Name] is now on ShareAbill',
      status: 'Recently',
      restaurantName: 'Restaurant Name',

      type: 'Alert',
    },
  ];
  const [points, setPoints] = useState(500);
  const circularProgressRef = useRef(null);
  useEffect(() => {
    if (circularProgressRef.current) {
      circularProgressRef.current.animate(80, 2000, Easing.quad);
    }
  }, []);

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      class="menu-item-smallbox"
      style={styles.menuItemSmallbox}
      key={index}>
      <View style={styles.rewardContainer}>
        <Image
          source={require('../../assets/images/rest_profile.png')}
          style={{
            width: widthToDp(12),
            height: widthToDp(12),
            borderRadius: widthToDp(6),
          }}
        />
        <View style={{justifyContent: 'center', marginLeft: 10, width: '80%'}}>
          {item.type == 'pickup' ? (
            <GradientText
              style={{fontFamily: fonts.URBANIST_MEDIUM, fontSize: 15}}>
              {item.restaurantName}
            </GradientText>
          ) : (
            ''
          )}

          {item.type == 'Offer' ? (
            <Text style={styles.rewardText}>
              Special Offer Alert:{' '}
              <Text style={{color: Colors.GREEN}}>{item.title}</Text>
            </Text>
          ) : (
            ''
          )}
          {item.type == 'Alert' ? (
            <Text style={styles.rewardText}>
              {item.title}{' '}
              <Text style={{color: Colors.GREEN}}>{item.restaurantName}</Text>
            </Text>
          ) : (
            ''
          )}

          <Text
            style={{
              marginTop: 5,
              FontFamily: fonts.URBANIST_REGULAR,
              fontSize: 13,
              color: Colors.WHITE,
              //   paddingHorizontal: 10,
            }}>
            {item.description}
          </Text>

          <Text
            style={{
              fontFamily: fonts.URBANIST_LIGHT,
              fontSize: 12,
              color: Colors.WHITE,
              marginTop: 10,
            }}>
            {item.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={commonStyles.headerText}>Notifications</Text>}
        slotRight={<></>}
      />
      <View style={{width: '100%', alignItems: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop: 30}}
          data={notification}
          renderItem={renderItem}
        />
      </View>
      {/* <Footer /> */}
    </View>
  );
};

export default Notification;
