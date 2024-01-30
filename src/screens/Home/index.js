import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import FancyText from '../../components/FancyText';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../theme';
import ActiveOrders from '../../assets/images/activeOrders.svg';

const Home = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderCommon
        showSkipBtn={true}
        showValet={true}
        showMenu={true}
        show={true}
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
    </View>
  );
};

export default Home;
