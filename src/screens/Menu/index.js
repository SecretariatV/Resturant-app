import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
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
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';
import {screenToTextSize} from '../../utils/helper';

const Menu = () => {
  const navigation = useNavigation();

  const dishType = [
    {
      imgUrl: require('../../assets/images/onion.json'),
    },
    {
      imgUrl: require('../../assets/images/eggs.json'),
    },
    {
      imgUrl: require('../../assets/images/fish.json'),
    },
    {
      imgUrl: require('../../assets/images/nuts.json'),
    },
  ];
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

        <ScrollView stickyHeaderIndices={[2]} style={{ paddingBottom: 20}} >
          <HeaderModed
            slotLeft={<HamBurgerButton onPress={navMenu} />}
            slotCenter={<Text style={styles.navbarPageTitle}>Menu</Text>}
            slotRight={<MenuNavButton icon={HeartIcon} iconType="img" />}
          />
          <View class="user-wise-menu" style={styles.userWiseContainer}>
            <View class="category-container" style={styles.verticalTabs}>
              <View class="useless-wrapper" style={styles.uselessWrapper}>
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
            <View class="flatlist-wrapper" style={styles.flatlistWrapper}>
              {itemListType === 'top' && (
                <FlatList
                  data={dressCode}
                  style={styles.horizontalListStyle}
                  keyExtractor={(item, index) => item.id + index.toString()}
                  horizontal
                  renderItem={({item, index}) => (
                    <View
                      class="menu-item-smallbox"
                      style={styles.menuItemSmallbox}>
                      <View
                        class="menu-item-smallbox-imgCont"
                        style={styles.menuItemSmallbox.imgCont}>
                        <Image
                          style={styles.menuItemSmallbox.image}
                          source={require('../../assets/images/burger_one.png')}
                        />
                      </View>
                      <View
                        class="menu-item-smallbox-nameCont"
                        style={styles.menuItemSmallbox.nameCont}>
                        <Text
                          class="menu-item-smallbox-name"
                          style={styles.menuItemSmallbox.itemName}>
                          Burger 1
                        </Text>
                        <View
                          class="menu-item-smallbox-ratingCont"
                          style={styles.menuItemSmallbox.ratingCont}>
                          <Text style={styles.menuItemSmallbox.rating}>
                            4.5
                          </Text>
                          <Star width={20} />
                        </View>
                      </View>
                    </View>
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
                      class="menu-item-smallbox"
                      style={styles.menuItemSmallbox}>
                      <View
                        class="menu-item-smallbox-imgCont"
                        style={styles.menuItemSmallbox.imgCont}>
                        <Image
                          style={styles.menuItemSmallbox.image}
                          source={require('../../assets/images/burger_one.png')}
                        />
                      </View>
                      <View
                        class="menu-item-smallbox-nameCont"
                        style={styles.menuItemSmallbox.nameCont}>
                        <Text
                          class="menu-item-smallbox-name"
                          style={styles.menuItemSmallbox.itemName}>
                          Burger 2
                        </Text>
                        <View
                          class="menu-item-smallbox-ratingCont"
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
          <View style={{}}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: fonts.URBANIST_BOLD,
                fontSize: screenToTextSize(6),
                fontWeight: 'bold',
                color: Colors.GREEN,
              }}>
              Categories
            </Text>
          </View>

          <View class="items-by-category" style={styles.categoryWiseContainer}>
            <FlatList
              data={dressCode}
              style={styles.horizontalListStyle}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item.id + index.toString()}
              renderItem={({item, index}) => (
                <View class="menu-item-longBox" style={styles.menuItemLongbox}>
                  <View
                    class="menu-item-longBox-detail"
                    style={styles.menuItemLongbox.detail}>
                    <View
                      class="menu-item-longBox-name-and-rating"
                      style={styles.menuItemLongbox.nameRating}>
                      <Text
                        class="menu-item-longBox-item-name"
                        style={styles.menuItemLongbox.itemName}>
                        Burger
                      </Text>
                      <View class="menu-item-longBox-item-rating">
                        <Text style={styles.menuItemLongbox.itemRating}>
                          4.5
                        </Text>
                        <Star />
                      </View>
                    </View>
                    <View
                      class="item-allergies"
                      style={styles.menuItemLongbox.allergies}></View>
                    <View
                      class="item-price-cont"
                      style={styles.menuItemLongbox.itemPriceCont}>
                      <View
                        class="item-price-sale"
                        style={[styles.menuItemLongbox.itemRegPrice]}>
                        <Text
                          style={styles.menuItemLongbox.itemRegPriceCrossed}>
                          $100
                        </Text>
                      </View>
                      <View
                        class="item-price-reg"
                        style={styles.menuItemLongbox.itemSalePrice}>
                        <Text
                          style={styles.menuItemLongbox.itemRegPriceNotCrossed}>
                          $100
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View class="menu-item-image">
                    <Image
                      source={require('../../assets/images/burger_one.png')}
                      style={{width: 100, height: 100}}
                    />
                  </View>
                  <View class="menu-item-qty-selector">
                    <TouchableOpacity></TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity></TouchableOpacity>
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

export default Menu;
