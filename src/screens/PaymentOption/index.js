import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import {Colors} from '../../theme';
import {fonts} from '../../theme/FontFamily.js';
import Menu from '../Menu/index.js';
import {cartData, productQuantities} from '../../utils/demodata.js';
import BackgroundCard from '../../components/BackgroundCard/index.js';
import {Image} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions.js';
import FadedSeparator from '../../components/FadedSeparator/index.js';

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: 'transparent'}}>
    <Text>Orders by Mark Anderson</Text>
    {cartData.map((item, index) => (
      <BackgroundCard
        style={{marginTop: 10, marginHorizontal: 10}}
        childrenStyle={{borderRadius: 26}}
        linearBackStyle={{borderRadius: 26}}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              // marginTop: 15,
              marginVertical: 10,
              alignItems: 'center',
              // justifyContent: 'center',
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
                <Image
                  source={require('../../assets/images/burger_one.png')}
                  style={{width: widthToDp(20), height: heightToDp(20)}}
                  resizeMode="contain"
                />
              </View>
              <View style={{}}>
                <Text style={[styles.navbarPageTitle, {marginLeft: 10}]}>
                  {item.productName}
                </Text>
                <Text style={[styles.navbarPageTitle, {marginLeft: 10}]}>
                  {item.price}
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  marginLeft: 10,

                  // backgroundColor: 'green',
                }}></View>
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
      {productQuantities.map((item, index) => (
        <View style={styles.pricingContainer}>
          <Text style={styles.quantityTitle}>{item.productName}</Text>
          {/* <Text style={styles.quantityTitle}>{item.qty}</Text> */}
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
  </View>
  //   <Menu />
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: 'transparent'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'transparent'}}
    style={{backgroundColor: 'transparent'}}
    renderLabel={({route, focused, color}) => (
      <LinearGradient
        colors={
          focused ? ['#00F69299', '#00A7F7FF'] : ['transparent', 'transparent']
        }
        useAngle={true}
        angle={820}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.tabBarButton}>
        <Text
          style={{
            color: focused ? Colors.BLACK : Colors.WHITE,
            fontFamily: fonts.URBANIST_SEMIBOLD,
            fontSize: 16,
          }}>
          {route.title}
        </Text>
      </LinearGradient>
    )}
  />
);
const PaymentOption = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'My Orders'},
    {key: 'second', title: 'Second'},
  ]);
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed />
      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        style={{backgroundColor: 'transparent'}}
      />
      {/* <Text>PaymentOption</Text> */}
    </View>
  );
};

export default PaymentOption;
