import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import {StatusBar} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Notifications, {cartData} from '../../utils/demodata';
import BackgroundCard from '../../components/BackgroundCard';
import {Image} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import Counter from '../../components/Counter';
import {Colors} from '../../theme';
const Requests = () => {
  const [listData, setListData] = useState(
    cartData.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.productName,
      // details: NotificationItem.details,
    })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const onLeftActionStatusChange = rowKey => {
    console.log('onLeftActionStatusChange', rowKey);
  };

  const onRightActionStatusChange = rowKey => {
    console.log('onRightActionStatusChange', rowKey);
  };

  const onRightAction = rowKey => {
    console.log('onRightAction', rowKey);
  };

  const onLeftAction = rowKey => {
    console.log('onLeftAction', rowKey);
  };

  const VisibleItem = props => {
    const {
      data,
      rowHeightAnimatedValue,
      removeRow,
      leftActionState,
      rightActionState,
    } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }

    return (
      <>
        {cartData.map((item, index) => (
          // <Animated.View
          //   style={[styles.rowFront, {height: rowHeightAnimatedValue}]}>
          <BackgroundCard
            style={{marginTop: 10, marginHorizontal: 10}}
            childrenStyle={{borderRadius: 26}}
            linearBackStyle={{borderRadius: 26}}>
            <View
              style={{
                marginHorizontal: 15,
                // marginTop: 10,
                // padding: 10,
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  // marginTop: 15,
                  marginVertical: 10,
                  alignItems: 'center',
                  // justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',

                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#303F43',
                      borderRadius: 8,
                    }}>
                    <Image
                      source={require('../../assets/images/burger_one.png')}
                      style={{width: widthToDp(20), height: heightToDp(20)}}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{}}>
                    <Text style={[styles.navbarPageTitle, {marginLeft: 10}]}>
                      {item.productName}
                    </Text>
                    <Text style={[styles.navbarPageTitle, {marginLeft: 10}]}>
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      // backgroundColor: 'red',
                      alignItems: 'center',
                      marginLeft: 10,

                      // backgroundColor: 'green',
                    }}>
                    <Counter
                      minusContainerStyle={{
                        height: heightToDp(7),
                        width: widthToDp(7),
                        borderRadius: 8,
                      }}
                      plusContainerStyle={{
                        height: heightToDp(7),
                        width: widthToDp(7),
                        borderRadius: 8,
                        backgroundColor: Colors.GREEN,
                      }}
                      counterTextStyle={{margin: 15}}
                      minusStyle={{width: 10, height: 2}}
                      plusStyle={{width: 10, height: 10}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </BackgroundCard>
        ))}
      </>
    );
  };

  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  const HiddenItemWithActions = props => {
    const {
      swipeAnimatedValue,
      leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onClose,
      onDelete,
    } = props;

    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false,
      }).start();
    }

    return (
      <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
        <Text>Left</Text>
        {!leftActionActivated && (
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={onClose}>
            {/* <MaterialCommunityIcons
              name="close-circle-outline"
              size={25}
              style={styles.trash}
              color="#fff"
            /> */}
          </TouchableOpacity>
        )}
        {!leftActionActivated && (
          <Animated.View
            style={[
              styles.backRightBtn,
              styles.backRightBtnRight,
              {
                flex: 1,
                width: rowActionAnimatedValue,
              },
            ]}>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={onDelete}>
              <Animated.View
                style={[
                  styles.trash,
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}>
                <Text>delete</Text>
                {/* <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={25}
                  color="#fff"
                /> */}
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        )}
      </Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* <StatusBar backgroundColor="#FF6347" barStyle="light-content"/> */}
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
        onRowDidOpen={onRowDidOpen}
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        onLeftActionStatusChange={onLeftActionStatusChange}
        onRightActionStatusChange={onRightActionStatusChange}
      />
    </View>
  );
};

export default Requests;
