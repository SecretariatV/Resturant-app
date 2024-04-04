import {View, Text, ScrollView} from 'react-native';
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
import BackButton from '../../components/NavButtons/BackButton/index.js';
import Footer from '../../components/Footer/index.js';

const IngredientCustomization = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.navigate('MenuDetail');
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <ScrollView>
        <HeaderModed
          slotLeft={<BackButton onPress={() => navigation.goBack()} />}
          slotCenter={<Text style={styles.headerTitle}>Customization</Text>}
        />
        <BackgroundCard childrenStyle={{alignItems: 'flex-start'}}>
          <Text style={styles.navbarPageTitle}>Customize Ingredients</Text>

          <FadedSeparator />
          <View style={{marginHorizontal: 5}}>
            {Ingredients.map((item, index) => (
              <View style={styles.ingredientContainer}>
                <View style={styles.ingredientSubContainer}>
                  <View style={styles.productContainer}>
                    <Image source={require('../../assets/images/onion.png')} />
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
                        counterTextStyle={{margin: 15}}
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

        <BackgroundCard childrenStyle={{}} style={{marginTop: 10}}>
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

            <Text style={styles.totalPrice}>$150</Text>
          </View>
        </BackgroundCard>
      </ScrollView>
      <View style={styles.buttonContainer}>
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
      {/* <Footer /> */}
    </View>
  );
};

export default IngredientCustomization;
