import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
// import ActiveOrders from '../../assets/images/activeOrders.svg';
import ActiveOrders from '../../assets/images/activeOrderBox.svg';
import ResturantCard from '../../components/RestaurantCard';
import scan_here from '../../assets/images/scan_here.png';
import scan_arrow from '../../assets/images/scan_arrow.png';
import SkipButton from '../../components/Buttons/SkipButton';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';

import Footer from '../../components/Footer';
import SearchModded from '../../components/SearchModded';

import {BottomSheet} from '@rneui/themed';
import ToggleButton from '../../components/ToggleButton';
import FadedSeparator from '../../components/FadedSeparator';
import {Colors} from '../../theme';
import {useSelector} from 'react-redux';
import GradientText from '../../components/GradientText';
import {useEffect, useState} from 'react';
import {widthToDp} from '../../utils/Dimensions';
import BackgroundLayout from '../../components/BackgroundLayout';
import {getPlatformSpecificValue} from '../../utils/helper';
const RestaurantMain = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const restaurants = [
    {
      id: '1',
      name: 'Resturant Name',
      location: 'Location Here',
      cuisine: 'French',
    },
    {
      id: '2',
      name: 'Resturant Name',
      location: 'Location Here',
      cuisine: 'Italian',
    },
    {
      id: '3',
      name: 'Resturant Name',
      location: 'Location Here',
      cuisine: 'Turkish',
    },
    {
      id: '4',
      name: 'Resturant Name',
      location: 'Location Here',
      cuisine: 'American',
    },

    {
      id: '5',
      name: 'Resturant Name',
      location: 'Location Here',
      cuisine: 'French',
    },

    {
      id: '6',
      name: 'Resturant Name',
      location: 'Location Here',
      cuisine: 'French',
    },

    // Add more items as needed
  ];
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        console.log(value, 'myyyyyyyy');
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  const renderItem = ({item}) => (
    <ResturantCard
      name={item.name}
      location={item.location}
      cuisine={item.cuisine}
    />
  );

  const handleAboutToggle = () => {
    return false;
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', flex: 1}}>
          <TouchableHighlight
            style={{alignItems: 'flex-end', paddingTop: widthToDp(15)}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <SkipButton showCross={true} showValetImg={false} />
          </TouchableHighlight>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <GradientText style={styles.customizeTxt}>Scan Here</GradientText>
            <Text
              style={{
                color: Colors.WHITE,
                // margin: 30,
                marginTop: widthToDp(5),
                width: '70%',
                textAlign: 'center',
              }}>
              Scan the shareabill QR code on the table to start ordering.
            </Text>

            <Image source={scan_arrow} style={{width: 200, height: 200}} />
            {/* </View> */}
          </View>
        </View>
      </Modal>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
        slotCenter={<></>}
        slotRight={<></>}
      />
      <View class="intro-header-container" style={styles.introHeader}>
        <View class="intro-header-wrapper" style={styles.introHeader.wrapper}>
          <View
            class="intro-user-name"
            style={styles.introHeader.userNameContainer}>
            <Text style={styles.introHeader.userName}>Hey</Text>
            <LinearGradient
              colors={['#01322B44', '#00F59444', '#00F59444', '#02ABEE44']}
              useAngle={true}
              angle={45}
              style={{borderRadius: 10, flexWrap: 'nowrap'}}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.gradientBoxContainer}>
                <Text style={styles.gradientBoxText}>Mark Anderson</Text>
              </View>
            </LinearGradient>
          </View>

          <LinearGradient
            class="intro-active-orders"
            colors={['#01322B44', '#00F59444', '#00F59444', '#02ABEE44']}
            useAngle={true}
            angle={45}
            style={{borderRadius: 10, flexWrap: 'wrap'}}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <View
              style={[
                styles.gradientBoxContainer,
                styles.activeOrderBarContainer,
              ]}>
              <ActiveOrders
                width={getPlatformSpecificValue(30, 20)}
                height={getPlatformSpecificValue(30, 20)}
              />
              <View
                class="active-order-text-and-bar"
                style={styles.activeOrderBar}>
                <Text style={styles.activeOrderText}>Active Order</Text>
                <View
                  class="active-order-bar-bg"
                  style={styles.activeOrderBarbg}>
                  <LinearGradient
                    class="intro-active-orders"
                    colors={[
                      '#01322Bff',
                      '#00F594ff',
                      '#00F594ff',
                      '#02ABEEff',
                    ]}
                    useAngle={true}
                    angle={45}
                    style={{
                      borderRadius: 10,
                      flexWrap: 'nowrap',
                      height: 2,
                      width: '45%',
                    }}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}></LinearGradient>
                </View>
              </View>
              {/* <Text style={styles.shareABillTxt}>Mark Anderson</Text> */}
            </View>
          </LinearGradient>
        </View>
      </View>

      {/* <Footer /> */}
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <Image
          className="restaurant-filter-bg"
          style={styles.restaurantFilterBg}
          source={require('../../assets/images/backgroundTwo.png')}
        />
        <ScrollView
          className="restaurant-filter-container"
          style={styles.restaurantFilterContainer}>
          <View style={[styles.filterSection, styles.filterHeading]}>
            <Text style={styles.filterHeadingText}>Filter</Text>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <CloseFilterBtn width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View class="personal-preference" style={styles.filterSection}>
            <Text style={styles.filterHeadingText}>
              Apply Personal Preference
            </Text>
          </View>
          <View class="cuisine-type">
            <Text style={styles.filterHeadingText}>Cuisine Type:</Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.cuisineTypeBtnsContainerStyle}
              style={styles.cuisineTypeBtns}>
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
            </ScrollView>
            <FadedSeparator />
          </View>
          <View class="allergies">
            <Text style={styles.filterHeadingText}>Allergies:</Text>
            <View style={styles.cuisineTypeBtns}>
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
              <ToggleButton
                name={'About'}
                onPress={() => handleAboutToggle()}
                show={false}
              />
            </View>
            <View class="personal-preference" style={styles.filterSection}>
              <Text style={styles.filterHeadingText}>
                Apply Personal Preference
              </Text>
            </View>
            <View class="cuisine-type">
              <Text style={styles.filterHeadingText}>Cuisine Type:</Text>
              <ScrollView
                horizontal
                contentContainerStyle={styles.cuisineTypeBtnsContainerStyle}
                style={styles.cuisineTypeBtns}>
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
              </ScrollView>
              <FadedSeparator />
            </View>
            <View class="allergies">
              <Text style={styles.filterHeadingText}>Allergies:</Text>
              <View style={styles.cuisineTypeBtns}>
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
              </View>
              <FadedSeparator />
            </View>
            <View class="allergies">
              <Text style={styles.filterHeadingText}>Allergies:</Text>
              <View style={styles.cuisineTypeBtns}>
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
              </View>
              <FadedSeparator />
            </View>
            <View class="allergies">
              <Text style={styles.filterHeadingText}>Allergies:</Text>
              <View style={styles.cuisineTypeBtns}>
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
                <ToggleButton
                  name={'About'}
                  onPress={() => handleAboutToggle()}
                  show={false}
                />
              </View>
              <FadedSeparator />
            </View>
            <View class="price-range" style={styles.priceRange}>
              <View style={styles.priceRangeLabel}>
                <Text>Price Range:</Text>
                <Text>${sliderValue}</Text>
              </View>
              <View style={styles.priceRangeSlider}>
                {/* <RangeSlider
                minValue={0}
                maxValue={100}
                steps={1}
                activeBackgroundComponent={
                  <View
                    style={{
                      backgroundColor: '#f00',
                      width: widthToDp(100),
                    }}
                  />
                }
                inactiveBackgroundComponent={
                  <View
                    style={{
                      backgroundColor: '#f0f',
                      width: widthToDp(100),
                    }}
                  />
                }
                thumbComponent={<SliderThumb />}
                onValueChange={setSliderValue}
              /> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </BottomSheet>
      <SearchModded isVisible={isVisible} setIsVisible={setIsVisible} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          marginVertical: 5,
          marginHorizontal: 15,
          // backgroundColor: 'red',
        }}
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={item => item.id} // Key extractor for each item
      />
      <Footer />
    </View>
  );
};

export default RestaurantMain;
