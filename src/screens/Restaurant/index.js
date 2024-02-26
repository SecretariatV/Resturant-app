import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {styles} from './styles';
import {height, heightToDp, widthToDp} from '../../utils/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {ListItem} from '@rneui/themed';

import BackgroundLayout from '../../components/BackgroundLayout';
import MenuBg from '../../assets/images/tabbar-center.svg';

import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import Clock from '../../assets/images/clock.svg';
import Dress from '../../assets/images/dress.svg';


import resturant_cover from '../../assets/images/restaurant_cover.png';
import ToggleButton from '../../components/ToggleButton';
import FadedSeparator from '../../components/FadedSeparator';
import {Colors} from '../../theme';
// import {Button} from '@rneui/base';
import ResturantCard from '../../components/RestaurantCard';
import ReviewCard from '../../components/ReviewCard';
import {reviews, ageGroup, cuisine, dressCode} from '../../utils/demodata';
import Footer from '../../components/Footer';

const Restaurant = () => {
  const [about, setAbout] = useState(false);
  const [review, setReview] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [contentHeight, setContentHeight] = useState(new Animated.Value(0));
  const handleAboutToggle = () => {
    console.log('here');
    setAbout(true);
    setReview(false);
  };

  const handleReviewToggle = () => {
    console.log('here');
    setAbout(false);
    setReview(true);
  };

  // const toggleAccordion = () => {
  // };
  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);

    const newValue = expanded ? 0 : 100; // Change 100 to your desired height
    setExpanded(!expanded);
    // Animated.timing(contentHeight, {
    //   toValue: newValue,
    //   duration: 300,
    //   useNativeDriver: false,
    // }).start();
  };


  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
        slotCenter={<></>}
        slotRight={<></>}
        bannerImage={
          <ImageBackground
            source={resturant_cover}
            style={styles.bannerImage}
          />
        }
      />
      <ScrollView style={styles.restaurantScrollView}  >
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
        <View class="restaurant-meta-details" style={{marginHorizontal: 15}}>
          <View class="restaurant-meta-tabs" style={styles.btnsContainer}>
            <ToggleButton
              name={'About'}
              onPress={() => handleAboutToggle()}
              show={false}
            />
            <ToggleButton
              name={'Reviews'}
              onPress={() => handleReviewToggle()}
            />
          </View>
          {!about && (
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
              <View
                style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
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
                <Dress width={32} height={32} style={{marginRight: 5}} />
                <Text style={styles.headingText}>Cuisine Served</Text>
              </View>
              <View
                style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
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
              <Text style={styles.headingText}>Age Group</Text>
              <View
                style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
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
                <Dress width={32} height={32} style={{marginRight: 5}} />
                <Text style={styles.headingText}>Location</Text>
              </View>
              <Image source={require('../../assets/images/map.png')} />
            </>
          )}

          {review && (
            <>
              <Text style={styles.headingText}>Reviews</Text>
              {/* <LinearGradient
                colors={['#00000022', '#FFFFFFFF', '#FFFFFFFF']}
                // colors={['#040B1B', '#045386']}
                style={{borderRadius: 18, flexWrap: 'nowrap', margin: 1}}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <TouchableOpacity
                  style={styles.review_btn}
                  // style={[styles.circleGradient, btnStyle]}
                  onPress={() => {
                    // handleClick();
                    toggleAccordion();
                    console.log('first');
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

              <Animated.View
                style={{height: contentHeight, overflow: 'hidden'}}>
                <View style={{padding: 10}}>
                  <ReviewCard />

                  <ReviewCard />
                </View>
              </Animated.View> */}

              <View style={{marginBottom: 10}}>
                <ListItem.Accordion
                  // onPress={toggleAccordion}
                  isExpanded={expanded}
                  onPress={() => {
                    setExpanded(!expanded);
                  }}
                  containerStyle={styles.review_btn}>
                  <ListItem.Content>
                    <FlatList
                      data={reviews}
                      renderItem={({item}) => (
                        <ReviewCard
                          name={item.name}
                          time={item.time}
                          detail={item.detail}
                        />
                      )}
                    />
                  </ListItem.Content>
                </ListItem.Accordion>

                <LinearGradient
                  colors={['#00000022', '#FFFFFFFF', '#FFFFFFFF']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  // style={{borderRadius: 18, flexWrap: 'nowrap', margin: 1}}
                  style={{
                    padding: 0,
                    margin: 1,
                    borderRadius: 18,
                    width: '100%',
                  }}></LinearGradient>

                {!expanded && (
                  <View style={{padding: 10}}>
                    {/* <Text>{'content'}</Text> */}

                    {/* <ReviewCard /> */}
                  </View>
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default Restaurant;
