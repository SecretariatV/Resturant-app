import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {CheckBox} from '@rneui/themed';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../theme';
import {fonts} from '../../theme/FontFamily.js';

import HeaderModed from '../../components/HeaderModed';
import BackgroundLayout from '../../components/BackgroundLayout';
import GradientText from '../../components/GradientText/index.js';
import MenuNavButton from '../../components/MenuNavButton/index.js';
import Footer from '../../components/Footer/index.js';
import MyOrder from '../../components/MyOrder/index.js';
import Counter from '../../components/Counter/index.js';
import BackgroundCard from '../../components/BackgroundCard/index.js';
import Hamburger from '../../assets/images/hamburger.png';
import HundredPercentBar from '../../assets/images/hundredPercentBar.svg';
import ReviewCard from '../../components/ReviewCard/index.js';
import {reviews} from '../../utils/demodata.js';
import {width, widthToDp} from '../../utils/Dimensions.js';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton/index.js';

import {useSharedValue, withDecay} from 'react-native-reanimated';
import Slider from '@react-native-community/slider';
import {
  getPlatformSpecificValue,
  screenToTextSize,
} from '../../utils/helper.js';

const ShareEqually = () => (
  <View style={{flex: 1, alignItems: 'center'}}>
    <Text
      style={{
        color: Colors.WHITE,
        fontSize: 26,
        fontFamily: fonts.URBANIST_BOLD,
        marginTop: 10,
      }}>
      Number of Guests
    </Text>

    <Counter plusContainerStyle={{backgroundColor: Colors.GREEN}} />

    <Text
      style={{
        color: Colors.WHITE,
        marginTop: 10,
      }}>
      Each Guest Will Pay
    </Text>

    <GradientText
      style={{
        marginTop: 10,
        fontSize: 35,
        fontFamily: fonts.URBANIST_EXTRABOLD,
      }}>
      $50
    </GradientText>
  </View>
);

