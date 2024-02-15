/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox, StyleSheet, Text, useColorScheme, View} from 'react-native';

import BackgroundLayout from './src/components/BackgroundLayout';

import BootSplash from 'react-native-bootsplash';
import RootNavigator from './src/navigation';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';

  // LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule']);
  return (
    <View style={styles.sectionContainer}>
      <BackgroundLayout />
      {/* <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>true
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text> */}
    </View>
  );
}

function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    // <View style={{flex: 1}}>
    <RootNavigator />
    // </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  HeaderWrapperNotch: {
    paddingTop: '5.5%',
    height: '31%',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
