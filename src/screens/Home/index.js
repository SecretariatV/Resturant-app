import React, {useState} from 'react';
import {styles} from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import ResturantCard from '../../components/RestaurantCard';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import LinearGradient from 'react-native-linear-gradient';
import ActiveOrders from '../../assets/images/activeOrders.svg';
import Search from '../../components/Search';
import {BottomSheet, Button} from '@rneui/themed';
import Footer from '../../components/Footer';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';
import FadedSeparator from '../../components/FadedSeparator';
import ToggleButton from '../../components/ToggleButton';
import {Colors} from '../../theme';
import {heightToDp, widthToDp} from '../../utils/Dimensions';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const data = [
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
    <SafeAreaProvider>
      <View style={styles.container}>
        <BackgroundLayout />
        <HeaderModed
          slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
          slotCenter={<></>}
          slotRight={<></>}
        />
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
          data={data}
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

            <View style={styles.priceRangeLabelBottom}></View>
          </View>
        </ScrollView>
      </BottomSheet>
    </SafeAreaProvider>
  );
};

export default Home;
