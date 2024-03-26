import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import Hamburger from '../../assets/images/hamburger.png';
import MenuNavButton from '../../components/MenuNavButton';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../theme/FontFamily';
import AmountStatusCard from '../../components/AmountStatusCard';
import {approvedPayment} from '../../utils/demodata';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';

const AmountPaid = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        headerStyle={{marginLeft: 15}}
        slotLeft={<HamBurgerButton />}
        slotCenter={<></>}
        slotRight={<></>}
      />
      <View style={styles.subContainer}>
        <LinearGradient
          colors={['#00F69299', '#00A7F7FF']}
          // colors={['#040B1B', '#045386']}
          useAngle={true}
          angle={820}
          style={{borderRadius: 22, paddingVertical: 10}}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.circleGradient}>
            <Text style={styles.price}>$100.00</Text>
            <Text style={styles.totalPaid}>Total Paid</Text>

            <Text style={styles.payDate}>December 2nd, 2024</Text>
          </View>
        </LinearGradient>

        <FlatList
          data={approvedPayment}
          style={{marginTop: 10}}
          renderItem={({item}) => (
            <AmountStatusCard
              name={item.name}
              status={item.staus}
              amount={item.amount}
            />
          )}
        />
        {/* <LinearGradient
          colors={['#00F69299', '#00A7F7FF']}
          // colors={['#040B1B', '#045386']}
          useAngle={true}
          angle={820}
          style={{borderRadius: 22, margin: 1}}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.circleGradientTwo}>
            <View style={styles.approveContainer}>
              <View style={styles.approveSubContainer}>
                <Image source={require('../../assets/images/paid_user.png')} />
                <Text
                  style={{
                    color: '#fff',
                    marginLeft: 10,
                    fontFamily: fonts.URBANIST_BOLD,
                    fontSize: 16,
                  }}>
                  John{' '}
                </Text>
              </View>
              <View>
                <Image source={require('../../assets/images/approved.png')} />
              </View>
            </View>
          </View>
        </LinearGradient> */}
      </View>
    </View>
  );
};

export default AmountPaid;
