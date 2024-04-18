import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const AR = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://sketchfab.com/models/c87f3caa5c76470094aa187edc9dcd57/embed-ar',
        }}
      />
    </View>
  );
};

export default AR;
