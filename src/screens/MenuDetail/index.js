import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
  Pressable,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';

import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import Counter from '../../components/Counter';
import RestaurantButton from '../../components/Buttons/RestaurantButton';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import ButtonsCommonAlt from '../../components/Buttons/ButtonCommonAlt';
import ReviewCard from '../../components/ReviewCard/index.js';
import {reviews} from '../../utils/demodata.js';
import {useNavigation} from '@react-navigation/native';
import CircleBackground from '../../components/CircleBackground/index.js';
import LottieView from 'lottie-react-native';
import Colors from '../../theme/Colors.js';
import FavouriteButton from '../../components/NavButtons/FavouriteButton/index.js';
import BackButton from '../../components/NavButtons/BackButton/index.js';
import {SelectCountry} from 'react-native-element-dropdown';
import GradientText from '../../components/GradientText/index.js';
import Star from '../../assets/images/ratingStar.svg';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';
import SwipBar from '../../components/features/ui/swipBar/index.jsx';

const MenuDetail = () => {
  console.log(width, 'my width');
  const navigation = useNavigation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [expanded, setExpanded] = useState(true);
  const [value, setValue] = useState('1');

  const menuSwipe = [
    {
      imgUrl: require('../../assets/images/burger_one.png'),
    },
    {
      imgUrl: require('../../assets/images/burger_two.png'),
    },
    {
      imgUrl: require('../../assets/images/burger_one.png'),
    },
  ];
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

  const data = [
    {
      label: '1.0',
      value: '1',
      image: require('../../assets/images/star.png'),
    },
    {label: '2.0', value: '2', image: require('../../assets/images/star.png')},
    {label: '3.0', value: '3', image: require('../../assets/images/star.png')},
    {label: '4.0', value: '4', image: require('../../assets/images/star.png')},
    {label: '5.0', value: '5', image: require('../../assets/images/star.png')},
  ];

  const spiceLevel = ['Low', 'Medium', 'High', 'Very Spicy'];
  const [selsPice, setSelSpice] = useState(1);

  const portionSize = ['Small', 'Medium', 'Large', 'Extra Large', 'Jumbo'];
  const [selPortion, setSelPortion] = useState(1);

  const handleSelectIngredient = () => {
    navigation.navigate('IngredientCustomization');
  };

  const renderSpiceLevel = (item, index) => (
    <TouchableOpacity
      style={{
        width: width > 390 ? width * 0.214 : width * 0.244,

        // width: widthToDp(36),
        alignItems: 'center',
        // backgroundColor: 'red',
        marginHorizontal: 5,
      }}>
      <Text
        style={[
          styles.levelTxt,
          {color: selsPice === index ? Colors.GREEN : Colors.WHITE},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
  const renderPortion = (item, index) => (
    <TouchableOpacity
      style={{
        // width: widthToDp(26),
        width: width > 390 ? width * 0.214 : width * 0.244,
        marginHorizontal: 5,

        alignItems: 'center',
      }}>
      <Text
        style={[
          styles.levelTxt,
          {color: selPortion === index ? Colors.GREEN : Colors.WHITE},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const handleSetSpiceLevel = ev => {
    setSelSpice(ev);
    console.log('swipe cb: ' + ev);
  };
  const handleSetPortion = ev => {
    setSelPortion(ev);
  };

  return (
    <View style={styles.container}>
      <BackgroundLayout />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderWidth: 2,
            borderColor: Colors.GREEN,
            borderRadius: 15,
          }}>
          <HeaderModed
            headerStyle={{marginTop: 0}}
            slotLeft={<FavouriteButton />}
            // slotLeft={<BackButton onPress={() => navigation.goBack()} />}
            slotCenter={
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://sketchfab.com/models/c87f3caa5c76470094aa187edc9dcd57/embed-ar',
                  )
                }>
                <Image
                  source={require('../../assets/images/AR.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            }
            slotRight={
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                  // style={{padding: 10}}
                >
                  <CloseFilterBtn width={20} height={20} />
                </TouchableOpacity>
              </>
            }
          />
          <View
            style={{
              height: heightToDp(60),
              width: widthToDp(100),
              marginTop: 15,
            }}>
            <Swiper style={{}} loop={false} showsPagination={true}>
              {menuSwipe.map((item, index) => (
                <View style={styles.slide1} key={index}>
                  <Image source={item.imgUrl} resizeMode="cover" style={{}} />
                </View>
              ))}
            </Swiper>
            {/* <View style={styles.arContainer}>
            <Ar width={30} height={30} />
          </View> */}
          </View>

          <View style={styles.menuContainer}>
            <View>
              <Star width={50} style={{marginLeft: 15}} />

              <Text style={styles.resturantName}>Burger</Text>
              <Text style={styles.up_rating}>4.5</Text>
            </View>
            {/* <Text style={styles.rating}>4.5</Text> */}
            <GradientText style={styles.price}>$50</GradientText>
          </View>
          <Text style={styles.resturantDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the..
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 10}}>
            {dishType.map((item, index) => (
              <CircleBackground
                style={
                  index === 0
                    ? {marginLeft: 0}
                    : {
                        marginLeft: 5,
                        // width: 40,
                        // height: 40,
                        // borderRadius: 20,
                        // alignItems: 'center',
                      }
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

          <View style={styles.readyContainer}>
            <CircleBackground
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <LottieView
                source={require('../../assets/images/food_plate.json')}
                autoPlay
                loop={false}
                speed={1.5}
                resizeMode="contain"
                style={styles.lottieStyle}
              />
            </CircleBackground>
            <Text style={styles.readyTxt}>Ready in 15 Min</Text>
          </View>
          <Text style={styles.quantityTxt}>Select Quantity</Text>
          <Counter
            plusContainerStyle={{
              backgroundColor: Colors.GREEN,
            }}
          />
          <View style={{marginHorizontal: 15, marginBottom: 10}}>
            <RestaurantButton
              btnText={'Select Ingredients'}
              onPress={() => handleSelectIngredient()}
              style={{marginTop: 20}}
            />
            {/* <View
              style={{
                marginVertical: 10,
                alignItems: 'center',
                backgroundColor: '#7074C422',
                // marginHorizontal: 5,
                borderColor: '#fff4',
                borderRadius: 36,
                borderWidth: 1,
              }}> */}
            {/* <BackgroundCard
              style={styles.backgroundBtnContainer}
              childrenStyle={{paddingVertical: 10}}> */}
            {/* <Text style={styles.quantityTxt}>Customization</Text> */}

            {/* <RestaurantButton
              btnText={'Spicy Level'}
              btnTextStyle={{fontFamily: fonts.URBANIST_MEDIUM}}
              style={{width: '90%', marginTop: 10, borderRadius: 16}}
            /> */}

            {/* <LinearGradient
                colors={['#00F69299', '#00A7F7FF']}
                useAngle={true}
                angle={820}
                style={{
                  borderRadius: 16,
                  marginTop: 10,
                  width: '90%',
                }}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <View style={styles.circleGradient}>
                  <Text style={[styles.btnText]}>Spicy Level</Text>
                </View>
              </LinearGradient> */}

            {/* <View style={styles.levelContainer}>
                <HorizontalPicker
                  defaultIndex={selsPice}
                  data={spiceLevel}
                  snapTimeout={250}
                  renderItem={renderSpiceLevel}
                  itemWidth={100}
                  onChange={handleSetSpiceLevel}
                />
              </View> */}

            {/* <View
                style={{
                  width: '100%',
                  // minHeight: '100vh',
                  height: '100%',
                  // display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.49)',
                }}> */}
            <View style={{marginTop: 10, width: '100%', alignSelf: 'center'}}>
              <SwipBar />
            </View>
            {/* </View> */}

            {/* <LinearGradient
                colors={['#00F69299', '#00A7F7FF']}
                useAngle={true}
                angle={820}
                style={{
                  borderRadius: 16,

                  marginTop: 10,
                  width: '90%',
                }}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <View style={styles.circleGradient}>
                  <Text style={[styles.btnText]}>Portion Size</Text>
                </View>
              </LinearGradient>
              <View style={styles.levelContainer}>
                <HorizontalPicker
                  defaultIndex={selPortion}
                  data={portionSize}
                  snapTimeout={250}
                  renderItem={renderPortion}
                  itemWidth={100}
                  onChange={handleSetPortion}
                />
              </View> */}
            {/* </BackgroundCard> */}
            {/* </View> */}
            <View style={styles.customBtns}>
              <ButtonsCommonAlt
                btnText={'Quick Order'}
                onPress={() => navigation.navigate('PaymentOption')}
                btnTextStyle={{}}
                containerStyle={{width: widthToDp(45), marginTop: 10}}
                btnStyle={{borderRadius: 20}}
                linearTextStyle={{borderRadius: 20}}
              />

              <ButtonsCommon
                btnText={'Add to Cart'}
                onPress={() => Alert.alert('Item Added to Cart')}
                containerStyle={{width: widthToDp(45), marginTop: 10}}
                btnStyle={{borderRadius: 20}}
                linearTextStyle={{borderRadius: 20}}
              />
            </View>

            <View style={{marginBottom: 10}}>
              {/* <Text></Text> */}
              <Text style={styles.headingText}>Reviews</Text>

              <View>
                <LinearGradient
                  colors={['#00000022', '#FFFFFFFF', '#FFFFFFFF']}
                  style={{borderRadius: 18, margin: 1}}
                  start={{x: 0, y: 4}}
                  end={{x: 1, y: 0}}>
                  <Pressable
                    style={styles.review_btn}
                    onPress={() => {
                      // setExpanded(!expanded);
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={styles.rating_type}>Excellent</Text>
                      <View style={styles.review_tag}></View>
                    </View>

                    <SelectCountry
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      activeColor="rgba(0,0,0,0.5)"
                      itemContainerStyle={{backgroundColor: '#272730'}}
                      imageStyle={styles.imageStyle}
                      iconStyle={styles.iconStyle}
                      data={data}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder=""
                      value={value}
                      onChange={item => {
                        setValue(item.value);
                      }}
                    />
                  </Pressable>
                </LinearGradient>
                {expanded && (
                  <FlatList
                    data={reviews}
                    style={styles.reviewList}
                    scrollEnabled={false}
                    renderItem={({item}) => (
                      <ReviewCard
                        name={item.name}
                        time={item.time}
                        detail={item.detail}
                      />
                    )}
                  />
                )}
              </View>

              {/* <View>
              <LinearGradient
                colors={['#00000022', '#FFFFFFFF', '#FFFFFFFF']}
                style={{borderRadius: 18, flexWrap: 'nowrap', margin: 1}}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <TouchableOpacity
                  style={styles.review_btn}
                  onPress={() => {
                    setExpanded(!expanded);
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.rating_type}>Excellent</Text>
                    <View style={styles.review_tag}></View>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/images/Star_2.png')} />
                    <Text style={styles.rating_no}>4.0</Text>
                    <Image
                      source={require('../../assets/images/chevron_down.png')}
                      // width={10}
                    />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
              {expanded && (
                <FlatList
                  data={reviews}
                  style={styles.reviewList}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <ReviewCard
                      name={item.name}
                      time={item.time}
                      detail={item.detail}
                    />
                  )}
                />
              )}
            </View> */}

              <LinearGradient
                colors={['#00000022', '#FFFFFFFF', '#FFFFFFFF']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={{
                  padding: 0,
                  margin: 1,
                  borderRadius: 18,
                  width: '100%',
                }}></LinearGradient>

              {!expanded && <View style={{padding: 10}}></View>}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* <Footer /> */}
    </View>

    // </View>
  );
};

export default MenuDetail;
