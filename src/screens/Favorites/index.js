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
import Star from '../../assets/images/ratingStar.svg';
import Heart from '../../assets/images/heart.svg';
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
import ResturantCard from '../../components/RestaurantCard';
import Skeleton from 'react-native-reanimated-skeleton';

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

const FavoritesTabView = () => {
  const [nestedIndex, setNestedIndex] = useState(0);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingItems(false);
    }, 3000);
  }, [loadingItems]);
  // Define the scenes for the nested tab view
  const renderItemSk = ({item, index}) => (
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
            style={{
              width: widthToDp(100),
              flexDirection: 'row',
              // backgroundColor: '#f0fc',
              alignItems: 'center',
            }}>
            <Text
              className="product-name"
              style={styles.verticalPrdListItem.prdName}>
              {item.name}
            </Text>
            <View class="rating-with-allergies">
              <View
                className="menu-item-smallbox-ratingCont"
                style={[styles.menuItemSmallbox.ratingCont, {marginLeft: 5}]}>
                <Text style={styles.menuItemSmallbox.rating}>
                  {item.rating}
                </Text>
                <Star style={styles.menuItemSmallbox.ratingIcon} width={20} />
              </View>
            </View>
          </View>
          <Text
            className="product-restaruant-name"
            style={styles.verticalPrdListItem.prdRestName}>
            Served by: (Restaurant Name)
          </Text>
          <Text
            className="product-restaruant-visit"
            style={styles.verticalPrdListItem.prdVisit}>
            Last visited May 29, 2024
          </Text>
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
          <View
            className="menu-item-heart"
            style={styles.verticalPrdListItem.itemHeart}>
            <Heart style={styles.verticalPrdListItem.image} />
          </View>
        </View>
      </View>
    </Skeleton>
  );
  // Define the tabBar for the nested tab view

  return (
    <View style={{backgroundColor: 'transparent'}}>
      <FlatList
        data={breakfastPrd}
        // style={styles.horizontalListStyle}
        showsHorizontalScrollIndicator={false}
        // scrollEnabled={false}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={renderItemSk}
      />
    </View>
  );
};

const LocationsTabView = () => {
  const [expanded, setExpanded] = useState(true);
  const [checked, setChecked] = React.useState(true);

  const restaurantCategories = [
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
  const toggleCheckbox = () => setChecked(!checked);
  const renderRestCats = ({item}) => (
    <ResturantCard
      name={item.name}
      location={item.location}
      fav
      //   cuisine={item.cuisine}
    />
  );
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* <ScrollView contentContainerStyle={styles.scroll}> */}
      <FlatList
        // horizontal={true}
        showsVerticalScrollIndicator={false}
        // style={styles.listStyle}
        data={restaurantCategories}
        renderItem={renderRestCats}
        keyExtractor={item => item.id} // Key extractor for each item
      />
      {/* </ScrollView> */}
    </View>
  );
};
const renderScene = SceneMap({
  first: LocationsTabView,
  second: FavoritesTabView,
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
const Favorites = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Locations'},
    {key: 'second', title: 'Items'},
  ]);
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={styles.headerText}>Favorites</Text>}
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

export default Favorites;
