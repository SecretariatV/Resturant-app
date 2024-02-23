// import {View, Text} from 'react-native';
// import React from 'react';
// import {styles} from './styles';
// import BackgroundLayout from '../../components/BackgroundLayout';
// import HeaderCommon from '../../components/HeaderCommon';
// import HeaderModed from '../../components/HeaderModed';
// import MenuNavButton from '../../components/MenuNavButton';
// import Hamburger from '../../assets/images/hamburger.png';
// import heart from '../../assets/images/heart.png';
// import {widthToDp} from '../../utils/Dimensions';
// import Search from '../../components/Search';
// import {Colors} from '../../theme';
// import Footer from '../../components/Footer';
// import SearchModded from '../../components/SearchModded';

// const Menu = () => {
//   return (
//     <View style={styles.container}>
//       <BackgroundLayout />
//       <HeaderModed
//         slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
//         slotCenter={<Text>Menu</Text>}
//         slotRight={
//           <MenuNavButton
//             icon={heart}
//             iconType="image"
//             iconStyle={{
//               width: widthToDp(8),
//               height: widthToDp(8),
//               margin: 5,
//             }}
//           />
//         }
//       />
//       {/* <HeaderCommon
//         showSkipBtn={true}
//         showValet={true}
//         showMenu={true}
//         show={true}
//       /> */}
//       {/* <Search /> */}
//       <SearchModded />

//       {/* <View style={{flexDirection: 'row'}}>
//         <View>
//           <Text
//             style={{
//               transform: [{rotate: '-90deg'}],
//               color: Colors.WHITE,
//               marginTop: 40,
//               backgroundColor: 'red',
//               margin: 0,
//             }}>
//             Previously ordered
//           </Text>

//           <Text
//             style={{
//               transform: [{rotate: '-90deg'}],
//               color: Colors.WHITE,
//               marginTop: 50,
//             }}>
//             Top Picks
//           </Text>
//         </View>
//         <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
//       </View> */}
//       <Footer />
//     </View>
//   );
// };

// export default Menu;
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import HeartIcon from '../../assets/images/fav.png';
import Footer from '../../components/Footer';
import SearchIcon from '../../assets/images/searchIcon.svg';
import LinearGradient from 'react-native-linear-gradient';
import SearchModded from '../../components/SearchModded';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheet} from '@rneui/themed';
// import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';
import FadedSeparator from '../../components/FadedSeparator';
import ToggleButton from '../../components/ToggleButton';
import BackgroundCard from '../../components/BackgroundCard';
import {dressCode} from '../../utils/demodata';
import {Image} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import LottieView from 'lottie-react-native';
import fish from '../../assets/images/fish_2.json';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';
import SkipButton from '../../components/Buttons/SkipButton';
import BackButton from '../../components/Buttons/BackButton';
import CircleBackground from '../../components/CircleBackground';
const Menu = () => {
  const dishType = [
    {
      imgUrl: require('../../assets/images/fish_2.json'),
    },
    {
      imgUrl: require('../../assets/images/fish_2.json'),
    },
    {
      imgUrl: require('../../assets/images/fish_2.json'),
    },
    {
      imgUrl: require('../../assets/images/fish_2.json'),
    },
  ];
  const [modalVisible, setModalVisible] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
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
                <Text style={styles.productTxt}>Burger</Text>
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

        <FlatList
          data={dressCode}
          style={styles.horizontalListStyle}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          renderItem={({item, index}) => (
            <BackgroundCard
              style={{
                padding: 10,
                // width: 200,
                // height: heightToDp(100),
                // margin: 10,
                // justifyContent: 'center',
              }}
              childrenStyle={{borderRadius: 26}}
              linearBackStyle={{borderRadius: 26}}>
              <View style={styles.mainContainer}>
                <View style={styles.subContainer}>
                  <View style={styles.productVerticalContainer}>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
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
                      {/* <View
                        style={{
                          backgroundColor: '#2C2C2C',
                          width: widthToDp(7),
                          borderRadius: widthToDp(3.5),
                        }}>
                        <LottieView
                          source={fish}
                          autoPlay
                          // loop
                          // Additional props for customization
                          speed={1.5}
                          resizeMode="contain"
                          style={{width: 20, height: 20, margin: 5}}
                        />
                      </View> */}
                      {dishType.map((item, index) => (
                        <CircleBackground
                          style={
                            index === 0 ? {marginLeft: 0} : {marginLeft: 5}
                          }>
                          <LottieView
                            source={item.imgUrl}
                            autoPlay
                            // loop
                            // Additional props for customization
                            speed={1.5}
                            resizeMode="contain"
                            style={{width: 20, height: 20, margin: 5}}
                          />
                        </CircleBackground>
                      ))}
                    </View>
                    <Text style={styles.price}>$100</Text>
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
              </View>
            </BackgroundCard>
          )}
        />
      </View>
      <Footer />
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
              {/* <CloseFilterBtn width={20} height={20} /> */}
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
            {/* <TouchableOpacity onPress={() => setShowRequest(false)}>
              <CloseFilterBtn width={20} height={20} />
            </TouchableOpacity> */}
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
