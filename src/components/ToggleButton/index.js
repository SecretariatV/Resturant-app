import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {widthToDp} from '../../utils/Dimensions';

const ToggleButton = ({name, show, onPress}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    if (onPress) {
      console.log('first on pRWSX');
      onPress;
    }
    // Toggle the state when the button is clicked
    setIsToggled(!isToggled);
  };

  const gradientColors = isToggled
    ? ['#02ABEE6E', '#02ABEE', '#00F594']
    : ['rgba(255, 255, 255, 0.10)'];

  return (
    <LinearGradient
      colors={gradientColors}
      useAngle={true}
      angle={300}
      style={{
        borderRadius: 16,
        flexWrap: 'nowrap',
        marginVertical: 5,
        marginRight: widthToDp(4),

        alignSelf: 'flex-start',
      }}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      <TouchableOpacity
        style={[styles.circleGradient, isToggled && styles.active]}
        onPress={handleToggle}
        // onPress={onPress}
        disabled={show}>
        <Text style={[styles.menuTxt, isToggled && styles.menuActiveTxt]}>
          {name}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ToggleButton;
