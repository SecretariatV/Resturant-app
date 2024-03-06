import { useEffect, useState } from 'react';
import { View } from 'react-native';
// import {Camera, CodeScanner, useCameraDevice, useCodeScanner} from 'react-native-vision-camera';

const QrCode = () => {
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
