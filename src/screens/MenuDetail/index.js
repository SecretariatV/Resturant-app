import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import Fav from '../../assets/images/fav.png';

import heart from '../../assets/images/heart.png';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import Search from '../../components/Search';
import {Colors} from '../../theme';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import Counter from '../../components/Counter';
import Ar from '../../assets/images/ar.svg';
import BackgroundCard from '../../components/BackgroundCard';
import RestaurantButton from '../../components/Buttons/RestaurantButton';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import ButtonsCommonAlt from '../../components/Buttons/ButtonCommonAlt';
import {ListItem} from '@rneui/themed';
import ReviewCard from '../../components/ReviewCard/index.js';
import {reviews} from '../../utils/demodata.js';
import {useNavigation} from '@react-navigation/native';

const MenuDetail = () => {
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState(true);

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

  const handleSelectIngredient = () => {
    navigation.navigate('IngredientCustomization');
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
        slotCenter={<Text style={styles.headerText}>Menu</Text>}
        slotRight={
          // <Fav width={100} height={100} />
          <MenuNavButton
            containerStyle={{width: 60}}
            icon={Fav}
            iconType="image"
            iconStyle={{
              width: widthToDp(8),
              height: widthToDp(8),
              // margin: 5,
            }}
          />
        }
      />
      <View
        style={{
          height: heightToDp(60),
          width: widthToDp(100),
          marginTop: 70,
        }}>
        <Swiper style={{}} loop={false} showsPagination={true}>
          {menuSwipe.map((item, index) => (
            <View style={styles.slide1} key={index}>
              <Image source={item.imgUrl} resizeMode="cover" style={{}} />
              <View style={styles.arContainer}>
                <Ar width={30} height={30} />
              </View>
            </View>
          ))}
        </Swiper>
      </View>
      <ScrollView>
        <View style={styles.menuContainer}>
          <View style={styles.menuSubContainer}>
            <Text style={styles.resturantName}>Burger</Text>

            <Text style={styles.rating}>4.5</Text>
            <Image
              source={require('../../assets/images/star.png')}
              style={{width: 20, height: 20}}
            />
          </View>
          <Text style={styles.price}>$50</Text>
        </View>
        <Text style={styles.resturantDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the..
        </Text>

        <Text style={styles.readyTxt}>Ready in 15 Min</Text>
        <Text style={styles.quantityTxt}>Select Quantity</Text>
        <Counter />
        <View style={{marginHorizontal: 15, marginBottom: 10}}>
          <RestaurantButton
            btnText={'Select Ingredients'}
            onPress={() => handleSelectIngredient()}
          />

          <BackgroundCard style={styles.backgroundBtnContainer}>
            <Text style={styles.quantityTxt}>Customization</Text>
            <RestaurantButton
              btnText={'Spicy Level'}
              style={{width: '90%', marginTop: 10, borderRadius: 16}}
            />
            <View style={styles.levelContainer}>
              <TouchableOpacity>
                <Text style={styles.levelTxt}>Low</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.levelTxt}>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.levelTxt}>High</Text>
              </TouchableOpacity>
            </View>

            <RestaurantButton
              btnText={'Portion size'}
              style={{width: '90%', marginTop: 10, borderRadius: 16}}
            />
            <View style={styles.levelContainer}>
              <TouchableOpacity>
                <Text style={styles.levelTxt}>Low</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.levelTxt}>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.levelTxt}>High</Text>
              </TouchableOpacity>
            </View>
          </BackgroundCard>
          <View style={styles.customBtns}>
            <ButtonsCommon
              btnText={'Quick Order'}
              containerStyle={{width: widthToDp(40), marginTop: 10}}
              btnStyle={{borderRadius: 22}}
              linearTextStyle={{borderRadius: 22}}
            />

            <ButtonsCommonAlt
              btnText={'Add to Cart'}
              containerStyle={{width: widthToDp(40), marginTop: 10}}
              btnStyle={{borderRadius: 22}}
              linearTextStyle={{borderRadius: 22}}
            />
          </View>

          <View style={{marginBottom: 10}}>
            <View>
              {/* <TouchableOpacity
                onPress={() => {
                  setExpanded(!expanded);
                }}> */}
              <LinearGradient
                colors={['#00000022', '#FFFFFFFF', '#FFFFFFFF']}
                // colors={['#040B1B', '#045386']}
                style={{borderRadius: 18, flexWrap: 'nowrap', margin: 1}}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <TouchableOpacity
                  style={styles.review_btn}
                  // style={[styles.circleGradient, btnStyle]}
                  onPress={() => {
                    setExpanded(!expanded);

                    // handleClick();
                    // toggleAccordion();
                    console.log('first');
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.rating_type}>Excellent</Text>
                    {/* <View style={styles.review_tag}></View> */}
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/images/Star_2.png')} />
                    {/* <Text style={styles.rating_no}>4.0</Text> */}
                    <Image
                      source={require('../../assets/images/chevron_down.png')}
                      // width={10}
                    />
                  </View>
                </TouchableOpacity>
                {/* <Text style={{color: 'white'}}>{'sakdmsa'}</Text> */}
              </LinearGradient>
              {/* </TouchableOpacity> */}
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
                // <View style={{backgroundColor: 'white', padding: 15}}>
                //   <Text>{'ksdmaskms'}</Text>
                // </View>
              )}
            </View>
            {/* <ListItem.Accordion
              // onPress={toggleAccordion}
              isExpanded={expanded}
              onPress={() => {
                setExpanded(!expanded);
              }}
              containerStyle={styles.review_btn}>
              <ListItem.Content>
                <FlatList
                  data={reviews}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <ReviewCard
                      name={item.name}
                      time={item.time}
                      detail={item.detail}
                    />
                  )}
                />
              </ListItem.Content>
            </ListItem.Accordion> */}

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
        </View>
      </ScrollView>
    </View>

    // </View>
  );
};

export default MenuDetail;
