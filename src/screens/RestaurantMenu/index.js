import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {BottomSheet} from '@rneui/themed';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
// components
import BackgroundLayout from '../../components/BackgroundLayout';
import BackgroundCard from '../../components/BackgroundCard';
import CircleBackground from '../../components/CircleBackground';
import Counter from '../../components/Counter';
import FadedSeparator from '../../components/FadedSeparator';
import Footer from '../../components/Footer';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import SearchModded from '../../components/SearchModded';
import ToggleButton from '../../components/ToggleButton';
//images
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';
import HeartIcon from '../../assets/images/fav.png';
// import HeartIcon from '../../assets/images/heartIcon.svg';
import Star from '../../assets/images/star.svg';
//utils
import {dressCode} from '../../utils/demodata';
import {height, heightToDp, widthToDp} from '../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';
import {getPlatformSpecificValue, screenToTextSize} from '../../utils/helper';
// import {View} from '@candlefinance/blur-view';
import {Allergies} from '../../utils/demodata';

const RestaurantMenu = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [itemListType, setItemListType] = useState('top');

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
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BackgroundLayout />

        <ScrollView stickyHeaderIndices={[2]} style={{paddingBottom: 20}}>
          <HeaderModed
            //headerStyle={{marginLeft: getPlatformSpecificValue(15, 0)}}
            slotLeft={<HamBurgerButton />}
            slotCenter={<Text style={styles.navbarPageTitle}>Menu</Text>}
            slotRight={<MenuNavButton icon={HeartIcon} iconType="img" />}
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
                      <View
                        className="menu-item-smallbox-nameCont"
                        style={styles.menuItemSmallbox.nameCont}>
                        <Text
                          className="menu-item-smallbox-name"
                          style={styles.menuItemSmallbox.itemName}>
                          Burger 1
                        </Text>
                        <View
                          className="menu-item-smallbox-ratingCont"
                          style={styles.menuItemSmallbox.ratingCont}>
                          <Text style={styles.menuItemSmallbox.rating}>
                            4.5
                          </Text>
                          <Star width={20} />
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
                    <View
                      key={index}
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
                      <View
                        className="menu-item-smallbox-nameCont"
                        style={styles.menuItemSmallbox.nameCont}>
                        <Text
                          className="menu-item-smallbox-name"
                          style={styles.menuItemSmallbox.itemName}>
                          Burger 2
                        </Text>
                        <View
                          className="menu-item-smallbox-ratingCont"
                          style={styles.menuItemSmallbox.ratingCont}>
                          <Text style={styles.menuItemSmallbox.rating}>
                            2.5
                          </Text>
                          <Star width={20} />
                        </View>
                      </View>
                    </View>
                  )}
                />
              )}
            </View>
          </View>
          <View blurTintColor="#0E0E15" colorTintOpacity={0.1} blurRadius={10}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: fonts.URBANIST_BOLD,
                fontSize: screenToTextSize(6),
                fontWeight: 'bold',
                color: Colors.GREEN,
                paddingVertical: 20,
                marginTop: 30,
              }}>
              Categories
            </Text>
          </View>

          <View
            className="items-by-category"
            style={styles.categoryWiseContainer}>
            <FlatList
              data={dressCode}
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
                            {/* <Text
                              style={{
                                color: '#000',
                                backgroundColor: '#fff',
                                width: 16,
                              }}>
                              {item.name}
                            </Text> */}
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
                        counterTextStyle={{margin: 15}}
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
      <BottomSheet modalProps={{}} isVisible={showFilter}>
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
            <TouchableOpacity onPress={() => setShowFilter(false)}>
              <CloseFilterBtn width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View className="personal-preference" style={styles.filterSection}>
            <Text style={styles.filterHeadingText}>
              Apply Personal Preference
            </Text>
          </View>
          <View className="cuisine-type">
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
          <View className="allergies">
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
          <View className="allergies">
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
          <View className="allergies">
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
          <View className="price-range" style={styles.priceRange}>
            <View style={styles.priceRangeLabel}>
              <Text>Price Range:</Text>
              <Text>$500</Text>
            </View>
            <View style={styles.priceRangeSlider}></View>

            <View style={styles.priceRangeLabelBottom}></View>
          </View>
        </ScrollView>
      </BottomSheet>
      <BottomSheet modalProps={{}} isVisible={showRequest}>
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
          </View>
          <View className="personal-preference" style={styles.filterSection}>
            <Text style={styles.filterHeadingText}>
              Apply Personal Preference
            </Text>
          </View>
          <View className="cuisine-type">
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
          <View className="allergies">
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
          <View className="allergies">
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
          <View className="allergies">
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
          <View className="price-range" style={styles.priceRange}>
            <View style={styles.priceRangeLabel}>
              <Text>Price Range:</Text>
              <Text>$500</Text>
            </View>
            <View style={styles.priceRangeSlider}>
              {/* <RangeSlider
                minValue={0}
                maxValue={100}
                steps={1}
                activeBackgroundComponent={
                  <View
                    style={{
                      backgroundColor: '#f00',
                      width: widthToDp(100),
                    }}
                  />
                }
                inactiveBackgroundComponent={
                  <View
                    style={{
                      backgroundColor: '#f0f',
                      width: widthToDp(100),
                    }}
                  />
                }
                thumbComponent={<SliderThumb />}
                onValueChange={setSliderValue}
              /> */}
            </View>

            <View style={styles.priceRangeLabelBottom}></View>
          </View>
        </ScrollView>
      </BottomSheet>
      <Footer />
    </SafeAreaProvider>
  );
};

export default RestaurantMenu;
