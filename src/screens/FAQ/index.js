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
  Pressable,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BottomSheet} from '@rneui/themed';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Colors, commonStyles} from '../../theme';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import SkipButton from '../../components/Buttons/SkipButton';
import HeaderModed from '../../components/HeaderModed';
import ActiveOrders from '../../assets/images/activeOrderBox.svg';
import ResturantCard from '../../components/RestaurantCard';
import BackButton from '../../components/NavButtons/BackButton';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import SearchModded from '../../components/SearchModded';
import ToggleButton from '../../components/ToggleButton';
import FadedSeparator from '../../components/FadedSeparator';
import GradientText from '../../components/GradientText';
import BackgroundLayout from '../../components/BackgroundLayout';

import scan_arrow from '../../assets/images/scan_arrow.png';
import CloseFilterBtn from '../../assets/images/closeBtnFilter.svg';

import {width, widthToDp} from '../../utils/Dimensions';
import {getPlatformSpecificValue} from '../../utils/helper';
import {setQrCode} from '../../redux/actions/auth';
import {fonts} from '../../theme/FontFamily';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import Skeleton from 'react-native-reanimated-skeleton';
import BackgroundCard from '../../components/BackgroundCard';
import {ListItem, Icon} from '@rneui/themed';
import Accordion from '../../components/Accordion';
const FAQ = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expanded, setExpanded] = useState(null); // State to track expanded/collapsed state

  const [selRest, setSelRest] = useState(0);
  const [restObj, setRestObj] = useState({});
  const [loadingRest, setLoadingRest] = useState(true);
  const restaurantCategories = ['Search', 'All', 'Trending'];

  
  const renderRestCats = ({item, index}) => (
    <TouchableOpacity
      style={{
        width: widthToDp(85) / 3,
        alignItems: 'center',
        marginHorizontal: 4,
      }}
      onPress={() => {
        console.log('tab change');
        // if (selRest !== index) {
        setLoadingRest(true);
        setRestObj(restOjb[index]);
        setSelRest(index);
        // }
      }}>
      <LinearGradient
        colors={
          index === selRest
            ? ['#00F69299', '#00A7F7FF']
            : ['transparent', 'transparent']
        }
        useAngle={true}
        angle={820}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{borderRadius: 14, padding: 10}}>
        <Text
          style={{
            color: index === selRest ? Colors.BLACK : Colors.WHITE,
            fontFamily: fonts.URBANIST_SEMIBOLD,
            fontSize: 16,
            paddingVertical: 2,
            paddingHorizontal: 10,
          }}>
          {item}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  const restaurants2 = [
    {
      id: '7',
      name: 'Second Restaurant',
      location: 'Location 2',
      cuisine: 'Mexican',
    },
    {
      id: '8',
      name: 'Another Restaurant',
      location: 'Location 3',
      cuisine: 'Italian',
    },
    {
      id: '9',
      name: 'New Restaurant',
      location: 'Location 4',
      cuisine: 'Chinese',
    },
    {
      id: '10',
      name: 'Best Tacos',
      location: 'Location 5',
      cuisine: 'Mexican',
    },
    {
      id: '11',
      name: 'Pasta Palace',
      location: 'Location 6',
      cuisine: 'Italian',
    },
    {
      id: '12',
      name: 'Dragon Delight',
      location: 'Location 7',
      cuisine: 'Chinese',
    },
    {
      id: '13',
      name: 'Tasty Tacos',
      location: 'Location 8',
      cuisine: 'Mexican',
    },
    {
      id: '14',
      name: 'Pizza Paradise',
      location: 'Location 9',
      cuisine: 'Italian',
    },
  ];

  const restaurants3 = [
    {
      id: '15',
      name: 'Spice City',
      location: 'Location 10',
      cuisine: 'Indian',
    },
    {
      id: '16',
      name: 'Sushi Spot',
      location: 'Location 11',
      cuisine: 'Japanese',
    },
    {
      id: '17',
      name: 'Greek Grill',
      location: 'Location 12',
      cuisine: 'Greek',
    },
    {
      id: '18',
      name: 'Curry Corner',
      location: 'Location 13',
      cuisine: 'Indian',
    },
    {
      id: '19',
      name: 'Ramen House',
      location: 'Location 14',
      cuisine: 'Japanese',
    },
    {
      id: '20',
      name: 'Mediterranean Medley',
      location: 'Location 15',
      cuisine: 'Greek',
    },
    {
      id: '21',
      name: 'Tandoori Time',
      location: 'Location 16',
      cuisine: 'Indian',
    },
    {
      id: '22',
      name: 'Tempura Heaven',
      location: 'Location 17',
      cuisine: 'Japanese',
    },
  ];

  const restaurants4 = [
    {
      id: '23',
      name: 'Thai Temptation',
      location: 'Location 18',
      cuisine: 'Thai',
    },
    {
      id: '24',
      name: 'French Feast',
      location: 'Location 19',
      cuisine: 'French',
    },
    {
      id: '25',
      name: 'Spanish Sensation',
      location: 'Location 20',
      cuisine: 'Spanish',
    },
    {
      id: '26',
      name: 'Taco Time',
      location: 'Location 21',
      cuisine: 'Mexican',
    },
    {
      id: '27',
      name: 'Pasta Palace',
      location: 'Location 22',
      cuisine: 'Italian',
    },
    {
      id: '28',
      name: 'Chinese Charm',
      location: 'Location 23',
      cuisine: 'Chinese',
    },
    {
      id: '29',
      name: 'Indian Indulgence',
      location: 'Location 24',
      cuisine: 'Indian',
    },
    {
      id: '30',
      name: 'Japanese Journey',
      location: 'Location 25',
      cuisine: 'Japanese',
    },
  ];

  const restOjb = [restaurants2, restaurants3, restaurants4];

  useEffect(() => {
    // dispatch(setQrCode(false));
    setRestObj(restOjb[0]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoadingRest(false);
    }, 1000);
  }, [loadingRest]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadingRest(false);
  //   }, 1000);
  // }, []);

  const handleAboutToggle = () => {
    return false;
  };
  const toggleAccordion = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const renderItemSk = ({item, index}) => (
    <Skeleton
      isLoading={loadingRest}
      containerStyle={{flex: 1, flexDirection: 'row'}}
      boneColor="#ccc4"
      animationType="pulse"
      highlightColor="#ccc2"
      layout={[
        {
          borderRadius: 12,
          height: 80,
          marginBottom: 16,
          width: 80,
          marginLeft: 10,
          marginTop: 15,
        },
        {
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'center',
          width: widthToDp(70),
          children: [
            {
              flexDirection: 'column',
              justifyContent: 'flex-start',
              height: '100%',
              width: '100%',
              children: [
                {
                  borderRadius: 16,
                  height: 15,
                  width: widthToDp(60),
                  marginBottom: 10,
                  marginLeft: 5,
                  marginTop: 20,
                },
                {
                  borderRadius: 16,
                  height: 15,
                  marginLeft: 6,
                  marginBottom: 10,
                  width: widthToDp(35),
                },
                {
                  borderRadius: 16,
                  height: 15,
                  marginLeft: 6,
                  width: widthToDp(46),
                },
              ],
            },
          ],
        },
      ]}>
      <View key={index} style={styles.faqItem}>
        {/* <Pressable></Pressable> */}
        <Accordion title={item.name}>
          <Text style={{paddingVertical: 5, paddingHorizontal: 10, marginBottom: 10, fontSize: 12, color: '#fff8'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consectetur blandit accumsan. Sed ac arcu id urna fermentum
            eleifend. Duis arcu erat,
          </Text>
        </Accordion>
      </View>

      {/* <ResturantCard
        name={item.name}
        location={item.location}
        cuisine={item.cuisine}
      /> */}
    </Skeleton>
  );

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={commonStyles.headerText}>FAQ</Text>}
        slotRight={<></>}
      />
      <SearchModded
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        filter={false}
      />

      <View class="restuarant-list">
        <FlatList
          //   key={index}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          style={styles.listStyle}
          data={restaurantCategories}
          renderItem={renderRestCats}
          keyExtractor={item => item.id} // Key extractor for each item
        />
      </View>

      <View class="restaurant-list-item" style={{paddingBottom: 300}}>
        <FlatList
          // showsVerticalScrollIndicator={false}
          style={styles.listStyle}
          data={restObj}
          renderItem={renderItemSk}
          keyExtractor={item => item.id} // Key extractor for each item
        />
      </View>
    </View>
  );
};

export default FAQ;
