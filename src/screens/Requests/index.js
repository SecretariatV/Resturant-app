import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import {BottomSheet} from '@rneui/themed';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';
import Footer from '../../components/Footer/index.js';
import {styles} from './styles.js';

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
    <View style={styles.container}>
      <BackgroundLayout />
      <View style={styles.requestContainer}>
        <Text>Requests</Text>
      </View>
      <BottomSheet modalProps={{}} isVisible={showFilter}>
        <View style={styles.bottomSheetContainer}>
          <Image
            style={styles.bottomImg}
            source={require('../../assets/images/bottom_bg.png')}
          />
          <View style={styles.bottomView}>
            <View style={styles.bottomSubView}>
              <Text style={styles.requestText}>Request</Text>
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
                btnStyle={styles.btnStyle}
              />
              <ButtonsCommon
                btnText={'Coal change'}
                containerStyle={{marginTop: 10}}
                btnTextStyle={{marginLeft: 10}}
                img
                imageSource={require('../../assets/images/coal.png')}
                btnStyle={styles.btnStyle}
              />

              <ButtonsCommon
                btnText={'Ashtray'}
                containerStyle={{marginTop: 10}}
                btnTextStyle={{marginLeft: 20}}
                img
                imageSource={require('../../assets/images/ashtray.png')}
                btnStyle={styles.btnStyle}
              />
            </View>
          </View>
        </View>
      </BottomSheet>
      {/* <Footer /> */}
    </View>
  );
};

export default Requests;
