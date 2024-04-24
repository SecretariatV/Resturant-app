import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useState} from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import {styles} from './styles';
import HeaderModed from '../../components/HeaderModed';
import LinearGradient from 'react-native-linear-gradient';
import FancyText from '../../components/FancyText';
import FancyInput from '../../components/FancyInput';
import SeparatorText from '../../components/SeparatorText';
import FadedSeparator from '../../components/FadedSeparator';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// icons
import userIcon from '../../assets/images/userIcon.png';
import emailIcon from '../../assets/images/emailIcon.png';
import phoneIcon from '../../assets/images/phoneIcon.png';
import passIcon from '../../assets/images/passIcon.png';
import fbLoginIcon from '../../assets/images/fbLoginIcon.png';
import gLoginIcon from '../../assets/images/gLoginIcon.png';
import aLoginIcon from '../../assets/images/aLoginIcon.png';
import {useNavigation} from '@react-navigation/native';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import BackButton from '../../components/NavButtons/BackButton/index.js';
import {widthToDp} from '../../utils/Dimensions.js';

const EditProfile = ({showMenu}) => {
  const navigation = useNavigation();

  const [inputName, setInputName] = useState('');
  const [inputLname, setInputLname] = useState('');
  const [inputUname, setInputUname] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputPass, setInputPass] = useState('');

  // const handleImagePicker = () => {
  //   console.log('image clicked');
  //   const options = {
  //     mediaType: 'photo', // specify the media type you want to pick ('photo' or 'video')
  //     quality: 1, // 0 to 1, 1 means maximum quality
  //     includeBase64: false, // set to true if you want the image as a base64 string
  //   };

  //   launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       // Handle the selected image URI
  //       const selectedImageUri = response.uri;
  //       // You can do something with the selected image URI, for example, set it to a state variable
  //       // Example: setSelectedImage(selectedImageUri);
  //       console.log(selectedImageUri);
  //     }
  //   });
  // };
  const handleDynamicNavigation = () => {
    console.log('kmdsakas');
    // navigation.navigate('Preferences');
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <View style={{paddingHorizontal: 15, paddingBottom: widthToDp(20)}}>
        <HeaderModed
          headerStyle={{paddingHorizontal: 0}}
          slotLeft={<BackButton onPress={() => navigation.goBack()} />}
          slotCenter={<Text>Edit Profile</Text>}
          slotRight={<></>}
        />
        <ScrollView
          style={styles.regFormScrollView}
          showsVerticalScrollIndicator={false}>
          <View className="join-screen-form">
            <View className="image-uploader" style={styles.imageUploader}>
              <TouchableOpacity
              // onPress={handleImagePicker}
              >
                <Image
                  source={require('../../assets/images/picavatar.png')}
                  style={styles.picAvatar}
                />
                <View style={styles.imageUploaderPlus}>
                  <LinearGradient
                    colors={['#02ABEE6E', '#02ABEE', '#00F594']}
                    style={styles.imageUploaderGrad}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}>
                    <View style={styles.imageUploaderPluscircleGradient}>
                      <Text style={styles.imageUploaderPlusText}>+</Text>
                    </View>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </View>
            <FancyInput
              iconImage={userIcon}
              fieldLabel="First Name"
              fieldValue={inputName}
              fieldPlaceHolder="Enter your First name"
              fieldCallback={setInputName}
            />
            <FancyInput
              iconImage={userIcon}
              fieldLabel="Last Name"
              fieldValue={inputLname}
              fieldPlaceHolder="Enter your Last name"
              fieldCallback={setInputLname}
            />
            <FancyInput
              iconImage={userIcon}
              fieldLabel="User name"
              fieldValue={inputUname}
              fieldPlaceHolder="Enter your Username"
              fieldCallback={setInputUname}
            />
            <FancyInput
              iconImage={emailIcon}
              fieldLabel="Email"
              fieldValue={inputEmail}
              fieldPlaceHolder="Enter your Email"
              fieldCallback={setInputEmail}
            />
            <FancyInput
              iconImage={phoneIcon}
              fieldLabel="Phone Number"
              fieldValue={inputPhone}
              fieldPlaceHolder="Enter your Phone Number"
              fieldCallback={setInputPhone}
            />
            <FancyInput
              iconImage={passIcon}
              fieldLabel="Password"
              fieldValue={inputPass}
              fieldPlaceHolder="Password Here"
              fieldCallback={setInputPass}
              fieldIsPassword={true}
            />
          </View>
          <ButtonsCommon
            btnText={'Save'}
            onPress={() => handleDynamicNavigation()}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default EditProfile;
