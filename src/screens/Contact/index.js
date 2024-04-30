import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import FancyInput from '../../components/FancyInput';
import emailIcon from '../../assets/images/emailIcon.png';
import tele from '../../assets/images/tele.png';

import {width, widthToDp} from '../../utils/Dimensions';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import {commonStyles} from '../../theme';
import Facebook from '../../assets/images/fb.svg';
import Twitter from '../../assets/images/twittter.svg';
import Instagram from '../../assets/images/instagram.svg';
import Youtube from '../../assets/images/youtube.svg';
import Browser from '../../assets/images/browser.svg';
import RestaurantButton from '../../components/Buttons/RestaurantButton';

const Contact = () => {
  const [inputName, setInputName] = useState('123-456-789');
  const [inputLname, setInputLname] = useState('Anderson');
  const [inputUname, setInputUname] = useState('info@shareabill.coom');
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={commonStyles.headerText}>Contact Us</Text>}
        slotRight={<></>}
      />
      <TouchableOpacity
        class="menu-item-smallbox"
        style={styles.menuItemSmallbox}>
        <View style={{alignItems: 'center'}}>
          <FancyInput
            iconImage={emailIcon}
            //   fieldLabel="User name"
            fieldValue={inputUname}
            fieldPlaceHolder="Enter your Username"
            fieldCallback={setInputUname}
            containerStyle={{width: widthToDp(80), marginBottom: 10}}
            editable={false}
          />
          <FancyInput
            iconImage={tele}
            fieldValue={inputName}
            fieldPlaceHolder="Enter your First name"
            fieldCallback={setInputName}
            containerStyle={{width: widthToDp(80)}}
            editable={false}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            width: '100%',
            alignItems: 'center',
            marginVertical: 10,
            // backgroundColor: 'red',
          }}>
          <Facebook style={{marginLeft: 10}} />
          <Twitter style={{marginLeft: 10}} />

          <Instagram style={{marginLeft: 10}} />

          <Youtube style={{marginLeft: 10}} />

          <Browser style={{marginLeft: 10}} />
        </View>
      </TouchableOpacity>
      <RestaurantButton
        icon
        btnText={'Live Chat'}
        style={{
          width: widthToDp(90),
          marginTop: 15,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export default Contact;
