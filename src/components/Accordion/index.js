import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../theme/FontFamily';
import {styles} from './styles';
import {Colors} from '../../theme';
import BackgroundCard from '../BackgroundCard';
import ChevronUp from '../../assets/images/chevron_up_colored.svg';
import ChevronDown from '../../assets/images/chevron_down_colored.svg';
import {widthToDp} from '../../utils/Dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Accordion = ({title, children, closed = true}) => {
  const [collapsed, setCollapsed] = useState(closed);

  const handleCollapse = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  const accordionBody = children;
  return (
    <TouchableOpacity onPress={() => handleCollapse()}>
      <BackgroundCard style={{width: widthToDp(90)}}>
        {/* <TouchableOpacity onPress={() => handleCollapse()}> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: '#f004',
            paddingVertical: 10,
            paddingHorizontal: 5,
            // backgroundColor: '#f004',
            width: '95%',
          }}>
          <Text style={styles.accordionTitle}>{title}</Text>
          {collapsed ? (
            <ChevronDown
              style={{
                width: widthToDp(20),
                height: widthToDp(20),
              }}
            />
          ) : (
            <ChevronUp
              style={{
                width: widthToDp(20),
                height: widthToDp(20),
              }}
            />
          )}
        </View>
        {/* </TouchableOpacity> */}
        {!collapsed && accordionBody}
      </BackgroundCard>
    </TouchableOpacity>
  );
};

export default Accordion;
