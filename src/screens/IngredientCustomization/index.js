import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';

import BackgroundCard from '../../components/BackgroundCard';
import FadedSeparator from '../../components/FadedSeparator';
import {Image} from 'react-native';
import Counter from '../../components/Counter';
import {widthToDp} from '../../utils/Dimensions';
import {Ingredients, productQuantities} from '../../utils/demodata';
import SizeButton from '../../components/SizeButton';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import ButtonsCommonAlt from '../../components/Buttons/ButtonCommonAlt';
import {useNavigation} from '@react-navigation/native';
import GradientText from '../../components/GradientText/index.js';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';

const IngredientCustomization = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.navigate('MenuDetail');
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <View
        style={{
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <ScrollView>
          <HeaderModed
            slotLeft={
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <CloseFilterBtn width={20} height={20} />
                </TouchableOpacity>
              </>
            }
            slotCenter={<Text style={styles.headerTitle}>Customization</Text>}
          />
          <BackgroundCard
            childrenStyle={{
              alignItems: 'flex-start',
              width: widthToDp(90),
              alignSelf: 'center',
            }}>
            <Text style={styles.navbarPageTitle}>Customize Ingredients</Text>

            <FadedSeparator />
            <View style={{marginHorizontal: 5, marginVertical: 10}}>
              {Ingredients.map((item, index) => (
                <View style={styles.ingredientContainer}>
                  <View style={styles.ingredientSubContainer}>
                    <View style={styles.productContainer}>
                      <Image
                        source={require('../../assets/images/onion.png')}
                      />
                    </View>

                    <Text style={[styles.navbarPageTitle, {marginLeft: 10}]}>
                      Onion
                    </Text>
                  </View>
                  <View style={styles.counterMain}>
                    {item.counterType == 'number' ? (
                      <View style={styles.counter}>
                        <Counter
                          minusContainerStyle={styles.minus}
                          plusContainerStyle={styles.plus}
                          counterTextStyle={{margin: 5, width: widthToDp(10)}}
                          minusStyle={{width: 10, height: 2}}
                          plusStyle={{width: 10, height: 10}}
                        />
                      </View>
                    ) : (
                      <View
                        style={{
                          justifyContent: 'space-between',
                        }}>
                        <SizeButton />
                      </View>
                    )}
                    <Text style={styles.priceStyle}>$5</Text>
                  </View>
                </View>
              ))}
            </View>
          </BackgroundCard>

          <BackgroundCard
            childrenStyle={{width: widthToDp(90)}}
            style={{marginTop: 10, alignSelf: 'center'}}>
            <View style={styles.pricingTitle}>
              <Text style={styles.navbarPageTitle}>Description</Text>
              <Text style={styles.navbarPageTitle}>Qty</Text>
              <Text style={styles.navbarPageTitle}>Price</Text>
            </View>

            {productQuantities.map((item, index) => (
              <View style={styles.pricingContainer}>
                <Text style={[styles.quantityTitle, {textAlign: 'left'}]}>
                  {item.productName}
                </Text>
                <Text
                  style={[
                    styles.quantityTitle,
                    {textAlign: 'center', width: '15%', marginRight: 20},
                  ]}>
                  {item.qty}
                </Text>
                <Text
                  style={[
                    styles.quantityTitle,
                    {textAlign: 'right', width: '20%'},
                  ]}>
                  ${item.price}
                </Text>
              </View>
            ))}
            <FadedSeparator />
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total</Text>

              <GradientText style={styles.totalPrice}>$150</GradientText>
            </View>
          </BackgroundCard>
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonsCommon
          btnText={'Done'}
          btnStyle={{width: widthToDp(40)}}
          containerStyle={{marginRight: 10}}
          onPress={() => handleClose()}
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
