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
          <Image
            source={require('../../assets/images/fb2.png')}
            // style={{marginHorizontal: 10, width: 32, height: 32}}
            style={{marginLeft: 10}}
          />
          <Image
            source={require('../../assets/images/twitter.png')}
            style={{marginLeft: 20}}
            // style={{marginHorizontal: 10, width: 50, height: 32}}
          />

          <Image
            source={require('../../assets/images/instagram.png')}
            // style={{marginHorizontal: 10, width: 32, height: 32}}
            style={{marginLeft: 20}}
          />

          <Image
            source={require('../../assets/images/youtube.png')}
            style={{marginLeft: 20}}

            // style={{marginHorizontal: 10, width: 32, height: 32}}
          />

          <Image
            source={require('../../assets/images/browser.png')}
            style={{marginLeft: 20}}
            // style={{marginHorizontal: 10, width: 32, height: 32}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
