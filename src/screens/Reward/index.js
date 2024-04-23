import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import {styles} from './styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Easing} from 'react-native-reanimated';
import HeaderModed from '../../components/HeaderModed';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import {Colors, commonStyles} from '../../theme';
import {fonts} from '../../theme/FontFamily';
import Loyal from '../../assets/images/loyal.svg';
import GradientText from '../../components/GradientText';
import {rewards} from '../../utils/demodata';
const Reward = () => {
  const [points, setPoints] = useState(500);
  const circularProgressRef = useRef(null);
  useEffect(() => {
    if (circularProgressRef.current) {
      circularProgressRef.current.animate(80, 2000, Easing.quad);
    }
  }, []);

  const renderItem = ({item, index}) => (
    <View
      class="menu-item-smallbox"
      style={styles.menuItemSmallbox}
      key={index}>
      <View style={styles.rewardContainer}>
        <Image source={require('../../assets/images/rest_profile.png')} />
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <Text style={styles.rewardText}>{item.restaurant}</Text>
          <GradientText style={{marginTop: 5}}>
            Rewards Points: {item.points}
          </GradientText>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={commonStyles.headerText}>Rewards</Text>}
        slotRight={<></>}
      />
      <View style={{width: '100%', alignItems: 'center', marginBottom: 350}}>
        <AnimatedCircularProgress
          ref={circularProgressRef}
          size={150}
          width={8}
          fill={points}
          rotation={220}
          arcSweepAngle={280}
          tintColor="#03E7AB"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875">
          {points => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Loyal />
              <Text
                style={{
                  fontFamily: fonts.URBANIST_MEDIUM,
                  color: Colors.WHITE,
                  fontSize: 32,
                }}>
                5000
              </Text>
              <Text
                style={{
                  fontFamily: fonts.URBANIST_MEDIUM,
                  color: Colors.WHITE,
                  fontSize: 15,
                }}>
                Points
              </Text>
            </View>
          )}
        </AnimatedCircularProgress>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop: 30}}
          data={rewards}
          renderItem={renderItem}
        />
      </View>
      {/* <Footer /> */}
    </View>
  );
};

export default Reward;
