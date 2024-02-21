import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import heart from '../../assets/images/heart.png';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import Search from '../../components/Search';
import {Colors} from '../../theme';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const MenuDetail = () => {
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
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
        slotCenter={<Text>Menu</Text>}
        slotRight={
          <MenuNavButton
            icon={heart}
            iconType="image"
            iconStyle={{
              width: widthToDp(8),
              height: widthToDp(8),
              margin: 5,
            }}
          />
        }
      />
      <View style={{height: widthToDp(60), width: widthToDp(100)}}>
        <Swiper
          style={{}}
          //   width={widthToDp(100)}
          //   height={200}
          //   containerStyle={{height: 100}}
          // showsButtons={}
          loop={false}
          showsPagination={true}>
          {menuSwipe.map((item, index) => (
            <View style={styles.slide1}>
              <Image source={item.imgUrl} />
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  width: widthToDp(80),
                }}>
                <View
                  style={{
                    backgroundColor: '#5D5D66',
                    padding: 10,
                    //   width: widthToDp(20),
                    borderRadius: 100,
                  }}>
                  <Text style={{color: Colors.WHITE}}>AR</Text>
                </View>
              </View>
            </View>
          ))}

          {/* <View style={styles.slide2}>
            <Image source={require('../../assets/images/burger_one.png')} />
          </View> */}
        </Swiper>

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
            <Text style={styles.resturantName}>Burger</Text>
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
      </View>
    </View>
  );
};

export default MenuDetail;
