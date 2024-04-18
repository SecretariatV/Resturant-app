import {View, Text, Image, TextInput, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';

import {heightToDp, widthToDp} from '../../utils/Dimensions';
import HeaderModed from '../../components/HeaderModed';

import BackgroundCard from '../../components/BackgroundCard';
import {cartData, dressCode} from '../../utils/demodata';
import Counter from '../../components/Counter';
import {Colors} from '../../theme';
// import SwipeableList from 'react-native-swipeable-list';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import {fonts} from '../../theme/FontFamily.js';
import RestaurantButton from '../../components/Buttons/RestaurantButton/index.js';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Modal} from 'react-native';
import GradientText from '../../components/GradientText/index.js';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton/index.js';

const Cart = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handlePress = () => {
    navigation.navigate('MenuDetail');
  };
  const [data, setData] = useState([
    {key: 'item1'},
    {key: 'item2'},
    {key: 'item3'},
    // Add more items as needed
  ]);
  const keyExtractor = (item, index) => index.toString();

  const FullScreenModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        // onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <Image source={require('../../assets/images/spoon.png')} />

          <GradientText style={styles.customizeTxt}>
            This item has been customized, Are you sure you want to delete it?
          </GradientText>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <ButtonsCommon
              btnText={'Cancel'}
              containerStyle={{width: '40%', marginRight: 15}}
              onPress={() => setIsModalVisible(false)}
            />
            <ButtonsCommon
              btnText={'OK'}
              containerStyle={{width: '40%', marginLeft: 15}}
              onPress={() => setIsModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <BackgroundLayout />

      {isModalVisible ? FullScreenModal() : <></>}
      <HeaderModed
        //headerStyle={{marginLeft: getPlatformSpecificValue(15, 0)}}
        slotLeft={<HamBurgerButton />}
        slotCenter={
          <Text
            style={{
              fontFamily: fonts.URBANIST_BOLD,
              fontSize: 16,
              color: Colors.WHITE,
            }}>
            Confirm Order
          </Text>
        }
        slotRight={<></>}
      />
      <ScrollView>
        {cartData.map((item, index) => (
          <BackgroundCard
            style={{marginTop: 10, marginHorizontal: 10}}
            childrenStyle={{borderRadius: 26}}
            linearBackStyle={{borderRadius: 26}}>
            <View
              style={{
                marginHorizontal: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  // marginTop: 15,
                  marginVertical: 10,
                  alignItems: 'center',
                  // justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',

                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#303F43',
                      borderRadius: 8,
                    }}>
                    <Image
                      source={require('../../assets/images/burger_one.png')}
                      style={{width: widthToDp(20), height: heightToDp(20)}}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{}}>
                    <Text style={[styles.navbarPageTitle, {marginLeft: 10}]}>
                      {item.productName}
                    </Text>
                    <Text
                      style={[
                        styles.priceStyle,
                        {marginLeft: 10, marginTop: 5},
                      ]}>
                      ${item.price}
                    </Text>
                  </View>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      // backgroundColor: 'red',
                      alignItems: 'center',
                      marginLeft: 10,

                      // backgroundColor: 'green',
                    }}>
                    <Counter
                      minusContainerStyle={{
                        height: heightToDp(7),
                        width: widthToDp(7),
                        borderRadius: 8,
                      }}
                      plusContainerStyle={{
                        height: heightToDp(7),
                        width: widthToDp(7),
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
            </View>
          </BackgroundCard>
        ))}
        <View
          style={{
            width: '95%',
            alignItems: 'flex-end',
            marginTop: 15,
            // m,
          }}>
          <ButtonsCommon
            btnText={'Add more items'}
            onPress={() => navigation.navigate('RestaurantMenu')}
          />
        </View>

        <Text
          style={{
            fontFamily: fonts.URBANIST_BOLD,
            fontSize: 22,
            color: Colors.WHITE,
            marginLeft: 15,
          }}>
          Special Request
        </Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={{
              height: 120,
              width: '95%',
              color: '#fff',

              // backgroundColor: 'red',
              borderWidth: 1,
              borderColor: '#FFFFFF33',
              marginHorizontal: 15,
              paddingLeft: 10,
              paddingTop: 10,
              borderRadius: 18,
              // marginLeft: 50,
              // marginRight: 50,
              alignSelf: 'center',
              marginVertical: 10,
              // textAlignVertical: top',
            }}
            placeholder="type here"
            placeholderTextColor="#FFFFFF33"
            multiline={true}
          />

          <RestaurantButton
            btnText={'Order now'}
            style={{width: '95%'}}
            onPress={() => navigation.navigate('PaymentOption')}
          />
        </View>

        <GradientText style={styles.triedTxt}>People Also Tried</GradientText>

        {/* {itemListType === 'top' && ( */}
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
                marginBottom: 10,
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
                <View style={[styles.circleTwoGradient]}>
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
        {/* )} */}
        {/* <SwipeableList
        data={cartData}
        keyExtractor={keyExtractor}
        renderItem={item => (
          <BackgroundCard>
            <View
              style={
                // marginHorizontal: 15,
                styles.row
                // alignItems: 'center',
                // justifyContent: 'center',
              }>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  // marginTop: 15,
                  marginVertical: 10,
                  alignItems: 'center',
                  // justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#303F43',
                      borderRadius: 8,
                    }}>
                    <Image
                      source={require('../../assets/images/burger_one.png')}
                      style={{width: widthToDp(30), height: heightToDp(30)}}
                    />
                  </View>

                  <Text style={[styles.navbarPageTitle, {marginLeft: 10}]}>
                    {item.productName}
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      // backgroundColor: 'red',
                      alignItems: 'center',
                      marginLeft: 10,

                      // backgroundColor: 'green',
                    }}>
                    <Counter
                      minusContainerStyle={{
                        height: heightToDp(7),
                        width: widthToDp(7),
                        borderRadius: 8,
                      }}
                      plusContainerStyle={{
                        height: heightToDp(7),
                        width: widthToDp(7),
                        borderRadius: 8,
                        backgroundColor: Colors.GREEN,
                      }}
                      counterTextStyle={{margin: 15}}
                      minusStyle={{width: 10, height: 2}}
                      plusStyle={{width: 10, height: 10}}
                    />

                    <Text style={styles.priceStyle}>$5</Text>
                  </View>
                </View>
              </View>
            </View>
          </BackgroundCard>
        )}
        renderLeft={({item, index}) => (
          <TouchableOpacity
            onPress={() => handleDeleteItem(index)}
            style={[styles.swipeItem, styles.swipeLeftItem]}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        )}
        // backgroundColor={'transparent'}
      />

      {/* <SwipeableList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text>{item.key}</Text>
          </View>
        )}
        renderLeft={({item, index}) => (
          <TouchableOpacity
            onPress={() => handleDeleteItem(index)}
            style={[styles.swipeItem, styles.swipeLeftItem]}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        )}
        backgroundColor={'transparent'}
      /> */}
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default Cart;
