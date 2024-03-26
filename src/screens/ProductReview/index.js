import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import BackgroundCard from '../../components/BackgroundCard';
import {cartData} from '../../utils/demodata';
import {fonts} from '../../theme/FontFamily';
import {Rating} from 'react-native-ratings';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import ButtonsCommonAlt from '../../components/Buttons/ButtonCommonAlt';
import {width, widthToDp} from '../../utils/Dimensions';
import Footer from '../../components/Footer';
import {Modal} from 'react-native';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';
import FancyInput from '../../components/FancyInput';
import userIcon from '../../assets/images/userIcon.png';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton/index.js';

const ProductReview = () => {
  const [text, setText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [inputEmail, setInputEmail] = useState('');

  const FullScreenModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}

        // onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          {/* <Image source={require('../../assets/images/spoon.png')} /> */}
          <View
            style={{
              backgroundColor: '#FFFFFF33',
              width: '90%',
              borderRadius: 24,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={{alignSelf: 'flex-end', margin: 10}}>
              <CloseFilterBtn width={27} height={27} />
            </TouchableOpacity>
            <Text style={styles.improveText}>
              Please enter your name for feedback submission{' '}
            </Text>

            <FancyInput
              fieldInputStyle={{width: '80%'}}
              iconImage={userIcon}
              // fieldLabel="Email"
              fieldValue={inputEmail}
              fieldPlaceHolder="Name"
              fieldCallback={setInputEmail}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <ButtonsCommon
                btnText={'Done'}
                containerStyle={{width: '90%', marginBottom: 20}}
                onPress={() => setIsModalVisible(false)}
              />
            </View>
          </View>

          {/* <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              This is the content of the modal
            </Text>
            <TouchableOpacity
            //  onPress={onClose}
            >
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      {isModalVisible ? FullScreenModal() : <></>}

      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<></>}
        slotRight={<></>}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 25,
            marginBottom: 150, //margin bottom is applying kynke btns footer ke neeche aa rahe he
            // backgroundColor: 'red',
          }}>
          <Text style={styles.improveText}>
            Let us know how to improve our items
          </Text>

          {cartData.map((item, index) => (
            <View>
              <BackgroundCard
                style={{marginTop: 10, marginHorizontal: 5}}
                childrenStyle={{borderRadius: 26}}
                linearBackStyle={{borderRadius: 26}}>
                <View
                  style={{
                    marginHorizontal: 15,
                  }}>
                  <View style={styles.myOrderContainer}>
                    <View style={styles.myOrderSubContainer}>
                      <View style={styles.productContainer}>
                        <Image
                          source={require('../../assets/images/burger_one.png')}
                          style={styles.productImg}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{}}>
                        <Text style={[styles.productName, {marginLeft: 10}]}>
                          {item.productName}
                        </Text>
                      </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.qtyContainer}>
                        <Rating
                          imageSize={20}
                          ratingCount={5}
                          tintColor="#1A2D30"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </BackgroundCard>
              <TextInput
                multiline
                numberOfLines={4} // adjust as needed
                onChangeText={setText}
                value={text}
                style={styles.input}
                placeholder="type here"
                placeholderTextColor={'#999AA0'}
              />
            </View>
          ))}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            {/* <ButtonsCommon
              btnText={'Cancel'}
              btnStyle={{width: widthToDp(40)}}
              onPress={() => setIsVisible(true)}
              containerStyle={
                {
                  // marginRight: 10,
                }
              }
              // onPress={() => handleClose()}
            /> */}
            {/* <ButtonsCommonAlt
              btnText={'Send'}
              btnStyle={{width: widthToDp(100)}}
              // containerStyle={{backgroundColor: 'red'}}
              onPress={() => Alert.alert('ssadassds')}

              // containerStyle={{marginLeft: 10}}
            /> */}

            <ButtonsCommon
              btnText={'Done'}
              btnStyle={{width: widthToDp(40)}}
              containerStyle={{marginRight: 10}}
            />
            <ButtonsCommonAlt
              btnText={'Cancel'}
              btnStyle={{width: widthToDp(40)}}
              containerStyle={{marginLeft: 10}}
              onPress={() => handleClose()}
            />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default ProductReview;
