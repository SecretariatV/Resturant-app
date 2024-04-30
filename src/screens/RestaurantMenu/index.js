import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
  ImageBackground,
  useWindowDimensions,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {BlurView, VibrancyView} from '@react-native-community/blur';
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
import Skeleton from 'react-native-reanimated-skeleton';

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [itemListType, setItemListType] = useState('top');

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [itemsObj, setItemsObj] = useState({});
  const [loadingItems, setLoadingItems] = useState(true);

  const qr = useSelector(state => state.auth.qr);

  const categories = ['Breakfast', 'Lunch', 'Main Course Formula'];

  const renderItemCategories = ({item, index}) => (
    <TouchableOpacity
      style={{
        minWidth: widthToDp(85) / 3,
        alignItems: 'center',
        marginHorizontal: 4,
      }}
      onPress={() => {
        console.log('tab change');
        // if (selRest !== index) {
        scrollToIndex(index);
        setLoadingItems(true);
        setItemsObj(foodItemsObj[index]);
        setSelectedCategory(index);
        // }
      }}>
      <LinearGradient
        colors={
          index === selectedCategory
            ? ['#00F69299', '#00A7F7FF']
            : ['transparent', 'transparent']
        }
        useAngle={true}
        angle={820}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{
          borderRadius: 14,
          width: '100%',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: index === selectedCategory ? Colors.BLACK : Colors.WHITE,
          // borderRadius: 14,
        }}>
        <Text
          style={{
            color: index === selectedCategory ? Colors.BLACK : Colors.WHITE,
            fontFamily: fonts.URBANIST_MEDIUM,
            marginBottom: 5,
            fontSize: 16,
            paddingVertical: 2,
            paddingHorizontal: 10,
          }}>
          {item}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  let breakfastPrd = [
    {
      name: 'Egg McMuffin',
      regPrice: 80,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['eggs', 'dairy'],
      rating: 4.3,
    },
    {
      name: 'Pancakes',
      regPrice: 70,
      salePrice: 60,
      onSale: true,
      saleType: 'discount',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['gluten', 'dairy'],
      rating: 4.5,
    },
    {
      name: 'French Toast',
      regPrice: 75,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['gluten', 'dairy'],
      rating: 4.2,
    },
    {
      name: 'Breakfast Burrito',
      regPrice: 90,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['eggs', 'dairy'],
      rating: 4.4,
    },
    {
      name: 'Omelette',
      regPrice: 85,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['eggs'],
      rating: 4.6,
    },
    {
      name: 'Bagel with Cream ',
      regPrice: 60,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['gluten', 'dairy'],
      rating: 4.1,
    },
    {
      name: 'Fruit Bowl',
      regPrice: 50,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['none'],
      rating: 4.7,
    },
    {
      name: 'Granola Parfait',
      regPrice: 65,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'dairy'],
      rating: 4.2,
    },
    {
      name: 'Smoothie',
      regPrice: 70,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['none'],
      rating: 4.3,
    },
    {
      name: 'Bacon and Eggs',
      regPrice: 95,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['eggs'],
      rating: 4.4,
    },
  ];

  let lunchPrd = [
    {
      name: 'Chicken Burger',
      regPrice: 100,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'fish', 'eggs', 'onion'],
      rating: 4,
    },
    {
      name: 'Beef Burger',
      regPrice: 120,
      salePrice: 100,
      onSale: true,
      saleType: 'discount',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'gluten'],
      rating: 4.5,
    },
    {
      name: 'Cheeseburger',
      regPrice: 110,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'dairy'],
      rating: 4.2,
    },
    {
      name: 'Fried Chicken',
      regPrice: 150,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['gluten'],
      rating: 4.3,
    },
    {
      name: 'Fish Sandwich',
      regPrice: 130,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'fish', 'gluten'],
      rating: 4.1,
    },
    {
      name: 'Chicken Nuggets',
      regPrice: 90,
      salePrice: 80,
      onSale: true,
      saleType: 'discount',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'eggs'],
      rating: 4.4,
    },
    {
      name: 'Buffalo Wings',
      regPrice: 140,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'gluten'],
      rating: 4.6,
    },
    {
      name: 'Onion Rings',
      regPrice: 80,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'gluten'],
      rating: 4,
    },
    {
      name: 'Grilled Chicken Sandwich',
      regPrice: 110,
      salePrice: 100,
      onSale: true,
      saleType: 'discount',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts'],
      rating: 4.2,
    },
    {
      name: 'Mozzarella Sticks',
      regPrice: 95,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'dairy', 'gluten'],
      rating: 4.3,
    },
  ];

  let dinnerPrd = [
    {
      name: 'Spaghetti and Meatballs',
      regPrice: 120,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['gluten'],
      rating: 4.5,
    },
    {
      name: 'Cheeseburger',
      regPrice: 100,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['nuts', 'dairy'],
      rating: 4.2,
    },
    {
      name: 'Grilled Salmon',
      regPrice: 150,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['fish'],
      rating: 4.6,
    },
    {
      name: 'Steak',
      regPrice: 160,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['none'],
      rating: 4.7,
    },
    {
      name: 'Chicken Alfredo',
      regPrice: 130,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['gluten', 'dairy'],
      rating: 4.4,
    },
    {
      name: 'Vegetable Stir Fry',
      regPrice: 110,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['none'],
      rating: 4.3,
    },
    {
      name: 'Pizza',
      regPrice: 100,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['gluten', 'dairy'],
      rating: 4.1,
    },
    {
      name: 'Tacos',
      regPrice: 90,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['gluten'],
      rating: 4,
    },
    {
      name: 'Sushi',
      regPrice: 140,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['fish'],
      rating: 4.6,
    },
    {
      name: 'Vegetarian Lasagna',
      regPrice: 110,
      salePrice: null,
      onSale: false,
      saleType: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nibh vel dui cursus',
      allergies: ['gluten', 'dairy'],
      rating: 4.2,
    },
  ];

  const foodItemsObj = [breakfastPrd, lunchPrd, dinnerPrd];

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
    setItemsObj(foodItemsObj[0]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoadingItems(false);
    }, 1000);
  }, [loadingItems]);

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

  const renderItemSk = ({item}) => (
    <Skeleton
      isLoading={loadingItems}
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
      <View
        key={index}
        className="vertical-product-list-item"
        style={styles.verticalPrdListItem}>
        <View
          className="vertical-product-list-left-cont"
          style={styles.verticalPrdListItem.leftCont}>
          <View
            class="rating-with-allergies"
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'orange',
              // height: 50,
              // justifyContent

              // flex: 1,
            }}>
            <View
              className="menu-item-smallbox-ratingCont"
              style={[styles.menuItemSmallbox.ratingCont, {marginLeft: 5}]}>
              <Star style={styles.menuItemSmallbox.ratingIcon} width={30} />
              <Text style={styles.menuItemSmallbox.rating}>{item.rating}</Text>
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
          </View>
          <View
            className="product-name-cont"
            style={styles.verticalPrdListItem.prdNameCont}>
            <View style={{width: widthToDp(80), marginTop: 5}}>
              <Text
                className="product-name"
                style={styles.verticalPrdListItem.prdName}>
                {item.name}
              </Text>
              <Text
                className="product-desc"
                style={styles.verticalPrdListItem.prdDesc}>
                {item.description}
              </Text>
            </View>
          </View>

          <View
            className="product-pricing-cont"
            style={styles.verticalPrdListItem.prdPricingCont}>
            <Text style={styles.price}>${item.regPrice}</Text>
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
    </Skeleton>
  );

  let activeColors = ['#00A7F7', '#00FC92'];
  // let activeColors = ['transparent', 'transparent'];
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

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const scrollToIndex = index => {
    flatListRef.current.scrollToIndex({animated: true, index});
  };
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BackgroundLayout />
        {Platform.OS === 'ios' && (
          // <BlurView
          //   blurType="ultraThinMaterialDark"
          //   overlayColor="#ffffff00"
          //   reducedTransparencyFallbackColor="#f00"
          //   downsampleFactor={25}
          //   style={{height: 35}}></BlurView>
          <View style={{height: 35, backgroundColor: '#060015'}}></View>
        )}
        <ScrollView stickyHeaderIndices={[2]} style={{paddingBottom: 20}}>
          <HeaderModed
            headerStyle={{
              marginTop: Platform.OS === 'ios' ? heightToDp(2) : 10,
            }}
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
                            $100
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
          <View class="category-tab-header" style={{}}>
            <LinearGradient
              colors={activeColors}
              useAngle
              angle={300}
              style={{width: widthToDp(100)}}
              start={{x: 1, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <Text style={styles.categoryTitle}>Categories</Text>
            </LinearGradient>

            <BlurView
              blurType="ultraThinMaterialDark"
              overlayColor="#ffffff00"
              reducedTransparencyFallbackColor="#f00"
              downsampleFactor={25}
              class="restaurant-item-categories"
              style={{
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ref={flatListRef}
                style={styles.listStyle}
                data={categories}
                renderItem={renderItemCategories}
                keyExtractor={item => item.id} // Key extractor for each item
              />
            </BlurView>
          </View>

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
              data={itemsObj}
              style={styles.horizontalListStyle}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              keyExtractor={(item, index) => item.id + index.toString()}
              renderItem={renderItemSk}
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
