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

import ShareByPercentBox from '../../components/ShareByPercentBox/index.js';
import {useSharedValue, withDecay} from 'react-native-reanimated';
import Slider from '@react-native-community/slider';
import {
  getPlatformSpecificValue,
  screenToTextSize,
} from '../../utils/helper.js';
import StepSlider from '../../components/StepSlider/index.js';

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
        fontSize: 20,
      }}>
      Each Guest Will Pay
    </Text>

    <GradientText
      style={{
        marginTop: 10,
        fontSize: 50,
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

  const userAvatar = require('../../assets/images/profileImg.png');
  const [dummyData, setDummyData] = useState({
    totalBill: 250.68,
    guests: [
      {
        name: 'Hasan',
        image: userAvatar,
        amount: 0,
        percent: 0,
      },
      {
        name: 'Guest 1',
        image: userAvatar,
        amount: 0,
        percent: 0,
      },
      {
        name: 'Guest 2',
        image: userAvatar,
        amount: 0,
        percent: 0,
      },
      {
        name: 'Guest 3',
        image: userAvatar,
        amount: 0,
        percent: 0,
      },
    ],
  });

  const updateGuestPercentage = (index, percent, amount) => {
    setDummyData(prevData => {
      const newGuests = [...prevData.guests];
      newGuests[index] = {
        ...newGuests[index],
        percent,
        amount,
      };
      const updatedData = {
        ...prevData,
        guests: newGuests,
      };
      return updatedData;
    });
  };
  // const progress = useSharedValue(30);
  // const min = useSharedValue(0);
  // const max = useSharedValue(100);
  return (
    <ScrollView
      style={{flex: 1, marginBottom: 70}}
      contentContainerStyle={{justifyContent: 'start'}}>
      {dummyData.guests.map((guest, index) => (
        <ShareByPercentBox
          key={index}
          userobj={guest}
          amount={guest.amount}
          percent={guest.percent}
          totalBill={dummyData.totalBill}
          onUpdate={(percent, amount) =>
            updateGuestPercentage(index, percent, amount)
          }
        />
      ))}
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
          style={{width: widthToDp(95)}}
          linearBackStyle={{borderRadius: 24}}
          childrenStyle={{
            borderRadius: 24,
            paddingTop: 10,
          }}>
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
                <Text style={styles.firstPrice}>$25.19</Text>
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 15,
                  }}>
                  <View style={{width: widthToDp(12)}}>
                    <Text style={styles.mainHeadings}>Item</Text>
                  </View>
                  <Text style={styles.mainHeadings}>Quantity</Text>

                  <Text style={styles.mainHeadings}>Price</Text>
                  <Text style={styles.mainHeadings}>Total</Text>
                </View>
                <View style={{marginBottom: 10}}>
                  {SharedItems.map((item, index) => (
                    <View key={index}>
                      <View style={styles.sharedItemContainer}>
                        <View style={styles.sharedItemContainerTwo}>
                          <View style={styles.pricing}>
                            <CheckBox
                              checked={checked}
                              onPress={toggleCheckbox}
                              iconType="material-community"
                              checkedIcon="checkbox-outline"
                              uncheckedIcon={'checkbox-blank-outline'}
                              // style={{borderColor: 'green'}}
                              containerStyle={{
                                padding: 0,
                                margin: 0,
                                backgroundColor: 'transparent',
                                // margin: 0,
                              }}
                              // style={{width: 20, height: 20}}
                              checkedColor={Colors.GREEN}
                              uncheckedColor={Colors.GREEN}
                              // wrapperStyle={{backgroundColor: 'red'}}
                              // style
                            />
                            <Text style={styles.itemProduct}>Burger</Text>
                          </View>
                          <View
                            style={{
                              width: 70,

                              alignItems: 'center',
                            }}>
                            <Text style={styles.quantity}>10</Text>
                          </View>

                          <View
                            style={{
                              width: 40,
                              alignItems: 'center',
                            }}>
                            <Text style={styles.price}>$300</Text>
                          </View>

                          <View
                            style={{
                              width: 60,
                              alignItems: 'center',
                            }}>
                            <Text style={styles.totalPrice}>$3000</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
                {/* <View style={styles.selectAll}>
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
                </View> */}
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
              fontFamily: fonts.URBANIST_MEDIUM,
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

console.log(renderScene);
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
            fontFamily: fonts.URBANIST_MEDIUM,
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
        //headerStyle={{marginLeft: getPlatformSpecificValue(15, 0)}}
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
      {/* <Footer /> */}
    </View>
  );
};

export default PaymentOption;
