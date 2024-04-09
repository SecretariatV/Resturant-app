import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import Footer from '../../components/Footer';
import HeaderModed from '../../components/HeaderModed';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import {Colors, commonStyles} from '../../theme';
import GradientText from '../../components/GradientText';
import {fonts} from '../../theme/FontFamily';
import RestaurantButton from '../../components/Buttons/RestaurantButton';
import FadedSeparator from '../../components/FadedSeparator';
import {orderHistory} from '../../utils/demodata';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import {heightToDp} from '../../utils/Dimensions';
import {useNavigation} from '@react-navigation/native';

const OrderHistoryDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={
          <Text style={commonStyles.headerText}>Order History Details</Text>
        }
        slotRight={<></>}
      />
      <ScrollView>
        <View style={{marginBottom: heightToDp(30)}}>
          <View class="menu-item-smallbox" style={styles.menuItemSmallbox}>
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
                  <Text style={styles.rewardText}>Location name</Text>
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
              onPress={() => navigation.navigate('RestaurantReview')}
              btnText={'Leave a Review'}
              style={{width: '95%', marginBottom: 10}}
            />
          </View>

          <View class="menu-item-smallbox" style={styles.menuItemSmallbox}>
            <View class="order-num-box" style={styles.orderBox}>
              <Text style={styles.orderNo}>Order Number</Text>
              <Text style={styles.orderNoTxt}>22556688</Text>
            </View>

            <View
              class="order-date-box"
              style={[styles.orderDateBox, {marginTop: 5}]}>
              <Text class="date-heading" style={styles.dateHeading}>
                Date of order
              </Text>
              <Text class="order-date" style={styles.date}>
                25-02-2023, 13:22:16
              </Text>
            </View>

            <View class="order-date-box" style={styles.orderDateBox}>
              <Text style={styles.dateHeading}>Payment Method</Text>
              <Text class="bank-transfer" style={styles.date}>
                Bank Transfer
              </Text>
            </View>

            <View class="order-date-box" style={styles.orderDateBox}>
              <Text style={styles.dateHeading}>Card</Text>
              <Text class="card-no" style={styles.date}>
                .... .... .... .... 1566
              </Text>
            </View>

            <FadedSeparator />
            <View style={{width: '90%', marginVertical: 10}}>
              <Text style={styles.rewardText}>Order Summary</Text>
              {orderHistory.map((item, index) => (
                <View
                  style={{
                    backgroundColor: '#7074C411',
                    flexDirection: 'row',
                    marginTop: 15,
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    borderRadius: 16,
                    width: '100%',
                  }}>
                  <View style={{flexDirection: 'row', width: '90%'}}>
                    <Image
                      source={require('../../assets/images/burger_one.png')}
                      width={30}
                      height={30}
                      style={{width: 42, height: 42}}
                    />
                    <View style={styles.taxContainer}>
                      <Text style={styles.itemText}>Burger</Text>
                      <Text style={styles.tax}>Tax</Text>
                    </View>
                  </View>
                  <View style={{width: '10%'}}>
                    <Text style={styles.productPrice}>$50</Text>
                    <Text style={styles.taxPrice}>$5</Text>
                  </View>
                </View>
              ))}

              <Text
                ellipsizeMode="clip"
                numberOfLines={1}
                style={{
                  color: 'rgba(255, 255, 255, 0.16)',
                  marginVertical: 10,
                }}>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              </Text>

              <View
                class="subtotal-box"
                style={[styles.orderDateBox, {width: '100%'}]}>
                <Text class="total-tax" style={[styles.dateHeading]}>
                  Sub total
                </Text>
                <Text class="order-date" style={styles.date}>
                  $150
                </Text>
              </View>

              <View class="box" style={[styles.orderDateBox, {width: '100%'}]}>
                <Text style={styles.dateHeading}>total Tax</Text>
                <Text class="bank-transfer" style={styles.date}>
                  $15
                </Text>
              </View>

              <View
                class="discount-box"
                style={[styles.orderDateBox, {width: '100%'}]}>
                <Text style={styles.dateHeading}>Discount</Text>
                <Text class="discount" style={styles.date}>
                  --
                </Text>
              </View>

              <View
                class="grand-total-box"
                style={[styles.orderDateBox, {width: '100%'}]}>
                <GradientText style={styles.grandtotal}>
                  Grand Total
                </GradientText>
                <GradientText class="grand-total" style={styles.grandtotal}>
                  $50
                </GradientText>
              </View>
            </View>
          </View>
          <ButtonsCommon
            btnText={'Share'}
            containerStyle={{
              marginTop: 10,
              width: '90%',
              alignSelf: 'center',
            }}
            btnStyle={{
              flexDirection: 'row',

              justifyContent: 'center',
              width: '100%',
            }}
            imageSource={require('../../assets/images/share-arrow.png')}
            img
          />
        </View>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default OrderHistoryDetail;
