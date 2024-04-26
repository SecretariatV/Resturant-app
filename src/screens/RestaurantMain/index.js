import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  TouchableHighlight,
  SafeAreaView,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BottomSheet} from '@rneui/themed';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../theme';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import SkipButton from '../../components/Buttons/SkipButton';
import HeaderModed from '../../components/HeaderModed';
import ActiveOrders from '../../assets/images/activeOrderBox.svg';
import ResturantCard from '../../components/RestaurantCard';
import BackButton from '../../components/NavButtons/BackButton';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import SearchModded from '../../components/SearchModded';
import ToggleButton from '../../components/ToggleButton';
import FadedSeparator from '../../components/FadedSeparator';
import GradientText from '../../components/GradientText';
import BackgroundLayout from '../../components/BackgroundLayout';

import scan_arrow from '../../assets/images/scan_arrow.png';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';

import {widthToDp} from '../../utils/Dimensions';
import {getPlatformSpecificValue} from '../../utils/helper';
import {setQrCode} from '../../redux/actions/auth';
import {fonts} from '../../theme/FontFamily';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import Skeleton from 'react-native-reanimated-skeleton';

const RestaurantMain = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const [selRest, setSelRest] = useState(0);
  const [restObj, setRestObj] = useState({});
  const [loadingRest, setLoadingRest] = useState(true);
  const restaurantCategories = ['All', 'Nearby', 'Trending'];

  const renderRestCats = ({item, index}) => (
    <TouchableOpacity
      style={{
        width: widthToDp(85) / 3,
        alignItems: 'center',
        marginHorizontal: 4,
        // backgroundColor: 'red',
      }}
      onPress={() => {
        console.log('tab change');
        // if (selRest !== index) {
        setLoadingRest(true);
        setRestObj(restOjb[index]);
        setSelRest(index);
        // }
      }}>
      <LinearGradient
        colors={
          index === selRest
            ? ['#00F69299', '#00A7F7FF']
            : ['transparent', 'transparent']
        }
        useAngle={true}
        angle={820}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{borderRadius: 14}}>
        <Text
          style={{
            color: index === selRest ? Colors.BLACK : Colors.WHITE,
            fontFamily: fonts.URBANIST_SEMIBOLD,
            borderWidth: index === selRest ? 1 : 1,
            borderColor: index === selRest ? Colors.BLACK : Colors.WHITE,
            borderRadius: index === selRest ? 14 : 14,
            fontSize: 16,
            paddingVertical: 2,
            paddingHorizontal: 10,
          }}>
          {item}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  const restaurants2 = [
    {
      id: '7',
      name: 'Second Restaurant',
      location: 'Location 2',
      cuisine: 'Mexican',
    },
    {
      id: '8',
      name: 'Another Restaurant',
      location: 'Location 3',
      cuisine: 'Italian',
    },
    {
      id: '9',
      name: 'New Restaurant',
      location: 'Location 4',
      cuisine: 'Chinese',
    },
    {
      id: '10',
      name: 'Best Tacos',
      location: 'Location 5',
      cuisine: 'Mexican',
    },
    {
      id: '11',
      name: 'Pasta Palace',
      location: 'Location 6',
      cuisine: 'Italian',
    },
    {
      id: '12',
      name: 'Dragon Delight',
      location: 'Location 7',
      cuisine: 'Chinese',
    },
    {
      id: '13',
      name: 'Tasty Tacos',
      location: 'Location 8',
      cuisine: 'Mexican',
    },
    {
      id: '14',
      name: 'Pizza Paradise',
      location: 'Location 9',
      cuisine: 'Italian',
    },
  ];

  const restaurants3 = [
    {
      id: '15',
      name: 'Spice City',
      location: 'Location 10',
      cuisine: 'Indian',
    },
    {
      id: '16',
      name: 'Sushi Spot',
      location: 'Location 11',
      cuisine: 'Japanese',
    },
    {
      id: '17',
      name: 'Greek Grill',
      location: 'Location 12',
      cuisine: 'Greek',
    },
    {
      id: '18',
      name: 'Curry Corner',
      location: 'Location 13',
      cuisine: 'Indian',
    },
    {
      id: '19',
      name: 'Ramen House',
      location: 'Location 14',
      cuisine: 'Japanese',
    },
    {
      id: '20',
      name: 'Mediterranean Medley',
      location: 'Location 15',
      cuisine: 'Greek',
    },
    {
      id: '21',
      name: 'Tandoori Time',
      location: 'Location 16',
      cuisine: 'Indian',
    },
    {
      id: '22',
      name: 'Tempura Heaven',
      location: 'Location 17',
      cuisine: 'Japanese',
    },
  ];

  const restaurants4 = [
    {
      id: '23',
      name: 'Thai Temptation',
      location: 'Location 18',
      cuisine: 'Thai',
    },
    {
      id: '24',
      name: 'French Feast',
      location: 'Location 19',
      cuisine: 'French',
    },
    {
      id: '25',
      name: 'Spanish Sensation',
      location: 'Location 20',
      cuisine: 'Spanish',
    },
    {
      id: '26',
      name: 'Taco Time',
      location: 'Location 21',
      cuisine: 'Mexican',
    },
    {
      id: '27',
      name: 'Pasta Palace',
      location: 'Location 22',
      cuisine: 'Italian',
    },
    {
      id: '28',
      name: 'Chinese Charm',
      location: 'Location 23',
      cuisine: 'Chinese',
    },
    {
      id: '29',
      name: 'Indian Indulgence',
      location: 'Location 24',
      cuisine: 'Indian',
    },
    {
      id: '30',
      name: 'Japanese Journey',
      location: 'Location 25',
      cuisine: 'Japanese',
    },
  ];

  const restOjb = [restaurants2, restaurants3, restaurants4];

  useEffect(() => {
    dispatch(setQrCode(false));
    setRestObj(restOjb[0]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoadingRest(false);
    }, 1000);
  }, [loadingRest]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadingRest(false);
  //   }, 1000);
  // }, []);

  const handleAboutToggle = () => {
    return false;
  };

  const renderItemSk = ({item}) => (
    <Skeleton
      isLoading={loadingRest}
      containerStyle={{flex: 1, flexDirection: 'row'}}
      boneColor="#ccc4"
      animationType="pulse"
      highlightColor="#ccc2"
      layout={[
        {
          borderRadius: 12,
          height: 80,
          marginBottom: 16,
          width: 80,
          marginLeft: 10,
          marginTop: 15,
        },
        {
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'center',
          width: widthToDp(70),
          children: [
            {
              flexDirection: 'column',
              justifyContent: 'flex-start',
              height: '100%',
              width: '100%',
              children: [
                {
                  borderRadius: 16,
                  height: 15,
                  width: widthToDp(60),
                  marginBottom: 10,
                  marginLeft: 5,
                  marginTop: 20,
                },
                {
                  borderRadius: 16,
                  height: 15,
                  marginLeft: 6,
                  marginBottom: 10,
                  width: widthToDp(35),
                },
                {
                  borderRadius: 16,
                  height: 15,
                  marginLeft: 6,
                  width: widthToDp(46),
                },
              ],
            },
          ],
        },
      ]}>
      <ResturantCard
        name={item.name}
        location={item.location}
        cuisine={item.cuisine}
      />
    </Skeleton>
  );

  // const routes = restaurantCategories.map((category, idx) => ({
  //   key: `tab${idx}`,
  //   title: category,
  // }));
  // const renderScene = SceneMap(
  //   routes.reduce((scenes, route) => {
  //     scenes[route.key] = () => (
  //       <FlatList
  //         showsVerticalScrollIndicator={false}
  //         style={styles.listStyle}
  //         data={restaurants}
  //         renderItem={renderItem}
  //         keyExtractor={item => item.id} // Key extractor for each item
  //       />
  //     );
  //     return scenes;
  //   }, {}),
  // );

  // const layout = useWindowDimensions();

  // const [index, setIndex] = useState(0);

  // const renderTabBar = props => (
  //   <TabBar
  //     {...props}
  //     scrollEnabled={true}
  //     tabStyle={{width: 'auto'}}
  //     indicatorStyle={{backgroundColor: 'transparent'}}
  //     style={{backgroundColor: 'transparent'}}
  //     renderLabel={({route, focused}) => (
  //       <LinearGradient
  //         colors={
  //           focused
  //             ? ['#00F69299', '#00A7F7FF']
  //             : ['transparent', 'transparent']
  //         }
  //         useAngle={true}
  //         angle={820}
  //         start={{x: 0, y: 0.5}}
  //         end={{x: 1, y: 0.5}}
  //         style={{borderRadius: 24}}>
  //         <Text
  //           style={{
  //             color: focused ? Colors.BLACK : Colors.WHITE,
  //             fontFamily: fonts.URBANIST_SEMIBOLD,
  //             fontSize: 16,
  //             paddingVertical: 2,
  //             paddingHorizontal: 10,
  //           }}>
  //           {route.title}
  //         </Text>
  //       </LinearGradient>
  //     )}
  //   />
  // );

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        onBackdropPress={!modalVisible}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          // Alert.alert('Modal has been closed.');
        }}>
        <Pressable
          style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', flex: 1}}
          onPress={() => setModalVisible(false)}>
          <TouchableHighlight
            style={{alignItems: 'flex-end', paddingTop: widthToDp(15)}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <SkipButton showCross={true} showValetImg={false} />
          </TouchableHighlight>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <GradientText style={styles.customizeTxt}>Scan Here</GradientText>
            <Text
              style={{
                color: Colors.WHITE,
                // margin: 30,
                marginTop: widthToDp(5),
                width: '70%',
                textAlign: 'center',
                fontFamily: fonts.URBANIST_MEDIUM,
              }}>
              Scan the shareabill QR code on the table to start ordering.
            </Text>

            <Image source={scan_arrow} style={{width: 200, height: 200}} />
            {/* </View> */}
          </View>
        </Pressable>
      </Modal>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<></>}
        slotRight={<></>}
      />
      <View class="intro-header-container" style={styles.introHeader}>
        <View class="intro-header-wrapper" style={styles.introHeader.wrapper}>
          <View
            class="intro-user-name"
            style={styles.introHeader.userNameContainer}>
            <Text style={styles.introHeader.userName}>Hey</Text>

            <GradientText style={styles.gradientBoxText}>
              Mark Anderson
            </GradientText>
          </View>

          <LinearGradient
            class="intro-active-orders"
            colors={['#01322B44', '#00F59444', '#00F59444', '#02ABEE44']}
            useAngle={true}
            angle={45}
            style={{borderRadius: 10, flexWrap: 'wrap'}}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <View
              style={[
                styles.gradientBoxContainer,
                styles.activeOrderBarContainer,
              ]}>
              <ActiveOrders
                width={getPlatformSpecificValue(30, 20)}
                height={getPlatformSpecificValue(30, 20)}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('TrackOrder')}
                class="active-order-text-and-bar"
                style={styles.activeOrderBar}>
                <Text style={styles.activeOrderText}>Active Order</Text>
                <View
                  class="active-order-bar-bg"
                  style={styles.activeOrderBarbg}>
                  <LinearGradient
                    class="intro-active-orders"
                    colors={[
                      '#01322Bff',
                      '#00F594ff',
                      '#00F594ff',
                      '#02ABEEff',
                    ]}
                    useAngle={true}
                    angle={45}
                    style={{
                      borderRadius: 10,
                      flexWrap: 'nowrap',
                      height: 2,
                      width: '45%',
                    }}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}></LinearGradient>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>

      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <Image
          className="restaurant-filter-bg"
          style={styles.restaurantFilterBg}
          source={require('../../assets/images/backgroundTwo.png')}
        />
        <ScrollView
          className="restaurant-filter-container"
          style={styles.restaurantFilterContainer}>
          <View style={[styles.filterSection, styles.filterHeading]}>
            <Text style={styles.filterHeadingText}>Filter</Text>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <CloseFilterBtn width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View class="personal-preference" style={styles.filterSection}>
            <Text style={styles.filterHeadingText}>
              Apply Personal Preference
            </Text>
          </View>
          <View class="cuisine-type">
            <Text style={styles.filterHeadingText}>Cuisine Type:</Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.cuisineTypeBtnsContainerStyle}
              style={styles.cuisineTypeBtns}>
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
            </ScrollView>
            <FadedSeparator />
          </View>
          <View class="allergies">
            <Text style={styles.filterHeadingText}>Allergies:</Text>
            <View style={styles.cuisineTypeBtns}>
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
            </View>
            <View class="personal-preference" style={styles.filterSection}>
              <Text style={styles.filterHeadingText}>
                Apply Personal Preference
              </Text>
            </View>
            <View class="cuisine-type">
              <Text style={styles.filterHeadingText}>Cuisine Type:</Text>
              <ScrollView
                horizontal
                contentContainerStyle={styles.cuisineTypeBtnsContainerStyle}
                style={styles.cuisineTypeBtns}>
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
              </ScrollView>
              <FadedSeparator />
            </View>
            <View class="allergies">
              <Text style={styles.filterHeadingText}>Allergies:</Text>
              <View style={styles.cuisineTypeBtns}>
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
              </View>
              <FadedSeparator />
            </View>
            <View class="allergies">
              <Text style={styles.filterHeadingText}>Allergies:</Text>
              <View style={styles.cuisineTypeBtns}>
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
              </View>
              <FadedSeparator />
            </View>
            <View class="allergies">
              <Text style={styles.filterHeadingText}>Allergies:</Text>
              <View style={styles.cuisineTypeBtns}>
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
              </View>
              <FadedSeparator />
            </View>
            <View class="price-range" style={styles.priceRange}>
              <View style={styles.priceRangeLabel}>
                <Text>Price Range:</Text>
                <Text>${sliderValue}</Text>
              </View>
              <View style={styles.priceRangeSlider}></View>
            </View>
          </View>
        </ScrollView>
      </BottomSheet>
      <SearchModded isVisible={isVisible} setIsVisible={setIsVisible} />

      {/* <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      /> */}
      <View class="restuarant-list">
        <FlatList
          horizontal={true}
          showsVerticalScrollIndicator={false}
          style={styles.listStyle}
          data={restaurantCategories}
          renderItem={renderRestCats}
          keyExtractor={item => item.id} // Key extractor for each item
        />
      </View>

      <View class="restaurant-list-item" style={{marginBottom: 230}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.listStyle}
          data={restObj}
          renderItem={renderItemSk}
          keyExtractor={item => item.id} // Key extractor for each item
        />
      </View>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={item => item.id} // Key extractor for each item
      /> */}
    </View>
  );
};

export default RestaurantMain;
