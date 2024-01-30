import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../theme/FontFamily';

const FancyInput = ({
  iconImage,
  fieldOptions,
  fieldLabel,
  fieldValue,
  fieldPlaceHolder,
  fieldCallback,
  fieldIsPassword = false,
}) => {
  const eyeOn = require('../../assets/images/eye-on.png');
  const eyeOff = require('../../assets/images/eye-off.png');
  const activeGrad = [
    '#02ABEE00',
    '#02ABEEff',
    '#02ABEE',
    '#00F594ff',
    '#00F59400',
  ];
  const inactiveGrad = [
    'rgba(255,255,255, 0)',
    'rgba(255,255,255, 0.30)',
    'rgba(255,255,255, 0.7)',
    'rgba(255,255,255, 0.7)',
    'rgba(255,255,255, 0.30)',
    'rgba(255,255,255, 0.0)',
  ];
  const [activeField, setActiveField] = useState(inactiveGrad);
  const [showPassImage, setShowPassImage] = useState(eyeOff);
  const [isSecureTextEntry, setisSecureTextEntry] = useState(fieldIsPassword);

  // useEffect(() => {
  //   setActiveField(inactiveGrad);
  // }, [activeField]);
  const handleFocus = () => {
    setActiveField(activeGrad);
  };

  const handleBlur = () => {
    setActiveField(inactiveGrad);
  };

  const handleValue = () => {
    setActiveGradState(inactiveGrad);
  };

  const changeFieldType = () => {
    if (!isSecureTextEntry) {
      setShowPassImage(eyeOff);
    } else {
      setShowPassImage(eyeOn);
    }
    setisSecureTextEntry(!isSecureTextEntry);
  };
  return (
    <View className="fancy-input-container" style={styles.container}>
      <View className="fancy-text-wrapper" style={[styles.wrapper]}>
        <View className="fancy-text-label">
          <Text style={styles.fieldLabel}>{fieldLabel}</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Image source={iconImage} style={styles.fieldImage} />
          <TextInput
            style={styles.fieldInput}
            value={fieldValue}
            secureTextEntry={isSecureTextEntry}
            placeholder={fieldPlaceHolder}
            // placeholderStyle={{fontFamily: fonts.URBANIST_THIN}}
            placeholderTextColor="#ffffffaa"
            onChangeText={fieldCallback}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...fieldOptions}
          />
          {fieldIsPassword && (
            <TouchableOpacity
              onPress={changeFieldType}
              style={styles.showPassIconBtn}>
              <Image source={showPassImage} style={styles.showPassIcon} />
            </TouchableOpacity>
          )}
        </View>
        <LinearGradient
          colors={activeField}
          style={styles.fancyGrad}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.fancyGradBorder}>
            <View style={styles.fancyGradBorderChild} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default FancyInput;
