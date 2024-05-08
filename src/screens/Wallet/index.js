import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Colors, commonStyles} from '../../theme';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import HeaderModed from '../../components/HeaderModed';
import BackgroundLayout from '../../components/BackgroundLayout';
import {styles} from './styles';
import Footer from '../../components/Footer';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import LinearGradient from 'react-native-linear-gradient';
import {restaurantActivity} from '../../utils/demodata.js';
import {useNavigation} from '@react-navigation/native';

const Wallet = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={
          <Text style={commonStyles.headerText}>Shareabill Wallet</Text>
        }
        slotRight={<></>}
      />
      <ScrollView>
        {/* <View style={styles.balanceView} className="balance-view">
          <Text style={styles.balanceText}>Total Balance</Text>

          <Text style={styles.balance}>$ 34.44</Text>

          <ButtonsCommon
            btnText="Add Funds"
            containerStyle={{width: widthToDp(95), marginTop: 10}}
          />
        </View> */}
        <View style={styles.mainCardView} className="card-view">
          <Text style={styles.heading}>All Card</Text>
          <View style={styles.card}>
            <LinearGradient
              className="linear-card"
              colors={['#00F69299', '#00A7F7FF']}
              useAngle={true}
              angle={820}
              style={styles.linearCard}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.cardGradient} class="card-gradient">
                <Text style={styles.btnText}>Balance</Text>

                <Text
                  style={[
                    styles.balance,
                    {color: Colors.BLACK, fontSize: 26, marginTop: 5},
                  ]}>
                  $ 34.44
                </Text>
                <View className="card-info" style={styles.cardView}>
                  <View>
                    <Text>Number</Text>
                    <Text>---- ---- ---- 0237</Text>
                  </View>
                  <View>
                    <Text>Exp</Text>
                    <Text>24/26</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <TouchableOpacity
              className="dashed-btn"
              style={styles.dashedBtn}
              onPress={() => navigation.navigate('AddCard')}>
              <Image
                source={require('../../assets/images/plus.png')}
                tintColor={Colors.GREEN}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.activityView}>
            <Text style={styles.heading}>Recent Activity</Text>
            <Text style={styles.heading}>See All</Text>
          </View>
          {restaurantActivity.map(item => (
            <View className="activity-box" style={styles.activityBox}>
              <Image
                source={require('../../assets/images/rest_profile.png')}
                style={styles.img}
              />
              <View className="restaurant-box" style={styles.restaurantBox}>
                <Text className="restaurant-name" style={styles.name}>
                  Restaurant Name
                </Text>
                <Text className="activity-date" style={styles.activityDate}>
                  May 29, 2024
                </Text>
              </View>
              <View style={{}}>
                <Text style={styles.amount}>$29,00</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* <Footer /> */}
    </View>
  );
};

export default Wallet;
