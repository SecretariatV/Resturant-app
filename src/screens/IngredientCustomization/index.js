import {View, Text, ScrollView, Alert} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import BackgroundCard from '../../components/BackgroundCard';
import FadedSeparator from '../../components/FadedSeparator';
import {Image} from 'react-native';
import Counter from '../../components/Counter';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
import {Ingredients, productQuantities} from '../../utils/demodata';
import SizeButton from '../../components/SizeButton';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import ButtonsCommonAlt from '../../components/Buttons/ButtonCommonAlt';
import {useNavigation} from '@react-navigation/native';

const IngredientCustomization = () => {
  const navigation = useNavigation();

  // const productQuantities = [{
  //   productName:'Onion',
  //   qty:2,
  //   price:150
  // }]
  const handleClose = () => {
    navigation.navigate('MenuDetail');
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <ScrollView>
        <HeaderModed
          slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
          slotCenter={<Text style={styles.headerTitle}>Customization</Text>}
          // slotRight={<MenuNavButton icon={HeartIcon} iconType="image" />}
        />
        <BackgroundCard childrenStyle={{alignItems: 'flex-start'}}>
          <Text style={styles.navbarPageTitle}>Customize Ingredients</Text>

          <FadedSeparator />
          <View style={{marginHorizontal: 15}}>
            {Ingredients.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#303F43',
                      borderRadius: 8,
                    }}>
                    <Image source={require('../../assets/images/onion.png')} />
                  </View>

                  <Text style={[styles.navbarPageTitle, {marginLeft: 10}]}>
                    Onion
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  {item.counterType == 'number' ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        // backgroundColor: 'red',
                        alignItems: 'center',
                        marginLeft: 10,

                        // backgroundColor: 'green',
                      }}>
                      <Counter
                        minusContainerStyle={{
                          height: heightToDp(7),
                          width: widthToDp(7),
                          borderRadius: 8,
                        }}
                        plusContainerStyle={{
                          height: heightToDp(7),
                          width: widthToDp(7),
                          borderRadius: 8,
                          backgroundColor: Colors.GREEN,
                        }}
                        counterTextStyle={{margin: 15}}
                        minusStyle={{width: 10, height: 2}}
                        plusStyle={{width: 10, height: 10}}
                      />

                      <Text style={styles.priceStyle}>$5</Text>
                    </View>
                  ) : (
                    <View style={{marginRight: 15, width: '100%'}}>
                      <SizeButton />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </BackgroundCard>

        <BackgroundCard
          childrenStyle={{alignItems: 'flex-start'}}
          style={{marginTop: 10}}>
          <View style={styles.pricingTitle}>
            <Text style={styles.navbarPageTitle}>Description</Text>
            <Text style={styles.navbarPageTitle}>Qty</Text>
            <Text style={styles.navbarPageTitle}>Price</Text>
          </View>
          {productQuantities.map((item, index) => (
            <View style={styles.pricingContainer}>
              <Text style={styles.quantityTitle}>{item.productName}</Text>
              <Text style={styles.quantityTitle}>{item.qty}</Text>
              <Text style={styles.quantityTitle}>${item.price}</Text>
            </View>
          ))}
          <FadedSeparator />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              marginBottom: 10,
            }}>
            <Text style={styles.totalText}>Total</Text>

            <Text style={styles.totalPrice}>$150</Text>
          </View>
        </BackgroundCard>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignSelf: 'center',
          // alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 30,
        }}>
        <ButtonsCommon
          btnText={'Done'}
          btnStyle={{width: widthToDp(40)}}
          containerStyle={{marginRight: 10}}
        />
        <ButtonsCommonAlt
          btnText={'Cancel'}
          btnStyle={{width: widthToDp(40)}}
          containerStyle={{marginLeft: 10}}
          onPress={() => handleClose()}
        />
      </View>
    </View>
  );
};

export default IngredientCustomization;
