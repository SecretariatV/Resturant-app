import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../../components/BackgroundLayout';
import HeaderCommon from '../../../components/HeaderCommon';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import LinearGradient from 'react-native-linear-gradient';
import FancyInput from '../../../components/FancyInput';
import ButtonsCommon from '../../../components/Buttons/ButtonCommon.js';
import BottomLine from '../../../components/BottomLine';
const Verification = () => {
  const CELL_COUNT = 4;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderCommon show={true} />
      <Text style={styles.forgotTxt}>Verification</Text>
      <View style={{marginTop: 5}}>
        <Text style={styles.underJoinTxt}>We sent a code to your Email</Text>
        <View style={styles.underlineContainer}>
          <TouchableOpacity>
            <Text style={styles.underline}>markanderson@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.underline, styles.underlineBlue]}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.emailTxt}>Enter your Code</Text>

      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <>
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
            {/* <BottomLine /> */}

            {/* <LinearGradient
              colors={[
                'rgba(255,255,255, 0)',
                'rgba(255,255,255, 0.30)',
                'rgba(255,255,255, 0.7)',
                'rgba(255,255,255, 0.7)',
                'rgba(255,255,255, 0.30)',
                'rgba(255,255,255, 0.0)',
              ]}
              style={styles.fancyGrad}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.fancyGradBorder}>
                <View style={styles.fancyGradBorderChild} />
              </View>
            </LinearGradient> */}
          </>
        )}
      />
      <View style={styles.codeText}>
        <Text style={styles.code}>Don't receive your code?</Text>
        <TouchableOpacity>
          <Text style={[styles.underline, styles.underlineBlue]}>Resend</Text>
        </TouchableOpacity>
      </View>

      <ButtonsCommon btnText={'Verify'} containerStyle={{marginTop: 30}} />
    </View>
  );
};

export default Verification;
