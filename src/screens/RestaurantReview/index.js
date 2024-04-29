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
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import Footer from '../../components/Footer';
import {Modal} from 'react-native';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';
import FancyInput from '../../components/FancyInput';
import userIcon from '../../assets/images/userIcon.png';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton/index.js';
import Smiley from '../../assets/images/smileyTemp.svg';
import GradientText from '../../components/GradientText/index.js';
import {Slider} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import ReviewIcon from '../../assets/images/reviewIcon.svg';
import ReviewStarUnfilled from '../../assets/images/reviewStar.svg';
import ReviewStarFilled from '../../assets/images/reviewStarFilled.svg';
import {screenToTextSize} from '../../utils/helper.js';
import {useNavigation} from '@react-navigation/native';
const RestaurantReview = () => {
  const navigation = useNavigation();

  const [reviewComment, setReviewComment] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  // const [min, setmin] = useState(0);
  // const [max, setmax] = useState(100);
  const SetRatingStar = (target, valuematch) => {
    if (target >= valuematch) {
      return <ReviewStarFilled   width={35} style={{}}/>;
    } else {
      return <ReviewStarUnfilled width={35} height={39} style={{position: 'relative', top: 1}} />;
    }
  };

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<></>}
        slotRight={<></>}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 15}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 25,
            marginBottom: 150,
          }}>
          <Smiley />
          <Text style={styles.reviewTextSmall}>How was your experience at</Text>

          <GradientText style={styles.reviewTextLarge}>
            Restaurant Name
          </GradientText>

          <View class="restaurant-review-star-container">
            <View
              style={styles.reviewRateContainer}
              class="review-rate-container">
              <TouchableOpacity
                onPress={() => setReviewRating(1)}
                class="review-labe"
                style={styles.reviewLabelContainer}>
                {SetRatingStar( reviewRating, 1)}
                <Text style={styles.reviewTextLabel}>Bad</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setReviewRating(2)}
                class="review-labe"
                style={styles.reviewLabelContainer}>
                {SetRatingStar( reviewRating, 2)}
                <Text style={styles.reviewTextLabel}>Not Bad</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setReviewRating(3)}
                class="review-labe"
                style={styles.reviewLabelContainer}>
                {SetRatingStar( reviewRating, 3)}
                <Text style={styles.reviewTextLabel}>Okay</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setReviewRating(4)}
                class="review-labe"
                style={styles.reviewLabelContainer}>
                {SetRatingStar( reviewRating, 4)}
                <Text style={styles.reviewTextLabel}>Good</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setReviewRating(5)}
                class="review-labe"
                style={styles.reviewLabelContainer}>
                {SetRatingStar( reviewRating, 5)}
                <Text style={styles.reviewTextLabel}>Happy</Text>
              </TouchableOpacity>
            </View>
            {/* <View class="slider-container">
              <View
                class="slider-bar-container"
                style={{position: 'relative', marginBottom: 30}}>
                <Slider
                  style={{
                    width: widthToDp(90),
                    height: 40,
                    position: 'relative',
                    left: screenToTextSize(4),
                  }}
                  minimumValue={min}
                  maximumValue={max}
                  // value={progress}
                  step={25}
                  stepLabel={[
                    0,
                    '0%',
                    25,
                    '25%',
                    50,
                    '50%',
                    75,
                    '75%',
                    100,
                    '100%',
                  ]}
                  value={reviewRating}
                  minimumTrackTintColor="transparent"
                  maximumTrackTintColor="transparent"
                  thumbTintColor="transparent"
                  onValueChange={val => {
                    console.log(val, reviewRating);
                    setReviewRating(val);
                    return true;
                  }}
                  thumbProps={{
                    children: (
                      <ReviewIcon
                        style={{position: 'absoulte', top: 10, left: -5}}
                      />
                    ),
                  }}
                />
                <View class="active-order-bar-bg" style={styles.sliderGradBar}>
                  <LinearGradient
                    class="intro-active-orders"
                    colors={['#039470', '#034253', '#022841', '#024469']}
                    useAngle={true}
                    angle={45}
                    style={{
                      borderRadius: 10,
                      flexWrap: 'nowrap',
                      height: 8,
                      width: '100%',
                      left: screenToTextSize(4),
                      // maxWidth: widthToDp(75),
                    }}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}></LinearGradient>
                </View>
              </View>
              
              <View
                style={{
                  width: widthToDp(85),
                  justifyContent: 'start',
                  alignContent: 'center',
                }}></View>
            </View> */}
            <View class="review-commentbox-contaier">
              <GradientText style={styles.reviewTextCommentLabel}>
                Let Us Know How We Can Serve You Better
              </GradientText>
              {/* <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#cccccc55',
                  borderRadius: 26,
                  marginBottom: 20,
                  marginTop: 15,
                  paddingLeft: 15,
                }}
                multiline={true}
                numberOfLines={1}
                placeholder="Comment"
                placeholderTextColor="white"
                // height={100}
                onChangeText={text => setReviewComment({text})}
                value={reviewComment}
              /> */}

              <TextInput
                numberOfLines={4} // adjust as needed
                style={{
                  height: 100,
                  width: '100%',
                  color: '#fff',

                  borderWidth: 1,
                  borderColor: '#FFFFFF33',
                  marginHorizontal: 15,
                  paddingLeft: 10,
                  borderRadius: 18,

                  alignSelf: 'center',
                  marginVertical: 10,
                }}
                textAlignVertical="top"
                onChangeText={text => setReviewComment({text})}
                value={reviewComment}
                placeholder="Comment"
                placeholderTextColor="#FFFFFF33"
                multiline={true}
              />
            </View>
          </View>
          <View style={styles.reviewSubmitButtonContainer}>
            <ButtonsCommonAlt
              btnText={'Cancel'}
              btnStyle={{width: widthToDp(42)}}
            />
            <ButtonsCommon
              btnText={'Next'}
              btnStyle={{width: widthToDp(42)}}
              onPress={() => navigation.navigate('ProductReview')}
            />
          </View>
        </View>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default RestaurantReview;
