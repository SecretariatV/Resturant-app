import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {height, heightToDp, widthToDp} from '../../utils/Dimensions';
import LinearGradient from 'react-native-linear-gradient';

import BackgroundLayout from '../../components/BackgroundLayout';

import HeaderModed from '../../components/HeaderModed';
import Clock from '../../assets/images/clock.svg';
import Dress from '../../assets/images/dress.svg';
import Age from '../../assets/images/age.svg';

import CusineSvg from '../../assets/images/cuisineServe.svg';
// import CusineImg from '../../assets/images/cuisineServeImg';
import Location from '../../assets/images/locWithBack.svg';

import resturant_cover from '../../assets/images/restaurant_cover.png';
import FadedSeparator from '../../components/FadedSeparator';
import {Colors} from '../../theme';
import ReviewCard from '../../components/ReviewCard';
import {reviews, ageGroup, cuisine, dressCode} from '../../utils/demodata';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import {SelectCountry} from 'react-native-element-dropdown';

const Restaurant = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('about');
  const [value, setValue] = useState('1');

  const [isToggled, setIsToggled] = useState(true);
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
  useEffect(() => {
    console.log(activeTab, 'activeTab');
  }, [activeTab]);

  const handleAboutToggle = () => {
    console.log('here');
    setIsToggled(true);
    setActiveTab('about');
  };

  const handleReviewToggle = () => {
    console.log('here');
    setIsToggled(true);
    setActiveTab('review');
  };

  const renderScreen = () => {
    if (activeTab === 'about') {
      return (
        <>
          <Text style={styles.headingText}>Opening Hours</Text>
          <View style={styles.timeContainer}>
            <Clock width={32} height={32} style={{marginRight: 10}} />
            <Text style={styles.to}>6:00 PM</Text>

            <Text style={styles.to}>To</Text>

            <Text style={styles.to}>6:00 PM</Text>
          </View>

          <FadedSeparator />
          <Text style={styles.headingText}>Dress Code</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
            {dressCode.map(item => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                  marginRight: 15,
                }}>
                <Clock width={32} height={32} style={{marginRight: 5}} />

                <Text style={{color: Colors.WHITE}}>{item.codeType}</Text>
              </View>
            ))}
          </View>
          <FadedSeparator />
          <View style={styles.timeContainer}>
            <CusineSvg />
            {/* <Image source={require('../../assets/images/cusineServeImg.png')} /> */}
            <Text style={styles.headingText}>Cuisine Served</Text>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
            {cuisine.map(item => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    marginRight: 10,
                    marginTop: 10,
                  }}>
                  {item.type}
                </Text>
              </View>
            ))}
          </View>
          <FadedSeparator />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Age />
            <Text style={styles.headingText}>Age Group</Text>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
            {ageGroup.map(item => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    marginRight: 10,
                    marginTop: 10,
                  }}>
                  {item.age}
                </Text>
              </View>
            ))}
          </View>
          <FadedSeparator />
          <View style={styles.timeContainer}>
            <Location width={32} height={32} style={{marginRight: 5}} />
            <Text style={styles.headingText}>Location</Text>
          </View>
          <Image
            source={require('../../assets/images/map.png')}
            style={{
              width: widthToDp(90),
              marginTop: 10,
              alignSelf: 'center',
            }}
          />
        </>
      );
    } else if (activeTab === 'review') {
      return (
        <>
          <Text style={styles.headingText}>Reviews</Text>

          <View style={{marginVertical: 10}}>
            <View>
              <LinearGradient
                colors={['#00000022', '#FFFFFFFF', '#FFFFFFFF']}
                style={{borderRadius: 18, flexWrap: 'nowrap', margin: 1}}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
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
        </>
      );
    }
  };

  const gradientColors = isToggled
    ? ['#02ABEE6E', '#02ABEE', '#00F594']
    : ['rgba(255, 255, 255, 0.10)', 'rgba(255, 255, 255, 0.10)'];

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<></>}
        slotRight={<></>}
        bannerImage={
          <ImageBackground
            source={resturant_cover}
            style={styles.bannerImage}
          />
        }
      />

      <ScrollView style={styles.restaurantScrollView}>
        <View
          class="restaurant-content-container"
          style={styles.restaurantContentContainer}>
          <View
            class="restaurant-header-container"
            style={styles.resturantHeaderContainer}>
            <Text style={styles.resturantName}>Restaurant Name</Text>
            <View
              class="restaurant-rating-container"
              style={styles.resturantRatingContainer}>
              <Text style={styles.rating}>4.5</Text>
              <Image
                source={require('../../assets/images/star.png')}
                style={{width: 20, height: 20}}
              />
            </View>
          </View>
          <Text style={styles.resturantDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the..
          </Text>
        </View>
        <View
          class="restaurant-meta-details"
          style={{
            marginHorizontal: 15,
            marginBottom: heightToDp(25),
          }}>
          <View class="restaurant-meta-tabs" style={styles.btnsContainer}>
            <LinearGradient
              colors={gradientColors}
              useAngle={true}
              angle={300}
              style={styles.aboutLinear}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <TouchableOpacity
                style={[
                  styles.circleGradient,
                  activeTab === 'about' && styles.active,
                ]}
                onPress={() => {
                  handleAboutToggle();
                }}>
                <Text
                  style={[
                    styles.menuTxt,

                    activeTab !== 'review' && styles.menuActiveTxt,
                  ]}>
                  About
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            {/* <HamBurgerButton /> */}
            <LinearGradient
              colors={gradientColors}
              useAngle={true}
              angle={300}
              style={styles.reviewLinear}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <TouchableOpacity
                style={[
                  styles.circleGradient,
                  activeTab === 'review' && styles.active,
                ]}
                onPress={() => {
                  handleReviewToggle();
                }}>
                <Text
                  style={[
                    styles.menuTxt,
                    activeTab !== 'about' && styles.menuActiveTxt,
                  ]}>
                  Review
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {renderScreen()}
        </View>
      </ScrollView>
    </View>
  );
};

export default Restaurant;
