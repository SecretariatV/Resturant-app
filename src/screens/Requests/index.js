import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import {BottomSheet} from '@rneui/themed';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import ButtonsCommonAlt from '../../components/Buttons/ButtonCommonAlt';
import {Colors} from '../../theme';
import {fonts} from '../../theme/FontFamily.js';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';
import Footer from '../../components/Footer/index.js';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Requests = () => {
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const [showFilter, setShowFilter] = useState(true);
  useEffect(() => {
    console.log('called');

    // Call only when screen open or when back on screen
    if (isFocused) {
      setShowFilter(true);
    }
  }, [isFocused]);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <BackgroundLayout />
      <View
        style={{
          flex: 1,

          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <Text>Requests</Text>
      </View>
      <BottomSheet modalProps={{}} isVisible={showFilter}>
        <View
          style={{
            // backgroundColor: 'green',
            height: heightToDp(100),
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>
          <Image
            // className="restaurant-filter-bg"
            // style={styles.restaurantFilterBg}
            style={{
              height: heightToDp(100),
              width: widthToDp(100),
              // resizeMode: 'stretch',
              position: 'absolute',
              bottom: 0,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              // backgroundColor: 'red',
            }}
            source={require('../../assets/images/bottom_bg.png')}
          />
          <View style={{marginHorizontal: 15, marginTop: 20}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: Colors.WHITE,
                  fontFamily: fonts.URBANIST_BOLD,
                  marginBottom: 15,
                }}>
                Request
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setShowFilter(false);
                  navigation.goBack();
                }}>
                <CloseFilterBtn width={20} height={20} />
              </TouchableOpacity>
            </View>
            <View>
              <ButtonsCommon
                btnText={'Call waiter'}
                containerStyle={{marginTop: 10}}
                btnTextStyle={{marginLeft: 10}}
                img
                imageSource={require('../../assets/images/waiter.png')}
                btnStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <ButtonsCommon
                btnText={'Coal change'}
                containerStyle={{marginTop: 10}}
                btnTextStyle={{marginLeft: 10}}
                img
                imageSource={require('../../assets/images/coal.png')}
                btnStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />

              <ButtonsCommon
                btnText={'Ashtray'}
                containerStyle={{marginTop: 10}}
                btnTextStyle={{marginLeft: 20}}
                img
                imageSource={require('../../assets/images/ashtray.png')}
                btnStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
          </View>
        </View>
      </BottomSheet>
      <Footer />
    </View>
  );
};

export default Requests;
