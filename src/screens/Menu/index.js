import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import HeartIcon from '../../assets/images/fav.png';
import Footer from '../../components/Footer';
import LinearGradient from 'react-native-linear-gradient';
import SearchModded from '../../components/SearchModded';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheet} from '@rneui/themed';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';
import FadedSeparator from '../../components/FadedSeparator';
import ToggleButton from '../../components/ToggleButton';
import BackgroundCard from '../../components/BackgroundCard';
import {dressCode} from '../../utils/demodata';
import {Image} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import LottieView from 'lottie-react-native';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';
import CircleBackground from '../../components/CircleBackground';
import Counter from '../../components/Counter';
import {useNavigation} from '@react-navigation/native';

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
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BackgroundLayout />
        <HeaderModed
          slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
          slotCenter={<Text style={styles.navbarPageTitle}>Menu</Text>}
          slotRight={<MenuNavButton icon={HeartIcon} iconType="image" />}
        />
        <SearchModded isVisible={showFilter} setIsVisible={setShowFilter} />
        <View class="category-wise-menu" style={styles.categoryWiseContainer}>
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
                  style={styles.linearBack}
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
                  style={styles.linearBack}
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
                  <BackgroundCard
                    style={{
                      padding: 10,
                      width: 160,
                      height: heightToDp(100),
                      // margin: 10,
                    }}
                    childrenStyle={{borderRadius: 26}}
                    linearBackStyle={{borderRadius: 26}}
                    onPress={() => handlePress()}>
                    <LinearGradient
                      colors={['#5A5A75', '#27273500']}
                      useAngle
                      angle={300}
                      style={styles.linearBack}
                      start={{x: 1, y: 0.5}}
                      end={{x: 1, y: 0.5}}>
                      <View
                        style={[
                          // !showMenu && styles.menuGradient,
                          styles.circleTwoGradient,
                        ]}
                        //   onPress={() => (!showMenu ? handleButton() : null)}
                      >
                        <Image
                          source={require('../../assets/images/burger_one.png')}
                          style={{width: 100, height: 100}}
                        />
                      </View>
                    </LinearGradient>
                    <View style={styles.productContainer}>
                      <Text style={styles.productTxt}>Burger 1</Text>
                      <View style={styles.ratingContainer}>
                        <Text style={styles.ratingTxt}>4.5</Text>
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={styles.starImg}
                        />
                      </View>
                    </View>
                  </BackgroundCard>
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
                  <BackgroundCard
                    style={{
                      padding: 10,
                      width: 200,
                      height: heightToDp(100),
                      // margin: 10,
                    }}
                    childrenStyle={{borderRadius: 26}}
                    linearBackStyle={{borderRadius: 26}}>
                    <LinearGradient
                      colors={['#5A5A75', '#27273500']}
                      useAngle
                      angle={300}
                      style={styles.linearBack}
                      start={{x: 1, y: 0.5}}
                      end={{x: 1, y: 0.5}}>
                      <View
                        style={[
                          // !showMenu && styles.menuGradient,
                          styles.circleTwoGradient,
                        ]}
                        //   onPress={() => (!showMenu ? handleButton() : null)}
                      >
                        {/* {children} */}

                        <Image
                          source={require('../../assets/images/burger_one.png')}
                          style={{width: 100, height: 100}}
                        />
                      </View>
                    </LinearGradient>
                    <View style={styles.productContainer}>
                      <Text style={styles.productTxt}>Burger 2</Text>
                      <View style={styles.ratingContainer}>
                        <Text style={styles.ratingTxt}>4.5</Text>
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={styles.starImg}
                        />
                      </View>
                    </View>
                  </BackgroundCard>
                )}
              />
            )}
          </View>
        </View>

        <View
          style={{
            marginTop: 40,
          }}>
          <Text
            style={{
              marginLeft: 15,
              fontSize: fonts.URBANIST_EXTRABOLD,
              fontSize: 22,
              color: Colors.GREEN,
            }}>
            Categories
          </Text>
          <FlatList
            data={dressCode}
            style={styles.horizontalListStyle}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id + index.toString()}
            renderItem={({item, index}) => (
              <BackgroundCard
                style={{
                  padding: 10,
                }}
                childrenStyle={{borderRadius: 26}}
                linearBackStyle={{borderRadius: 26}}>
                <View style={styles.mainContainer}>
                  <View style={styles.subContainer}>
                    <View style={styles.productVerticalContainer}>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <Text style={styles.productTxt}>Burger</Text>
                        <Text
                          style={[styles.ratingTxt, styles.ratingTxtVertical]}>
                          4.5
                        </Text>
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={styles.starImg}
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <View style={{flexDirection: 'row'}}>
                        {dishType.map((item, index) => (
                          <CircleBackground
                            style={
                              index === 0 ? {marginLeft: 0} : {marginLeft: 5}
                            }
                            key={index}>
                            <LottieView
                              source={item.imgUrl}
                              autoPlay
                              // loop
                              // Additional props for customization
                              loop={false}
                              speed={1.5}
                              resizeMode="contain"
                              style={{
                                width: 20,
                                height: 20,
                                margin: 5,
                                padding: 10,
                              }}
                            />
                          </CircleBackground>
                        ))}
                      </View>
                      <View style={{flexDirection: 'row'}}>
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
                  </View>
                  <LinearGradient
                    colors={['#5A5A75', '#27273500']}
                    useAngle
                    angle={300}
                    style={[styles.linearBack, styles.verticalLinearBack]}
                    start={{x: 1, y: 0.5}}
                    end={{x: 1, y: 0.5}}>
                    <View
                      style={[styles.circleTwoGradient]}
                      //   onPress={() => (!showMenu ? handleButton() : null)}
                    >
                      {/* {children} */}

                      <Image
                        source={require('../../assets/images/burger_one.png')}
                        style={{width: 100, height: 100}}
                      />
                    </View>
                  </LinearGradient>
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
              </BackgroundCard>
            )}
          />
        </View>
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
