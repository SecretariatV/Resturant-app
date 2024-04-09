import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
// import {
//   Camera,
//   useCameraDevice,
//   useCameraPermission,
//   useCodeScanner,
// } from 'react-native-vision-camera';
// import {Camera, CodeScanner, useCameraDevice, useCodeScanner} from 'react-native-vision-camera';
import {CameraScreen} from 'react-native-camera-kit';
import {useDispatch} from 'react-redux';
import {setQrCode} from '../../redux/actions/auth';

const QrCode = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  // const device = useCameraDevice('back');
  // const [first, setfirst] = useState('');

  // // var de =device
  // const {hasPermission, requestPermission} = useCameraPermission();
  // useEffect(() => {
  //   setfirst(device);
  // }, [device]);

  // const codeScanner = useCodeScanner({
  //   codeTypes: ['qr', 'ean-13'],
  //   onCodeScanned: codes => {
  //     console.log(`Scanned ${codes.length} codes!`);
  //   },
  // });

  return (
    // {device != null &&<Camera codeScanner={codeScanner} />}
    // <View>
    <CameraScreen
      // Barcode props
      scanBarcode={true}
      onReadCode={event => {
        dispatch(setQrCode(true));
        navigation.navigate('RestaurantMenu');
      }} // optional
      showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
      laserColor="red" // (default red) optional, color of laser in scanner frame
      frameColor="white" // (default white) optional, color of border of scanner frame
    />

    // </View>
    // )
    // <View>{device != null && <Camera codeScanner={codeScanner} />}</View>
    //  <Camera codeScanner={codeScanner} />
  );

  // const [hasPermission, setHasPermission] = useState(null);
  // const [checkCodeScanner, setCheckCodeScanner] = useState(null);
  // const device = useCameraDevice('back');
  // useEffect(() => {
  //   (async () => {
  //     const granted = await Camera.requestCameraPermissions();
  //     setHasPermission(granted);
  //   })();
  // }, []);

  // const onCodeScanned = ({type, data, bounds}) => {
  //   console.log(`Code type: ${type}`);
  //   console.log(`Code data: ${data}`);
  //   console.log(`Code bounds: ${bounds}`);
  // };

  // const codeScanner = useCodeScanner({
  //   codeTypes: ['qr', 'ean-13'],
  //   onCodeScanned: codes => {
  //     console.log(`Scanned ${codes.length} codes!`);
  //   },
  // });

  // return (
  //   <View>
  //     <CodeScanner
  //       device={device}
  //       onCodeScanned={onCodeScanned}
  //       style={{width: '100%', height: '100%'}}
  //     />
  //   </View>
  // );
};

export default QrCode;
