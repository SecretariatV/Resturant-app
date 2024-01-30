import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import Valet from '../../../assets/images/valet.svg';
import ValetService from '../../../assets/images/ValetService.svg';

const SkipButton = ({
  containerStyle,
  btnStyle,
  showBtn,
  showValetImg = true,
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {/* {!showBtn && ( */}

      <LinearGradient
        colors={['#343a54', '#6a6ea7']}
        style={styles.linearStyle}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View style={styles.circleTwoGradient}>
          {showValetImg ? (
            <View>
              <Valet width={22} height={22} />
            </View>
          ) : (
            <Text style={{color: '#fff'}}>Skip</Text>
          )}

          {/*  */}
        </View>
      </LinearGradient>
      {showValetImg && <ValetService style={{margin: 10}} />}

      {/* )} */}
    </View>
  );
};

export default SkipButton;
