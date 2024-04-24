import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
// components
import BackgroundLayout from '../../components/BackgroundLayout';

import Counter from '../../components/Counter';

import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import HeaderModed from '../../components/HeaderModed';

import Star from '../../assets/images/ratingStar.svg';
//utils
import {dressCode} from '../../utils/demodata';
import {height, heightToDp, widthToDp} from '../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';
import {getPlatformSpecificValue, screenToTextSize} from '../../utils/helper';
// import {View} from '@candlefinance/blur-view';
import {Allergies} from '../../utils/demodata';
import {useDispatch, useSelector} from 'react-redux';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import FilterButton from '../../components/NavButtons/FilterButton';
import SearchButton from '../../components/NavButtons/SearchButton';

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [itemListType, setItemListType] = useState('top');
  const qr = useSelector(state => state.auth.qr);

  useEffect(() => {
    console.log(qr, 'restaurant menu user');
    if (qr) {
    }
  }, [qr]);
  console.log(qr, 'userrrrr');
  useEffect(() => {
    // return () => {
    //   dispatch(setQrCode(false));
    // };
  }, []);
  const cartData = [
    {
      productName: 'Burger',
      price: '50',
    },
    {
      productName: 'Shawarma',
      price: '50',
    },
    {
      productName: 'Onion',
      price: '50',
    },
    {
      productName: 'Shawarma',
      price: '50',
    },
    {
      productName: 'Onion',
      price: '50',
    },
    {
      productName: 'Shawarma',
      price: '50',
    },
    {
      productName: 'Onion',
      price: '50',
    },
  ];
  const categories = [
    {
      name: 'Breakfast',
      slug: 'breakfast',
      items: dressCode,
    },
    {
      name: 'Lunch',
      slug: 'lunch',
      items: dressCode,
    },
    {
      name: 'Main Course',
      slug: 'main_course',
      items: dressCode,
    },
  ];

  let activeColors = ['#00A7F7', '#00FC92'];
  let inActiveColors = ['#00A7F700', '#00FC9200'];

  const handleItemType = Itype => {
    setItemListType(Itype);
  };

  const handlePress = () => {
    navigation.navigate('MenuDetail');
  };

  const navMenu = () => {
    navigation.navigate('HomeScreens');
  };

  const routes = categories.map((category, idx) => ({
    key: `tab${idx}`,
    title: category.slug,
  }));

  console.log('dfdf', cartData);
  const renderScene = SceneMap(
    routes.reduce((scenes, route) => {
      console.log(scenes, route);
      scenes[route.key] = () => (
        <FlatList
          style={styles.categoryListStyle}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          data={cartData}
          keyExtractor={(item, index) => item.slug + index.toString()}
          renderItem={({itemRen, index}) => (
            <View
              key={index}
              className="vertical-product-list-item"
              style={styles.verticalPrdListItem}>
              <View
                className="vertical-product-list-left-cont"
                style={styles.verticalPrdListItem.leftCont}>
                <View
                  className="product-name-cont"
                  style={styles.verticalPrdListItem.prdNameCont}>
                  <Text
                    className="product-name"
                    style={styles.verticalPrdListItem.prdName}>
                    Burger
                  </Text>
                  <View
                    className="product-rating-cont"
                    style={styles.verticalPrdListItem.prdRatingCont}>
                    <Text
                      className="product-rating"
                      style={styles.verticalPrdListItem.prdRating}>
                      4.5
                    </Text>
                    <Star
                      width={20}
                      style={styles.verticalPrdListItem.prdRatingStar}
                    />
                  </View>
                </View>
                <View
                  className="product-allergies-cont"
                  style={styles.verticalPrdListItem.prdAllergiesCont}>
                  {Allergies.map((itemAl, index) => (
                    <>
                      <View
                        key={index}
                        className="allergies-bg"
                        style={styles.verticalPrdListItem.prdAllergiesBg}>
                        {itemAl.imgUrl}
                      </View>
                    </>
                  ))}
                </View>
                <View
                  className="product-pricing-cont"
                  style={styles.verticalPrdListItem.prdPricingCont}>
                  <Text
                    style={[
                      styles.price,
                      {
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                        marginRight: 10,
                        color: '#F7F7F899',
                      },
                    ]}>
                    $100
                  </Text>

                  <Text style={styles.price}>$100</Text>
                </View>
              </View>
              <View
                className="vertical-product-list-right-cont"
                style={styles.verticalPrdListItem.rightCont}>
                <View
                  className="menu-item-large-imgCont"
                  style={styles.verticalPrdListItem.imgCont}>
                  <Image
                    style={styles.verticalPrdListItem.image}
                    source={require('../../assets/images/burger_one.png')}
                  />
                </View>
              </View>
            </View>
          )}
        />
      );
      return scenes;
    }, {}),
  );

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled={true}
      tabStyle={{width: 'auto'}}
      indicatorStyle={{backgroundColor: 'transparent'}}
      style={{backgroundColor: 'transparent'}}
      renderLabel={({route, focused, index}) => (
        <LinearGradient
          key={index}
          colors={
            focused
              ? ['#00F69299', '#00A7F7FF']
              : ['transparent', 'transparent']
          }
          useAngle={true}
          angle={820}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={{borderRadius: 24}}>
          <Text
            style={{
              color: focused ? Colors.BLACK : Colors.WHITE,
              fontFamily: fonts.URBANIST_SEMIBOLD,
              fontSize: 16,
              paddingVertical: 2,
              paddingHorizontal: 10,
            }}>
            {route.title}
          </Text>
        </LinearGradient>
      )}
    />
  );
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BackgroundLayout />
        <ScrollView stickyHeaderIndices={[2]} style={{paddingBottom: 20}}>
          <HeaderModed
            slotLeft={<HamBurgerButton />}
            slotCenter={<Text style={styles.navbarPageTitle}>Menu</Text>}
            slotRight={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SearchButton />
                <FilterButton />
              </View>
            }
          />
          <View className="user-wise-menu" style={styles.userWiseContainer}>
            <View className="category-container" style={styles.verticalTabs}>
              <View className="useless-wrapper" style={styles.uselessWrapper}>
                <TouchableOpacity
                  style={styles.verticalTabBtns1}
                  onPress={() => handleItemType('top')}>
                  <LinearGradient
                    colors={
                      itemListType === 'top' ? activeColors : inActiveColors
                    }
                    useAngle
                    angle={300}
                    style={styles.verticalTabBtnGrad}
                    start={{x: 1, y: 0.5}}
                    end={{x: 1, y: 0.5}}>
                    <Text
                      style={
                        itemListType === 'top'
                          ? styles.categoryWiseTabItemActive
                          : styles.categoryWiseTabItem
                      }>
                      Top Picks
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.verticalTabBtns2}
                  onPress={() => handleItemType('prev')}>
                  <LinearGradient
                    colors={
                      itemListType === 'prev' ? activeColors : inActiveColors
                    }
                    useAngle
                    angle={300}
                    style={styles.verticalTabBtnGrad}
                    start={{x: 1, y: 0.5}}
                    end={{x: 1, y: 0.5}}>
                    <Text
                      style={
                        itemListType === 'prev'
                          ? styles.categoryWiseTabItemActive
                          : styles.categoryWiseTabItem
                      }>
                      Previously Ordered
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flatlist-wrapper" style={styles.flatlistWrapper}>
              {itemListType === 'top' && (
                <FlatList
                  data={dressCode}
                  style={styles.horizontalListStyle}
                  keyExtractor={(item, index) => item.id + index.toString()}
                  horizontal
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      key={index}
                      onPress={handlePress}
                      className="menu-item-smallbox"
                      style={styles.menuItemSmallbox}>
                      <View
                        className="menu-item-smallbox-imgCont"
                        style={styles.menuItemSmallbox.imgCont}>
                        <Image
                          style={styles.menuItemSmallbox.image}
                          source={require('../../assets/images/burger_one.png')}
                        />
                      </View>
                      <View style={styles.menuItemSmallbox.nameCont}>
                        <Text
                          className="menu-item-smallbox-name"
                          style={styles.menuItemSmallbox.itemName}>
                          Burger 1
                        </Text>
                        <View
                          className="menu-item-smallbox-nameCont"
                          style={styles.menuItemSmallbox.nameContChild}>
                          <Text
                            className="menu-item-smallbox-name"
                            style={styles.menuItemSmallbox.itemPrice}>
                            100$
                          </Text>
                          <View
                            className="menu-item-smallbox-ratingCont"
                            style={styles.menuItemSmallbox.ratingCont}>
                            <Star
                              style={styles.menuItemSmallbox.ratingIcon}
                              width={30}
                            />
                            <Text style={styles.menuItemSmallbox.rating}>
                              4.5
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              )}
              {itemListType === 'prev' && (
                <FlatList
                  data={dressCode}
                  style={styles.horizontalListStyle}
                  keyExtractor={(item, index) => item.id + index.toString()}
                  horizontal
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      key={index}
                      onPress={handlePress}
                      className="menu-item-smallbox"
                      style={styles.menuItemSmallbox}>
                      <View
                        className="menu-item-smallbox-imgCont"
                        style={styles.menuItemSmallbox.imgCont}>
                        <Image
                          style={styles.menuItemSmallbox.image}
                          source={require('../../assets/images/burger_one.png')}
                        />
                      </View>
                      <View style={styles.menuItemSmallbox.nameCont}>
                        <Text
                          className="menu-item-smallbox-name"
                          style={styles.menuItemSmallbox.itemName}>
                          Burger 2
                        </Text>
                        <View
                          className="menu-item-smallbox-nameCont"
                          style={styles.menuItemSmallbox.nameContChild}>
                          <Text
                            className="menu-item-smallbox-name"
                            style={styles.menuItemSmallbox.itemPrice}>
                            100$
                          </Text>
                          <View
                            className="menu-item-smallbox-ratingCont"
                            style={styles.menuItemSmallbox.ratingCont}>
                            <Star
                              style={styles.menuItemSmallbox.ratingIcon}
                              width={30}
                            />
                            <Text style={styles.menuItemSmallbox.rating}>
                              4.5
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
          </View>
          {/* <BlurView
            blurType="ultraThinMaterialDark"
            overlayColor="#ffffff00"
            reducedTransparencyFallbackColor="#f00"
            downsampleFactor={25}>
           
          </BlurView> */}
          <LinearGradient
            colors={activeColors}
            useAngle
            angle={300}
            style={{width: widthToDp(100)}}
            start={{x: 1, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <Text style={styles.categoryTitle}>Categories</Text>
          </LinearGradient>

          <View
            className="items-by-category"
            style={styles.categoryWiseContainer}>
            {/* <TabView
              navigationState={{index, routes}}
              renderTabBar={renderTabBar}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
            /> */}
            <FlatList
              data={cartData}
              style={styles.horizontalListStyle}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              keyExtractor={(item, index) => item.id + index.toString()}
              renderItem={({item, index}) => (
                <View
                  key={index}
                  className="vertical-product-list-item"
                  style={styles.verticalPrdListItem}>
                  <View
                    className="vertical-product-list-left-cont"
                    style={styles.verticalPrdListItem.leftCont}>
                    <View
                      className="product-name-cont"
                      style={styles.verticalPrdListItem.prdNameCont}>
                      <Text
                        className="product-name"
                        style={styles.verticalPrdListItem.prdName}>
                        Burger
                      </Text>
                      <View
                        className="product-rating-cont"
                        style={styles.verticalPrdListItem.prdRatingCont}>
                        <Text
                          className="product-rating"
                          style={styles.verticalPrdListItem.prdRating}>
                          4.5
                        </Text>
                        <Star
                          width={20}
                          style={styles.verticalPrdListItem.prdRatingStar}
                        />
                      </View>
                    </View>
                    <View
                      className="product-allergies-cont"
                      style={styles.verticalPrdListItem.prdAllergiesCont}>
                      {Allergies.map((item, index) => (
                        <>
                          <View
                            key={index}
                            className="allergies-bg"
                            style={styles.verticalPrdListItem.prdAllergiesBg}>
                            {item.imgUrl}
                          </View>
                        </>
                      ))}
                    </View>
                    <View
                      className="product-pricing-cont"
                      style={styles.verticalPrdListItem.prdPricingCont}>
                      <Text
                        style={[
                          styles.price,
                          {
                            textDecorationLine: 'line-through',
                            textDecorationStyle: 'solid',
                            marginRight: 10,
                            color: '#F7F7F899',
                          },
                        ]}>
                        $100
                      </Text>

                      <Text style={styles.price}>$100</Text>
                    </View>
                  </View>
                  <View
                    className="vertical-product-list-right-cont"
                    style={styles.verticalPrdListItem.rightCont}>
                    <View
                      className="menu-item-large-imgCont"
                      style={styles.verticalPrdListItem.imgCont}>
                      <Image
                        style={styles.verticalPrdListItem.image}
                        source={require('../../assets/images/burger_one.png')}
                      />
                    </View>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Counter
                        vertical
                        counterTextStyle={{width: widthToDp(25), margin: 10}}
                        minusContainerStyle={{
                          height: heightToDp(7),
                          width: widthToDp(7),
                          borderRadius: 8,
                        }}
                        plusContainerStyle={{
                          height: heightToDp(6),
                          width: widthToDp(6),
                          borderRadius: 8,
                          backgroundColor: Colors.GREEN,
                        }}
                        // counterTextStyle={{margin: 15}}
                        minusStyle={{width: 10, height: 2}}
                        plusStyle={{width: 10, height: 10}}
                      />
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
      {/* <Footer /> */}
      {/* <Footer /> */}
    </SafeAreaProvider>
  );
};

export default RestaurantMenu;
