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
import BackgroundLayout from '../../components/BackgroundLayout';
import {styles} from './styles';
import MenuBg from '../../assets/images/tabbar-center.svg';
import {height, heightToDp, widthToDp} from '../../utils/Dimensions';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import Clock from '../../assets/images/clock.svg';
import Dress from '../../assets/images/dress.svg';

import resturant_cover from '../../assets/images/restaurant_cover.png';
import ToggleButton from '../../components/ToggleButton';
import FadedSeparator from '../../components/FadedSeparator';
import {Colors} from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
// import {Button} from '@rneui/base';
import {ListItem} from '@rneui/themed';
import ResturantCard from '../../components/RestaurantCard';
import ReviewCard from '../../components/ReviewCard';

const Restaurant = () => {
  const dressCode = [
    {
      codeType: 'Smart casual',
    },
    {
      codeType: 'Casual',
    },
    {
      codeType: 'Formal',
    },
    {
      codeType: 'Smart casual',
    },
    {
      codeType: 'Smart casual',
    },
  ];

  const cuisine = [
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
    {
      type: 'Italian',
    },
  ];
  const ageGroup = [
    {
      age: 'Kids allowed,',
    },
    {
      age: 'couples & groups',
    },
  ];

  const reviewObj = [
    {
      name: 'abc',
      time: '2 mins ago',
      detail:
        'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
    },

    {
      name: 'abc',
      time: '2 mins ago',
      detail:
        'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
    },

    {
      name: 'abc',
      time: '2 mins ago',
      detail:
        'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
    },

    {
      name: 'abc',
      time: '2 mins ago',
      detail:
        'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
    },
  ];
  const [about, setAbout] = useState(true);
  const [review, setReview] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

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
    Animated.timing(contentHeight, {
      toValue: newValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <MenuBg
        width={widthToDp(100)}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 1,
        }}
      />
      <ImageBackground
        source={resturant_cover}
        // resizeMode="cover"
        style={{
          width: widthToDp(100),
          height: heightToDp(100),
        }}>
        <HeaderModed
          slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
          slotCenter={<></>}
          slotRight={<></>}
        />
        <View
          style={{
            justifyContent: 'flex-end',
            height: heightToDp(70),
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: widthToDp(100),
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.resturantName}>Restaurant Name</Text>
            <View style={{flexDirection: 'row', marginRight: 15}}>
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
      </ImageBackground>
      <ScrollView>
        <View style={{marginHorizontal: 15}}>
          <View style={styles.btnsContainer}>
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
                  }}>
                  <ListItem
                    onPress={toggleAccordion}
                    // containerStyle={{
                    //   backgroundColor: 'transparent',
                    //   padding: 0,
                    //   margin: 0,
                    // }}

                    containerStyle={styles.review_btn}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.rating_type}>Excellent</Text>
                        <View style={styles.review_tag}></View>
                      </View>

                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          source={require('../../assets/images/Star_2.png')}
                        />
                        <Text style={styles.rating_no}>4.0</Text>
                        <Image
                          source={require('../../assets/images/chevron_down.png')}
                          // width={10}
                        />
                      </View>
                    </View>

                    <ListItem.Content>
                      {/* <Icon
              name={isCollapsed ? 'chevron-down' : 'chevron-up'}
              type='entypo'
              color='white'
              size={24}
            /> */}
                    </ListItem.Content>
                  </ListItem>
                </LinearGradient>

                {!isCollapsed && (
                  <View style={{padding: 10}}>
                    {/* <Text>{'content'}</Text> */}
                    <FlatList
                      data={reviewObj}
                      renderItem={({item}) => (
                        <ReviewCard
                          name={item.name}
                          time={item.time}
                          detail={item.detail}
                        />
                      )}
                    />
                    {/* <ReviewCard /> */}
                  </View>
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Restaurant;
