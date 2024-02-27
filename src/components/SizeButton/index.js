import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Image} from 'react-native';
import {Colors} from '../../theme';

const SizeButton = ({
  minusContainerStyle,
  minusStyle,
  plusStyle,
  plusContainerStyle,
}) => {
  const [small, setSmall] = useState(true);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);
  const [selectedButton, setSelectedButton] = useState('none');

  const handleButtonPress = button => {
    setSelectedButton(button);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.sizeContainer,
          selectedButton === 'small' && styles.selected,
        ]}
        onPress={() => handleButtonPress('small')}>
        <Text
          style={[
            styles.sizeText,
            selectedButton === 'small' && styles.selectedText,
          ]}>
          S
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleButtonPress('medium')}
        style={[
          styles.sizeContainer,
          selectedButton === 'medium' && styles.selected,
        ]}>
        <Text
          style={[
            styles.sizeText,
            selectedButton === 'medium' && styles.selectedText,
          ]}>
          M
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleButtonPress('large')}
        style={[
          styles.sizeContainer,
          selectedButton === 'large' && styles.selected,
        ]}>
        <Text
          style={[
            styles.sizeText,
            selectedButton === 'large' && styles.selectedText,
          ]}>
          L
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SizeButton;
