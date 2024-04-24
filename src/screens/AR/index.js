import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const AR = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          html: '<div class="sketchfab-embed-wrapper"> <iframe title="Pizza_Salami" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c87f3caa5c76470094aa187edc9dcd57/embed?ui_theme=dark"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/pizza-salami-c87f3caa5c76470094aa187edc9dcd57?utm_medium=embed&utm_campaign=share-popup&utm_content=c87f3caa5c76470094aa187edc9dcd57" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Pizza_Salami </a> by <a href="https://sketchfab.com/shareabill?utm_medium=embed&utm_campaign=share-popup&utm_content=c87f3caa5c76470094aa187edc9dcd57" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> shareabill </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=c87f3caa5c76470094aa187edc9dcd57" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
        }}
      />
    </View>
  );
};

export default AR;
