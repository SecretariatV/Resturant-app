import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../theme';
import {fonts} from '../../theme/FontFamily.js';

import GradientText from '../../components/GradientText/index.js';
import MenuNavButton from '../../components/MenuNavButton/index.js';
import Hamburger from '../../assets/images/hamburger.png';
import Footer from '../../components/Footer/index.js';
import {useNavigation} from '@react-navigation/native';
import MyOrder from '../../components/MyOrder/index.js';

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: 'transparent'}}>
    <View style={styles.billContainer}>
      <LinearGradient
        colors={['#02ABEE6E', '#02ABEE8E', '#00F5946E']}
        style={styles.totalBillBox}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View style={[styles.circleGradient]}>
          <Text style={[styles.btnText]}>Total Bill</Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={['#02ABEE4E', '#02ABEE8E', '#00A7F78D']}
        style={styles.yourShareBox}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <TouchableOpacity
          style={[styles.circleGradient]}
          // onPress={onPress}
        >
          <Text style={[styles.btnText]}>ldsal,d</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  </View>
);

const renderScene = SceneMap({
  first: MyOrder,
  second: SecondRoute,
});
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'transparent'}}
    style={{backgroundColor: 'transparent'}}
    renderLabel={({route, focused, color}) => (
      <LinearGradient
        colors={
          focused ? ['#00F69299', '#00A7F7FF'] : ['transparent', 'transparent']
        }
        useAngle={true}
        angle={820}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.tabBarButton}>
        <Text
          style={{
            color: focused ? Colors.BLACK : Colors.WHITE,
            fontFamily: fonts.URBANIST_SEMIBOLD,
            fontSize: 16,
          }}>
          {route.title}
        </Text>
      </LinearGradient>
    )}
  />
);
const PaymentOption = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'My Orders'},
    {key: 'second', title: 'All Orders'},
  ]);
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
        slotCenter={<Text style={styles.headerText}>Payment Option</Text>}
        slotRight={<></>}
      />
      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        style={{backgroundColor: 'transparent'}}
      />
      <Footer />
    </View>
  );
};

export default PaymentOption;
