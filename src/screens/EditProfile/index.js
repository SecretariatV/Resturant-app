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
import tiktokIcon from '../../assets/images/tiktok.png';
import instagramIcon from '../../assets/images/instagram.png';
import snapchatIcon from '../../assets/images/snapchat.png';
import fbLoginIcon from '../../assets/images/fbLoginIcon.png';
import gLoginIcon from '../../assets/images/gLoginIcon.png';
import aLoginIcon from '../../assets/images/aLoginIcon.png';
import {useNavigation} from '@react-navigation/native';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import BackButton from '../../components/NavButtons/BackButton/index.js';
import {widthToDp} from '../../utils/Dimensions.js';
import {fonts} from '../../theme/FontFamily.js';
import Colors from '../../theme/Colors.js';

const EditProfile = ({showMenu}) => {
  const navigation = useNavigation();

  const [inputName, setInputName] = useState('Mark');
  const [inputLname, setInputLname] = useState('Anderson');
  const [inputUname, setInputUname] = useState('mkAnderson');

  const [about, setAbout] = useState(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  );
  const [instagram, setInstagram] = useState('www.instagram.com/username');
  const [snapchat, setSnapchat] = useState('www.snapchat.com/username');
  const [tiktok, setTiktok] = useState('www.tiktok.com/username');

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
          slotCenter={
            <Text
              style={{
                fontFamily: fonts.URBANIST_BOLD,
                fontSize: 22,
                color: Colors.WHITE,
              }}>
              Edit Profile
            </Text>
          }
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
              fieldLabel="User name"
              fieldValue={inputUname}
              fieldPlaceHolder="Enter your Username"
              fieldCallback={setInputUname}
            />
            <FancyInput
              iconImage={userIcon}
              fieldLabel="First name"
              fieldValue={inputName}
              fieldPlaceHolder="Enter your First name"
              fieldCallback={setInputName}
            />
            <FancyInput
              iconImage={userIcon}
              fieldLabel="Last name"
              fieldValue={inputLname}
              fieldPlaceHolder="Enter your Last name"
              fieldCallback={setInputLname}
            />

            <FancyInput
              iconImage={userIcon}
              fieldLabel="About Me"
              fieldValue={about}
              fieldPlaceHolder="About"
              fieldCallback={setAbout}
              multiline={true}
            />

            <Text
              style={{
                fontFamily: fonts.URBANIST_MEDIUM,
                color: Colors.WHITE,
                fontSize: 20,
              }}>
              Link Social Media Accounts
            </Text>

            <FancyInput
              iconImage={instagramIcon}
              fieldLabel="Instagram"
              fieldValue={instagram}
              fieldPlaceHolder="Instagram"
              fieldCallback={setInstagram}
            />
            <FancyInput
              iconImage={snapchatIcon}
              fieldLabel="Snapchat"
              fieldValue={snapchat}
              fieldPlaceHolder="Snapchat"
              fieldCallback={setSnapchat}
            />
            <FancyInput
              iconImage={tiktokIcon}
              fieldLabel="Tiktok"
              fieldValue={tiktok}
              fieldPlaceHolder="Tiktok"
              fieldCallback={setTiktok}
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
