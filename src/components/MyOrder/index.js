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
import {widthToDp} from '../../utils/Dimensions.js';
import {getPlatformSpecificValue} from '../../utils/helper.js';

const MyOrder = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.orderTitle}>Orders by Mark Anderson</Text>
        <View
          style={{
            backgroundColor: '#7074C422',
            width: '95%',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 26,
            margin: 5,
            paddingVertical: 10,
            // paddingHorizontal: 10,

            // marginHorizontal: 10,
          }}>
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
          <Text
            ellipsizeMode="clip"
            numberOfLines={1}
            style={{
              color: 'rgba(255, 255, 255, 0.16)',
              marginVertical: 10,
              width: '90%',
            }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
          {/* <BackgroundCard
          childrenStyle={{alignItems: 'flex-start'}}
          style={{
            marginTop: 10,
            width: '95%',
            alignSelf: 'center',
          }}> */}
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
            <Text style={styles.customizeTxt}>Grand total</Text>

            <GradientText style={styles.customizeTxt}>$150</GradientText>
          </View>
        </View>
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
              <View style={{width: '100%'}} key={index}>
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
            btnText={'Pay'}
            onPress={() => navigation.navigate('ConfirmPayment')}
          />
        </BackgroundCard>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default MyOrder;