const ShareByPercent = () => {
  const [progress, setprogress] = useState('30');
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(100);

  useEffect(() => {}, [progress]);

  // const progress = useSharedValue(30);
  // const min = useSharedValue(0);
  // const max = useSharedValue(100);
  return (
    <ScrollView
      style={{flex: 1, marginBottom: 70}}
      contentContainerStyle={{justifyContent: 'start'}}>
      <View style={styles.paymentUserBox} class="payment-user-box">
        <View
          class="payment-user-box-name-n-price-container"
          style={styles.paymentUserBoxNamenPriceContainer}>
          <View
            class="payment-user-box-username"
            style={styles.paymentUserBoxUserName}>
            <Image source={require('../../assets/images/profileImg.png')} />
            <Text style={styles.userName}>Hasan</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.percentItemPrice}>${progress}</Text>
          </View>
        </View>
        <View class="slider-container">
          <View
            class="slider-bar-container"
            style={{position: 'relative', marginBottom: 30}}>
            <Slider
              style={{
                width: widthToDp(90),
                height: 40,
                position: 'relative',
                left: -10,
              }}
              minimumValue={min}
              maximumValue={max}
              // value={progress}
              step={25}
              stepLabel={[
                0,
                '0%',
                25,
                '25%',
                50,
                '50%',
                75,
                '75%',
                100,
                '100%',
              ]}
              minimumTrackTintColor="transparent"
              maximumTrackTintColor="transparent"
              thumbTintColor="#fff"
              onValueChange={val => {
                console.log(val, progress);
                setprogress(val);
                return true;
              }}
            />
            <View class="active-order-bar-bg" style={styles.sliderGradBar}>
              <LinearGradient
                class="intro-active-orders"
                colors={[
                  '#00F594ff',
                  '#00F594ff',
                  '#00F594ff',
                  '#02ABEEff',
                  '#00F594ff',
                ]}
                useAngle={true}
                angle={45}
                style={{
                  borderRadius: 10,
                  flexWrap: 'nowrap',
                  height: 8,
                  width: progress + 1 + '%',
                  // maxWidth: widthToDp(75),
                }}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}></LinearGradient>
            </View>
            <HundredPercentBar
              width={widthToDp(85)}
              style={{position: 'absolute', left: 0, top: 35}}
            />
          </View>
          {/* <Image source={require('../../assets/images/hundredPercentBar.svg')}/> */}
          <View
            style={{
              width: widthToDp(85),
              justifyContent: 'start',
              alignContent: 'center',
            }}></View>
        </View>
      </View>
      <View style={styles.paymentUserBox} class="payment-user-box">
        <View
          class="payment-user-box-name-n-price-container"
          style={styles.paymentUserBoxNamenPriceContainer}>
          <View
            class="payment-user-box-username"
            style={styles.paymentUserBoxUserName}>
            <Image source={require('../../assets/images/profileImg.png')} />
            <Text style={styles.userName}>Hasan</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.percentItemPrice}>${progress}</Text>
          </View>
        </View>
        <View class="slider-container">
          <View
            class="slider-bar-container"
            style={{position: 'relative', marginBottom: 30}}>
            <Slider
              style={{
                width: widthToDp(90),
                height: 40,
                position: 'relative',
                left: -10,
              }}
              minimumValue={min}
              maximumValue={max}
              // value={progress}
              step={25}
              stepLabel={[
                0,
                '0%',
                25,
                '25%',
                50,
                '50%',
                75,
                '75%',
                100,
                '100%',
              ]}
              minimumTrackTintColor="transparent"
              maximumTrackTintColor="transparent"
              thumbTintColor="#fff"
              onValueChange={val => {
                console.log(val, progress);
                setprogress(val);
                return true;
              }}
            />
            <View class="active-order-bar-bg" style={styles.sliderGradBar}>
              <LinearGradient
                class="intro-active-orders"
                colors={[
                  '#00F594ff',
                  '#00F594ff',
                  '#00F594ff',
                  '#02ABEEff',
                  '#00F594ff',
                ]}
                useAngle={true}
                angle={45}
                style={{
                  borderRadius: 10,
                  flexWrap: 'nowrap',
                  height: 8,
                  width: progress + 1 + '%',
                  // maxWidth: widthToDp(75),
                }}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}></LinearGradient>
            </View>
            <HundredPercentBar
              width={widthToDp(85)}
              style={{position: 'absolute', left: 0, top: 35}}
            />
          </View>
          {/* <Image source={require('../../assets/images/hundredPercentBar.svg')}/> */}
          <View
            style={{
              width: widthToDp(85),
              justifyContent: 'start',
              alignContent: 'center',
            }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const ShareByItems = () => {
  const [expanded, setExpanded] = useState(true);
  const [checked, setChecked] = React.useState(true);

  const SharedItems = [
    {
      name: 'Burger',
      price: '20',
    },
    {
      name: 'Burger',
      price: '20',
    },
    {
      name: 'Burger',
      price: '20',
    },
    {
      name: 'Burger',
      price: '20',
    },
  ];
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <BackgroundCard
          style={{width: '95%'}}
          linearBackStyle={{borderRadius: 24}}
          childrenStyle={{borderRadius: 24}}>
          <View style={styles.itemContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/images/profileImg.png')} />
              <Text style={styles.userName}>Hasan</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                // style={styles.review_btn}
                style={styles.itemDetail}
                onPress={() => {
                  setExpanded(!expanded);
                }}>
                <Text style={styles.price}>$25.19</Text>
                <Image
                  source={require('../../assets/images/chevron_down.png')}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {expanded && (
              <View style={{width: '100%'}}>
                {SharedItems.map((item, index) => (
                  <View>
                    <View style={styles.sharedItemContainer}>
                      <View style={styles.sharedItemContainerTwo}>
                        <View style={styles.productImgContainer}>
                          <Image
                            source={require('../../assets/images/burger_one.png')}
                            style={{width: 30, height: 30}}
                          />
                        </View>
                        <View>
                          <Text style={styles.userName}>Burger</Text>
                        </View>
                      </View>

                      <View style={styles.pricing}>
                        <Text style={styles.price}>$12.17</Text>
                        <CheckBox
                          checked={checked}
                          onPress={toggleCheckbox}
                          iconType="material-community"
                          checkedIcon="checkbox-outline"
                          uncheckedIcon={'checkbox-blank-outline'}
                          // style={{borderColor: 'green'}}
                          containerStyle={{
                            backgroundColor: 'transparent',
                          }}
                          checkedColor={Colors.GREEN}
                          uncheckedColor={Colors.GREEN}
                          // wrapperStyle={{backgroundColor: 'red'}}
                          // style
                        />
                      </View>
                    </View>
                  </View>
                ))}
                <View style={styles.selectAll}>
                  <Text style={styles.selectAllTxt}>Select All</Text>
                  <CheckBox
                    checked={checked}
                    onPress={toggleCheckbox}
                    iconType="material-community"
                    checkedIcon="checkbox-outline"
                    uncheckedIcon={'checkbox-blank-outline'}
                    containerStyle={{
                      backgroundColor: 'transparent',
                    }}
                    checkedColor={Colors.GREEN}
                    uncheckedColor={Colors.GREEN}
                  />
                </View>
              </View>
            )}
          </View>
        </BackgroundCard>
      </ScrollView>
    </View>
  );
};
const initialLayout = {width: Dimensions.get('window').width};

const SecondRoute = () => {
  const [nestedIndex, setNestedIndex] = useState(0);
  const [nestedRoutes] = useState([
    {key: 'firstNested', title: 'Equally'},
    {key: 'secondNested', title: 'By percent'},
    {key: 'thirdNested', title: 'items'},
  ]);

  // Define the scenes for the nested tab view
  const renderNestedScene = SceneMap({
    firstNested: ShareEqually,
    secondNested: ShareByPercent,
    thirdNested: ShareByItems,
  });

  // Define the tabBar for the nested tab view
  const renderNestedTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'transparent'}}
      style={{
        backgroundColor: 'transparent',
        marginTop: getPlatformSpecificValue(10, 0),
      }}
      renderLabel={({route, focused, color}) => (
        <LinearGradient
          colors={
            focused ? ['#00F69299', '#00A7F7FF'] : ['#FFFFFF22', '#FFFFFF22']
          }
          useAngle={true}
          angle={820}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.nestedtabBarButton}>
          <Text
            style={{
              color: focused ? Colors.BLACK : Colors.WHITE,
              fontFamily: fonts.URBANIST_SEMIBOLD,
              fontSize: screenToTextSize(4),
            }}>
            {route.title}
          </Text>
        </LinearGradient>
      )}
    />
  );
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <View style={styles.billContainer}>
        <LinearGradient
          colors={['#02ABEE6E', '#02ABEE8E', '#00F5946E']}
          style={styles.totalBillBox}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.circleGradient}>
            <Text style={styles.billTxt}>Total Bill</Text>
            <GradientText style={styles.amountTxt}>$100.88</GradientText>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#02ABEE4E', '#02ABEE8E', '#00A7F78D']}
          style={styles.yourShareBox}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View
            style={styles.circleGradient}
            // onPress={onPress}
          >
            <Text style={styles.billTxt}>Your Share</Text>

            <GradientText style={styles.amountTxt}>$25.88</GradientText>
          </View>
        </LinearGradient>
      </View>
      <View style={{alignItems: 'center'}}>
        <GradientText style={styles.shareABill}>Share A Bill</GradientText>
      </View>

      <TabView
        navigationState={{index: nestedIndex, routes: nestedRoutes}}
        renderScene={renderNestedScene}
        onIndexChange={setNestedIndex}
        initialLayout={initialLayout}
        renderTabBar={renderNestedTabBar}
      />
    </View>
  );
};

const renderScene = SceneMap({
  first: MyOrder,
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
    {key: 'second', title: 'All Orders'},
  ]);
  return (
    <View style={styles.container}>
      <BackgroundLayout />

      <HeaderModed
        headerStyle={{marginLeft: 15}}
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={styles.headerText}>Payment Option</Text>}
        slotRight={<></>}
      />
      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        style={{backgroundColor: 'transparent'}}
      />
      <Footer />
    </View>
  );
};

export default PaymentOption;
