import {Viro3DObject, ViroARPlaneSelector, ViroARScene, ViroAmbientLight, ViroFlexView, ViroMaterials, ViroSpotLight} from '@viro-community/react-viro';
import React from 'react';
import {Text, View} from 'react-native';
import BackgroundLayout from '../../components/BackgroundLayout';

const AR = () => {
  return (
    <View style={{flex: 1}}>
      <BackgroundLayout />
      <Text style={{backgroundColor: '#fff', color: '#f00'}}>
        gfjgfsjgklfdgksfdgsdfjkgklsdfgl
      </Text>
      <ViroARPlaneSelector >
        <ViroARScene>
          <ViroAmbientLight color="#ff0000" />
          <ViroSpotLight
            innerAngle={5}
            outerAngle={10}
            direction={[0, -1, -0.5]}
            position={[0, 5, 1]}
            intensity={1000}
            lightType="spot"
            color="#ffffff"
            castsShadow={true}
          />
          <Viro3DObject
            source={require('./PalletPlywoodNew_GameReady.obj')}
            position={[0.0, 0.0, 0]}
            scale={[0.1, 0.1, 0.1]}
            type="OBJ"
          />
        </ViroARScene>
      </ViroARPlaneSelector>
      <Text style={{backgroundColor: '#fff', color: '#f00'}}>
        cxvxcvcxvxcvxcv
      </Text>
    </View>
  );
};

ViroMaterials.createMaterials({
  face: {
    shininess: 2.0,
    lightingModel: 'Blinn',
    diffuseTexture: require('./Textures/PalletPlywood_Base_Color.png'),
  },
});

export default AR;

// Clickbank!@#
