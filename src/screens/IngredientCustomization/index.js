import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import BackgroundCard from '../../components/BackgroundCard';
import FadedSeparator from '../../components/FadedSeparator';

const IngredientCustomization = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
        slotCenter={<Text style={styles.navbarPageTitle}>Customization</Text>}
        // slotRight={<MenuNavButton icon={HeartIcon} iconType="image" />}
      />
      <BackgroundCard>
        <Text style={styles.navbarPageTitle}>Customize Ingredients</Text>

        <FadedSeparator />
      </BackgroundCard>
      <Text>IngredientCustomization</Text>
    </View>
  );
};

export default IngredientCustomization;
