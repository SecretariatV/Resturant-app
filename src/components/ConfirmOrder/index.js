import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
// import BackgroundLayout from '../../components/BackgroundLayout';
// import HeaderModed from '../../components/HeaderModed';
// import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
// import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../theme';
import {fonts} from '../../theme/FontFamily.js';
import {
  cardData,
  cartData,
  paymentMode,
  productQuantities,
} from '../../utils/demodata.js';
import BackgroundCard from '../../components/BackgroundCard/index.js';
import {Image} from 'react-native';
import FadedSeparator from '../../components/FadedSeparator/index.js';
import GradientText from '../../components/GradientText/index.js';
import MenuNavButton from '../../components/MenuNavButton/index.js';
import Hamburger from '../../assets/images/hamburger.png';
import RadioButtonCard from '../../components/RadioButtonCard/index.js';
import Footer from '../../components/Footer/index.js';
import {useNavigation} from '@react-navigation/native';
import ButtonsCommon from '../Buttons/ButtonCommon.js/index.js';
import {width, widthToDp} from '../../utils/Dimensions.js';
import logoImage from '../../assets/images/resturant_log.png';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import LinearGradient from 'react-native-linear-gradient';
import FancyInput from '../FancyInput/index.js';
const ConfirmOrder = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);
  const [tipAmountIndex, setTipAmountIndex] = useState(20);
  const tipsData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const [tipAmount, setTipAmount] = useState(0);
  const handleTipAmount = amount => {
    setTipAmountIndex(amount);
    setTipAmount(tipsData[amount]);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.orderTitle}>Orders by Mark Anderson</Text>
        <View
          style={{
            // backgroundColor: '#7074C422',
            width: '100%',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 26,
            margin: 5,
            paddingVertical: 10,
            // paddingHorizontal: 10,

            // marginHorizontal: 10,
          }}>
          <BackgroundCard
            style={{marginTop: 5, marginHorizontal: 20, width: '90%'}}
            linearBackStyle={{borderRadius: 26}}>
            <View
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                // backgroundColor: '#f00',
                width: '100%',
              }}>
              <View style={{}}>
                <View style={styles.orderRestContainer}>
                  <Image
                    source={logoImage}
                    style={{
                      margin: 5,
                      resizeMode: 'contain',
                      borderColor: Colors.green,
                      borderWidth: 4,
                      borderRadius: 10,
                      width: 44,
                      height: 44,
                    }}
                  />
                  <View style={{}}>
                    <Text
                      style={[styles.productName, {marginLeft: 10}]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {'Restaurant Name'}
                    </Text>
                    <Text
                      style={{marginLeft: 10, color: '#fff5', fontSize: 16}}>
                      December 22, 2023
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </BackgroundCard>
          {cartData.map((item, index) => {
            const words = item.productName.split(' ');
            console.log(words, 'words');
            // Get the first 10 words and join them back into a string
            const truncatedText = words.slice(0, 3).join(' ');
            if (words.length > 10) {
              truncatedText += '...';
            }

            console.log(truncatedText, 'truncatedText');
            return (
              <BackgroundCard
                key={index}
                style={{marginTop: 10, marginHorizontal: 20}}
                childrenStyle={{borderRadius: 26}}
                linearBackStyle={{borderRadius: 26}}>
                <View
                  style={{
                    marginHorizontal: 15,
                  }}>
                  <View style={styles.myOrderContainer}>
                    <View style={styles.myOrderSubContainer}>
                      <View style={styles.productContainer}>
                        <Image
                          source={require('../../assets/images/burger_one.png')}
                          style={styles.productImg}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{}}>
                        <Text
                          style={[styles.productName, {marginLeft: 10}]}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          {...(item.productName.length < 5
                            ? `${item.productName}`
                            : `${item.productName.substring(0, 10)}...`)}>
                          {item.productName}
                        </Text>
                        <Text style={[styles.timePrice, {marginLeft: 10}]}>
                          ${item.time}
                        </Text>
                        <Text style={[styles.productPrice, {marginLeft: 10}]}>
                          ${item.price}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginTop: widthToDp(2),
                        alignItems: 'center',
                        // alignItems: 'flex-start',
                        // justifyContent: 'center',
                        width: 100,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: fonts.URBANIST_REGULAR,
                          color: '#F7F7F899',
                        }}>
                        Qty
                      </Text>
                      <Text style={styles.productPrice}>1</Text>
                    </View>

                    <View style={{}}>
                      <View style={styles.qtyContainer}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: fonts.URBANIST_REGULAR,
                            color: '#F7F7F899',
                          }}>
                          Total
                        </Text>

                        <Text style={styles.productPrice}>$50</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </BackgroundCard>
            );
          })}

          <BackgroundCard
            childrenStyle={{alignItems: 'flex-start', overflow: 'hidden'}}
            style={{
              marginTop: 10,
              width: '90%',
              alignSelf: 'center',
            }}>
            <View style={styles.tipsContainer}>
              <Text style={styles.tipsContainerTitle}>Tips</Text>
            </View>

            {/* <View style={styles.pricingContainer}>
              <Text style={styles.tipsContainerSubTitle}>Custom Amount</Text>
            </View> */}
            <FancyInput
              fieldValue={tipAmount}
              fieldPlaceHolder="Custom Amount"
              fieldCallback={setTipAmount}
            />
            <View class="" style={styles.separatorTextCont}>
              <GradientText style={styles.separatorText}>OR</GradientText>
            </View>
            <View style={styles.customAmountContainer}>
              <LinearGradient
                colors={[
                  '#484848aa',
                  '#48484844',
                  '#00000000',
                  '#48484844',
                  '#484848aa',
                ]}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <HorizontalPicker
                  defaultIndex={tipAmountIndex}
                  data={tipsData}
                  style={{marginTop: 5}}
                  snapTimeout={250}
                  renderItem={(item, index) => (
                    <TouchableOpacity
                      style={{
                        // justifyContent: 'space-between',
                        // width: '100%',
                        width: widthToDp(26),
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          position: 'relative',
                          width: '100%',
                          // backgroundColor: 'green',
                          // justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            fontSize: 8,
                            position: 'absolute',
                            left: width > 390 ? width * 0.114 : width * 0.244,
                            // '40%',
                            color:
                              tipAmountIndex === index
                                ? Colors.GREEN
                                : Colors.WHITE,
                          }}>
                          |
                        </Text>
                        <Text
                          style={[
                            styles.levelTxt,
                            {
                              // backgroundColor: '#f00',
                              textAlign: 'center',
                              color:
                                tipAmountIndex === index
                                  ? Colors.GREEN
                                  : Colors.WHITE,
                            },
                          ]}>
                          ${item}
                        </Text>
                        <Text
                          style={{
                            fontSize: 8,
                            position: 'absolute',
                            // left: '40%',
                            left: width > 390 ? width * 0.114 : width * 0.244,

                            top: 35,
                            color:
                              tipAmountIndex === index
                                ? Colors.GREEN
                                : Colors.WHITE,
                          }}>
                          |
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  itemWidth={100}
                  onChange={handleTipAmount}
                />
              </LinearGradient>
            </View>
          </BackgroundCard>

          <BackgroundCard
            childrenStyle={{alignItems: 'flex-start'}}
            style={{
              marginTop: 10,
              width: '90%',
              alignSelf: 'center',
            }}>
            <View style={styles.pricingContainer}>
              <Text style={styles.quantityTitle}>Sub-Total</Text>
              <Text style={styles.quantityTitle}>$300</Text>
            </View>

            <View style={styles.pricingContainer}>
              <Text style={styles.quantityTitle}>Discount</Text>
              <Text style={styles.quantityTitle}>$300</Text>
            </View>

            <View style={styles.pricingContainer}>
              <Text style={styles.quantityTitle}>VAT</Text>
              <Text style={styles.quantityTitle}>$300</Text>
            </View>
            <FadedSeparator />
            <View style={styles.grandTotalContainer}>
              {/* <Text style={styles.customizeTxt}>Grand total</Text> */}
              <GradientText style={styles.customizeTxt}>
                Grand total
              </GradientText>
              <GradientText style={styles.customizeTxt}>$150</GradientText>
            </View>
          </BackgroundCard>
        </View>

        {/* </BackgroundCard> */}
        <View
          class="payment-options-container"
          style={styles.paymentOptionsContainer}>
          <BackgroundCard
            style={{
              marginTop: 10,
              width: '95%',
              alignSelf: 'center',
            }}>
            <View
              style={{
                marginVertical: 15,
                paddingHorizontal: 10,
                width: '100%',
              }}>
              {cardData.map((item, index) => (
                <View style={{width: '100%'}}>
                  <RadioButtonCard cardName={item.cardName} />
                  <FadedSeparator />
                </View>
              ))}
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                width: '90%',
                padding: 10,
                alignItems: 'center',
                borderRadius: 22,
              }}
              onPress={() => navigation.navigate('AddCard')}>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontFamily: fonts.URBANIST_MEDIUM,
                }}>
                Add new card
              </Text>
            </TouchableOpacity>

            <FadedSeparator />
            <View
              style={{
                marginVertical: 15,
                paddingHorizontal: 10,
                width: '100%',
              }}>
              {paymentMode.map((item, index) => (
                <View style={{width: '100%'}}>
                  <RadioButtonCard cardName={item.cardName} />

                  {/* <FadedSeparator /> */}
                </View>
              ))}
            </View>

            <ButtonsCommon
              containerStyle={{width: '95%', marginBottom: 10}}
              btnText={'Confirm Payment'}
              onPress={() => navigation.navigate('Thankyou')}
            />
          </BackgroundCard>
        </View>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default ConfirmOrder;
