import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {CheckBox} from '@rneui/themed';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../theme';
import {fonts} from '../../theme/FontFamily.js';

import HeaderModed from '../../components/HeaderModed';
import BackgroundLayout from '../../components/BackgroundLayout';
import GradientText from '../../components/GradientText/index.js';
import MenuNavButton from '../../components/MenuNavButton/index.js';
import Footer from '../../components/Footer/index.js';
import MyOrder from '../../components/MyOrder/index.js';
import Counter from '../../components/Counter/index.js';
import BackgroundCard from '../../components/BackgroundCard/index.js';
import Hamburger from '../../assets/images/hamburger.png';
import HundredPercentBar from '../../assets/images/hundredPercentBar.svg';
import ReviewCard from '../../components/ReviewCard/index.js';
import {reviews} from '../../utils/demodata.js';
import {width, widthToDp} from '../../utils/Dimensions.js';

import {useSharedValue, withDecay} from 'react-native-reanimated';
import Slider from '@react-native-community/slider';
import {getPlatformSpecificValue, screenToTextSize} from '../../utils/helper.js';
import FadedSeparator from '../../components/FadedSeparator/index.js';

import Cross from '../../assets/images/cross.svg';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js/index.js';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton/index.js';
const starterItems = ['Zesty Bruschetta Bites', 'Garlic Parmesan Wings', 'Caprese Skewers'];
const mainItems = ['Burger', 'Shwarma', 'Mandi'];

const TrackOrder = () => {
  const [expanded, setExpanded] = useState(true);
  const [starterExpanded, setStarterExpanded] = useState(true);
  const [mainExpanded, setMainExpanded] = useState(true);
  const [dessertExpanded, setDessertExpanded] = useState(true);

  const [checked, setChecked] = React.useState(true);
  
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={styles.container}>
      <BackgroundLayout />

      <HeaderModed
        //headerStyle={{marginLeft: getPlatformSpecificValue(15, 0)}}
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={styles.headerText}>Track Order</Text>}
        slotRight={<></>}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <BackgroundCard
          style={{width: '95%', marginBottom: 10}}
          linearBackStyle={{borderRadius: 24}}
          childrenStyle={{borderRadius: 24}}>
          <View style={styles.itemContainer}>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={styles.trackOrderCollapseHeader}>Starters(3)</Text>
              <Text style={styles.trackOrderCollapseSubHeader}>
                Ready in: 3min
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                // style={styles.review_btn}
                style={styles.itemDetail}
                onPress={() => {
                  setExpanded(!expanded);
                }}>
                <Image
                  source={require('../../assets/images/chevron_down.png')}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {expanded && (
              <View style={{width: widthToDp(90)}}>
                <FadedSeparator />
                {starterItems.map((item, index) => (
                  <View
                    class="items-continer"
                    style={styles.starterItemsListContainer}>
                    <View style={styles.starterItemsListItem}>
                      <Text style={styles.starterItemsListItemText}>
                        {item}
                      </Text>
                      <TouchableOpacity
                        // style={styles.review_btn}
                        style={styles.itemDetail}
                        onPress={() => {
                          setExpanded(!expanded);
                        }}>
                        <Cross width={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
                <View class="active-order-bar-bg" style={styles.sliderGradBar}>
                  <LinearGradient
                    class="intro-active-orders"
                    colors={[
                      '#00F594ff',
                      '#00F594ff',
                      '#00F594ff',
                      '#02ABEEff',
                      '#00F594ff',
                    ]}
                    useAngle={true}
                    angle={45}
                    style={{
                      borderRadius: 10,
                      flexWrap: 'nowrap',
                      height: 8,
                      width: '75%',
                      // maxWidth: widthToDp(75),
                    }}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}></LinearGradient>
                </View>
              </View>
            )}
          </View>
        </BackgroundCard>

        <BackgroundCard
          style={{width: '95%', marginBottom: 10}}
          linearBackStyle={{borderRadius: 24}}
          childrenStyle={{borderRadius: 24}}>
          <View style={styles.itemContainer}>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={styles.trackOrderCollapseHeader}>Main(3)</Text>
              <Text style={styles.trackOrderCollapseSubHeader}>
                Ready in: 25 min
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                // style={styles.review_btn}
                style={styles.itemDetail}
                onPress={() => {
                  setExpanded(!expanded);
                }}>
                <Image
                  source={require('../../assets/images/chevron_down.png')}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {expanded && (
              <View style={{width: widthToDp(90)}}>
                <FadedSeparator />
                {mainItems.map((item, index) => (
                  <View
                    class="items-continer"
                    style={styles.starterItemsListContainer}>
                    <View style={styles.starterItemsListItem}>
                      <Text style={styles.starterItemsListItemText}>
                        {item}
                      </Text>
                      <TouchableOpacity
                        // style={styles.review_btn}
                        style={styles.itemDetail}
                        onPress={() => {
                          setExpanded(!expanded);
                        }}>
                        <Cross width={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
                <View class="active-order-bar-bg" style={styles.sliderGradBar}>
                  <LinearGradient
                    class="intro-active-orders"
                    colors={[
                      '#00F594ff',
                      '#00F594ff',
                      '#00F594ff',
                      '#02ABEEff',
                      '#00F594ff',
                    ]}
                    useAngle={true}
                    angle={45}
                    style={{
                      borderRadius: 10,
                      flexWrap: 'nowrap',
                      height: 8,
                      width: '75%',
                      // maxWidth: widthToDp(75),
                    }}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}></LinearGradient>
                </View>
              </View>
            )}
          </View>
        </BackgroundCard>

        <BackgroundCard
          style={{width: '95%', marginBottom: 10}}
          linearBackStyle={{borderRadius: 24}}
          childrenStyle={{borderRadius: 24}}>
          <View style={styles.itemContainer}>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={styles.trackOrderCollapseHeader}>Dessert(1)</Text>
              {/* <Text style={styles.trackOrderCollapseSubHeader}>
                Ready in: 3min
              </Text> */}
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                // style={styles.review_btn}
                style={styles.itemDetail}
                onPress={() => {
                  setExpanded(!expanded);
                }}>
                <Image
                  source={require('../../assets/images/chevron_down.png')}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {expanded && (
              <View style={{width: widthToDp(90)}}>
                <FadedSeparator />
                {/* {starterItems.map((item, index) => (
                  <View
                    class="items-continer"
                    style={styles.starterItemsListContainer}>
                    <View style={styles.starterItemsListItem}>
                      <Text style={styles.starterItemsListItemText}>
                        {item}
                      </Text>
                      <TouchableOpacity
                        // style={styles.review_btn}
                        style={styles.itemDetail}
                        onPress={() => {
                          setExpanded(!expanded);
                        }}>
                        <Cross width={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
                <View class="active-order-bar-bg" style={styles.sliderGradBar}>
                  <LinearGradient
                    class="intro-active-orders"
                    colors={[
                      '#00F594ff',
                      '#00F594ff',
                      '#00F594ff',
                      '#02ABEEff',
                      '#00F594ff',
                    ]}
                    useAngle={true}
                    angle={45}
                    style={{
                      borderRadius: 10,
                      flexWrap: 'nowrap',
                      height: 8,
                      width: '75%',
                      // maxWidth: widthToDp(75),
                    }}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}></LinearGradient>
                </View> */}
                <ButtonsCommon
                  btnText={'Done'}
                  btnStyle={{width: widthToDp(80)}}
                  containerStyle={{marginRight: 10}}
                />
              </View>
            )}
          </View>
        </BackgroundCard>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default TrackOrder;