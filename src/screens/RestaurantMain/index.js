import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import LinearGradient from 'react-native-linear-gradient';
import ActiveOrders from '../../assets/images/activeOrders.svg';
import Search from '../../components/Search';
import ResturantCard from '../../components/RestaurantCard';
import {LinearTextGradient} from 'react-native-text-gradient';
import scan_here from '../../assets/images/scan_here.png';
import scan_arrow from '../../assets/images/scan_arrow.png';
import SkipButton from '../../components/Buttons/SkipButton';
import {widthToDp} from '../../utils/Dimensions';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import Footer from '../../components/Footer';
import SearchModded from '../../components/SearchModded';
import restaurants from '../../utils/demodata'
const RestaurantMain = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

 
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
          {/* <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              paddingTop: 50,
            }}

            // onPress={() => setModalVisible(!modalVisible)}
          > */}
          <TouchableHighlight
            style={{alignItems: 'flex-end', paddingTop: widthToDp(15)}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <SkipButton showCross={true} showValetImg={false} />
          </TouchableHighlight>
          {/* </TouchableOpacity> */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,

              // backgroundColor: 'red',
            }}>
            <Image source={scan_here} />
            <Text style={{color: Colors.WHITE, margin: 15}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been t...
            </Text>
            {/* <View opacit> */}
            <Image source={scan_arrow} style={{width: 200, height: 200}} />
            {/* </View> */}
          </View>
        </View>
      </Modal>
      <BackgroundLayout />

      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, color: '#fff'}}>Hey</Text>
            <LinearGradient
              colors={['#01322B44', '#00F59444', '#00F59444', '#02ABEE44']}
              useAngle={true}
              angle={45}
              style={{borderRadius: 15, flexWrap: 'nowrap'}}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.circleGradient}>
                <Text style={styles.shareABillTxt}>Mark Anderson</Text>
              </View>
            </LinearGradient>
          </View>

          <LinearGradient
            colors={['#01322B44', '#00F59444', '#00F59444', '#02ABEE44']}
            useAngle={true}
            angle={45}
            style={{borderRadius: 15, flexWrap: 'nowrap'}}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <View style={styles.circleGradient}>
              <ActiveOrders width={20} height={20} />
              <Text style={{color: Colors.GREEN}}>Active Order</Text>
              {/* <Text style={styles.shareABillTxt}>Mark Anderson</Text> */}
            </View>
          </LinearGradient>
        </View>

        <Search isVisible={isVisible} setIsVisible={setIsVisible} />
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginVertical: 5}}
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={item => item.id} // Key extractor for each item
        />
      </View>
      <Footer />
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
        </ScrollView>
      </BottomSheet>
      {/* <Search /> */}
      <SearchModded />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginVertical: 5, marginHorizontal: 15}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id} // Key extractor for each item
      />

      <Footer />
    </View>
  );
};

export default RestaurantMain;
