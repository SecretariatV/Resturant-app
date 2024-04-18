import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import {commonStyles} from '../../theme';
import Edit from '../../assets/images/edit.svg';
import Insta from '../../assets/images/insta.svg';
import Snap from '../../assets/images/snap.svg';
import Tiktok from '../../assets/images/tiktok.svg';

import {styles} from './styles';
import GradientText from '../../components/GradientText';
import Electric from '../../assets/images/electric.svg';
import LinearGradient from 'react-native-linear-gradient';
import {widthToDp} from '../../utils/Dimensions';
import {ArReels} from '../../utils/demodata';

const Profile = () => {
  const renderItem = ({item}) => {
    return (
      <View style={{margin: 10}}>
        <Image source={item.source} style={styles.image} />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<Text style={commonStyles.headerText}>Profile</Text>}
        slotRight={
          <>
            <TouchableOpacity>
              <Edit />
            </TouchableOpacity>
          </>
        }
      />
      <View style={{paddingHorizontal: 15}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: widthToDp(70),
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../assets/images/picavatar.png')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              marginBottom: 20,
            }}
          />

          <Text style={styles.profileName} className="profile-name">
            Mark Anderson
          </Text>

          <GradientText style={styles.username} className="username">
            @MarkAnderson680
          </GradientText>

          <View style={styles.levelContainer} className="level-container">
            <Electric width={30} height={30} />
            <View class="level-bar-color-bg" style={styles.levelBarColorBg}>
              <View class="level-bar-bg-dark" style={styles.levelBarBgDark}>
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
                    style={[styles.levelGradient, {width: '50%'}]}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}></LinearGradient>
                </View>
              </View>
            </View>
            <GradientText style={{marginLeft: 10}}>Level</GradientText>
            <LinearGradient
              colors={['#00F69299', '#00A7F7FF']}
              useAngle={true}
              angle={820}
              style={{borderRadius: 22, flexWrap: 'nowrap', marginLeft: 10}}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.circleGradientTwo}>
                <Text style={[styles.btnText]}>02</Text>
              </View>
            </LinearGradient>
          </View>
          <Text style={styles.bio}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <View style={styles.socialContainer} className="social-container">
            <View style={styles.social} className="social">
              <Insta />
            </View>
            <View style={styles.social} className="social">
              <Snap />
            </View>
            <View style={styles.social} className="social">
              <Tiktok />
            </View>
          </View>
        </View>

        <Text className="ar-reel" style={styles.arText}>
          Saved AR Reels
        </Text>

        <View>
          <FlatList
            data={ArReels}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
          />
        </View>

        {/* <Footer /> */}
      </View>
    </View>
  );
};

export default Profile;
