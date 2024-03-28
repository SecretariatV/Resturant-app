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

const MyOrder = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.orderTitle}>Orders by Mark Anderson</Text>
        {cartData.map((item, index) => (
          <BackgroundCard
            style={{marginTop: 10, marginHorizontal: 10}}
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
                    <Text style={[styles.productName, {marginLeft: 10}]}>
                      {item.productName}
                    </Text>
                    <Text style={[styles.productPrice, {marginLeft: 10}]}>
                      ${item.price}
                    </Text>
                  </View>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.qtyContainer}>
                    <Text
                      style={{
                        fontSize: 22,
                        fontFamily: fonts.URBANIST_REGULAR,
                      }}>
                      Qty <Text style={styles.qty}>3</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </BackgroundCard>
        ))}
        <BackgroundCard
          childrenStyle={{alignItems: 'flex-start'}}
          style={{
            marginTop: 10,
            width: '95%',
            alignSelf: 'center',
          }}>
          <View style={styles.pricingContainer}>
            <Text style={styles.quantityTitle}>Sub-Total</Text>
            <Text style={styles.quantityTitle}>300</Text>
          </View>

          <View style={styles.pricingContainer}>
            <Text style={styles.quantityTitle}>Discount</Text>
            <Text style={styles.quantityTitle}>300</Text>
          </View>

          <View style={styles.pricingContainer}>
            <Text style={styles.quantityTitle}>VAT</Text>
            <Text style={styles.quantityTitle}>300</Text>
          </View>
          <FadedSeparator />
          <View style={styles.grandTotalContainer}>
            <GradientText style={styles.customizeTxt}>Grand total</GradientText>

            <GradientText style={styles.customizeTxt}>$150</GradientText>
          </View>
        </BackgroundCard>

        <BackgroundCard
          style={{
            marginTop: 10,
            width: '95%',
            alignSelf: 'center',
            marginBottom: 100,
            // paddingVertical: 10,
          }}>
          <View
            style={{marginVertical: 15, paddingHorizontal: 10, width: '100%'}}>
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
                fontFamily: fonts.URBANIST_SEMIBOLD,
              }}>
              Add new card
            </Text>
          </TouchableOpacity>

          <FadedSeparator />
          <View
            style={{marginVertical: 15, paddingHorizontal: 10, width: '100%'}}>
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
            onPress={() => navigation.navigate('Thankyou')}
          />
        </BackgroundCard>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default MyOrder;
