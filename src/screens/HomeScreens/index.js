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
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreens = () => {
  const navigation = useNavigation();

  // const productQuantities = [{
  //   productName:'Onion',
  //   qty:2,
  //   price:150
  // }]
  const handleNavigate = screen => {
    navigation.navigate(screen);
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
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('MenuDetail')}>
          <Text style={styles.to.btnText}>MenuDetail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('Menu')}>
          <Text style={styles.to.btnText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('RestaurantMain')}>
          <Text style={styles.to.btnText}>RestaurantMain</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('QrCode')}>
          <Text style={styles.to.btnText}>QrCode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('Restaurant')}>
          <Text style={styles.to.btnText}>Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('IngredientCustomization')}>
          <Text style={styles.to.btnText}>IngredientCustomization</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('PaymentOption')}>
          <Text style={styles.to.btnText}>PaymentOption</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('AmountPaid')}>
          <Text style={styles.to.btnText}>AmountPaid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('TrackOrder')}>
          <Text style={styles.to.btnText}>TrackOrder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('AddCard')}>
          <Text style={styles.to.btnText}>AddCard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('Thankyou')}>
          <Text style={styles.to.btnText}>Thankyou</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => handleNavigate('RestaurantReview')}>
          <Text style={styles.to.btnText}>RestaurantReview</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.to} onPress={() => handleNavigate('MenuDetail')}>
          <Text style={styles.to.btnText}  >MenuDetail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.to} onPress={() => handleNavigate('MenuDetail')}>
          <Text style={styles.to.btnText}  >MenuDetail</Text>
        </TouchableOpacity> */}
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

export default HomeScreens;
