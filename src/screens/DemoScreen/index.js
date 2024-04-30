import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

const DemoScreen = () => {
  const [cartItems, setCartItems] = useState([
    {id: 1, name: 'Product 1'},
    {id: 2, name: 'Product 2'},
    {id: 3, name: 'Product 3'},
  ]);

  const removeItem = itemId => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderHiddenItem = ({item}) => (
    <View style={styles.hiddenItemContainer}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeItem(item.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      data={cartItems}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-75} // Width of the hidden item (delete button)
      disableRightSwipe={true} // Disable swiping right (optional)
      keyExtractor={item => item.id.toString()} // Assuming item has an ID
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  hiddenItemContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 15,
    paddingBottom: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5, // Optional: Add border radius for rounded corners
  },
});

export default DemoScreen;
