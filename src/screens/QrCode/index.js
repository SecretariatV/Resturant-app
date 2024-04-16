import {useNavigation} from '@react-navigation/native';
import {Vibration} from 'react-native';

import {CameraScreen} from 'react-native-camera-kit';
import {useDispatch} from 'react-redux';
import {setQrCode} from '../../redux/actions/auth';

const QrCode = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <CameraScreen
      // Barcode props
      scanBarcode={true}
      onReadCode={event => {
        Vibration.vibrate(100);

        dispatch(setQrCode(true));
        navigation.navigate('RestaurantMenu');
      }} // optional
      showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
      laserColor="red" // (default red) optional, color of laser in scanner frame
      frameColor="white" // (default white) optional, color of border of scanner frame
    />
  );
};

export default QrCode;
