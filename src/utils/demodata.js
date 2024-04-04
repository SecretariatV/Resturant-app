import FishAllergy from '../assets/images/fish_allergy.svg';
import EggsAllergy from '../assets/images/eggs_allergy.svg';
import NutsAllergy from '../assets/images/nuts_allergy.svg';
import OnionAllergy from '../assets/images/onion_allergy.svg';
import {screenToTextSize} from './helper';

export const dressCode = [
  {
    codeType: 'Smart casual',
  },
  {
    codeType: 'Casual',
  },
  {
    codeType: 'Formal',
  },
  {
    codeType: 'Smart casual',
  },
  {
    codeType: 'Smart casual',
  },

  {
    codeType: 'Formal',
  },
  {
    codeType: 'Smart casual',
  },
  {
    codeType: 'Smart casual',
  },
  {
    codeType: 'Formal',
  },
  {
    codeType: 'Smart casual',
  },
  {
    codeType: 'Smart casual',
  },
];

export const cuisine = [
  {
    type: 'Italian',
  },
  {
    type: 'Japenese',
  },
  {
    type: 'French',
  },
  {
    type: 'Arabic',
  },
  {
    type: 'Mexiacan',
  },

  {
    type: 'Italian',
  },

  {
    type: 'Italian',
  },
  {
    type: 'Italian',
  },
  {
    type: 'Italian',
  },
];
export const ageGroup = [
  {
    age: 'Kids allowed,',
  },
  {
    age: 'couples & groups',
  },
];

export const reviews = [
  {
    name: 'abc',
    time: '2 mins ago',
    detail:
      'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
  },

  {
    name: 'abc',
    time: '2 mins ago',
    detail:
      'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
  },

  {
    name: 'abc',
    time: '2 mins ago',
    detail:
      'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
  },

  {
    name: 'abc',
    time: '2 mins ago',
    detail:
      'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
  },
];

export const productQuantities = [
  {
    productName: 'Onion',
    qty: 2,
    price: 150,
  },
  {
    productName: 'Onion',
    qty: 2,
    price: 150,
  },
  {
    productName: 'Onion',
    qty: 2,
    price: 150,
  },
  // {
  //   productName: 'Onion',
  //   qty: 2,
  //   price: 150,
  // },
  // {
  //   productName: 'Onion',
  //   qty: 2,
  //   price: 150,
  // },
];

export const Ingredients = [
  {
    productName: 'Onion',
    counterType: 'number',
    price: 150,
  },
  {
    productName: 'Sauce',
    counterType: 'size',

    qty: 2,
    price: 150,
  },
  {
    productName: 'Onion',
    counterType: 'number',

    qty: 2,
    price: 150,
  },
];
export const restaurants = [
  {
    id: '1',
    name: 'Resturant Name',
    location: 'Location Here',
    cuisine: 'French',
  },
  {
    id: '2',
    name: 'Resturant Name',
    location: 'Location Here',
    cuisine: 'Italian',
  },
  {
    id: '3',
    name: 'Resturant Name',
    location: 'Location Here',
    cuisine: 'Turkish',
  },
  {
    id: '4',
    name: 'Resturant Name',
    location: 'Location Here',
    cuisine: 'American',
  },

  {
    id: '5',
    name: 'Resturant Name',
    location: 'Location Here',
    cuisine: 'French',
  },

  {
    id: '6',
    name: 'Resturant Name',
    location: 'Location Here',
    cuisine: 'French',
  },

  // Add more items as needed
];

export const cartData = [
  {
    productName: 'Burger',
    price: '50',
  },
  {
    productName: 'Shawarma',
    price: '50',
  },
  {
    productName: 'Onion',
    price: '50',
  },
  {
    productName: 'Shawarma',
    price: '50',
  },
  {
    productName: 'Onion',
    price: '50',
  },
  {
    productName: 'Shawarma',
    price: '50',
  },
  {
    productName: 'Onion',
    price: '50',
  },
];

export const cardData = [
  {
    cardName: 'Mastercard',
  },
  {
    cardName: 'Apple Pay',
  },
  {
    cardName: 'Google Pay',
  },
];

export const paymentMode = [
  {
    cardName: 'Cash',
  },
  {
    cardName: 'Wallet',
  },
];

export const approvedPayment = [
  {
    name: 'John',
    staus: 'paid',
    amount: '20',
  },
  {
    name: 'Anderson',
    staus: 'paid',
    amount: '20',
  },
  {
    name: 'Henry',
    staus: 'unpaid',
    amount: '20',
  },
  {
    name: 'Robinson',
    staus: 'paid',
    amount: '20',
  },
];

export const rewards = [
  {
    restaurant: 'Restaurant Name',
    points: '22',
  },
  {
    restaurant: 'Restaurant Name',
    points: '50',
  },
  {
    restaurant: 'Restaurant Name',
    points: '30',
  },
  {
    restaurant: 'Restaurant Name',
    points: '22',
  },

  {
    restaurant: 'Restaurant Name',
    points: '22',
  },
  {
    restaurant: 'Restaurant Name',
    points: '22',
  },
  {
    restaurant: 'Restaurant Name',
    points: '22',
  },
  {
    restaurant: 'Restaurant Name',
    points: '22',
  },
];

export const Allergies = [
  {
    name: 'Eggs',
    slug: 'eggs',
    imgUrl: <EggsAllergy />,
  },
  {
    name: 'Fish',
    slug: 'fish',
    imgUrl: <FishAllergy />,
  },
  {
    name: 'Nuts',
    slug: 'nuts',
    imgUrl: <NutsAllergy />,
  },
  {
    name: 'Onions',
    slug: 'onions',
    imgUrl: <OnionAllergy />,
  },
];

export const orderHistory = [
  {
    product: 'Burger',
    price: '50',
    tax: '5',
  },
  {
    product: 'Burger',
    price: '50',
    tax: '5',
  },
  {
    product: 'Burger',
    price: '50',
    tax: '5',
  },
];

export const restaurantActivity = [
  {
    name: 'Restaurant Name',
    date: 'May 28, 2024',
    amount: '100',
  },
  {
    name: 'Restaurant Name',
    date: 'May 28, 2024',
    amount: '100',
  },
  {
    name: 'Restaurant Name',
    date: 'May 28, 2024',
    amount: '100',
  },
  {
    name: 'Restaurant Name',
    date: 'May 28, 2024',
    amount: '100',
  },
  {
    name: 'Restaurant Name',
    date: 'May 28, 2024',
    amount: '100',
  },
];

export const ArReels = [
  {
    id: '1',
    source: require('../assets/images/pizza_ar.png'),
  },
  {
    id: '1',
    source: require('../assets/images/pizza_ar.png'),
  },
  {
    id: '1',
    source: require('../assets/images/pizza_ar.png'),
  },
  {
    id: '1',
    source: require('../assets/images/pizza_ar.png'),
  },
];

export default Notifications = [
  {
    id: 1,
    title: 'Your pizza order placed successfully',
    details:
      'Your pizza order to snack corner has been accepted and being processed.',
  },
  {
    id: 2,
    title: 'Your bengali thali order has been delivered',
    details: 'Your bengali thali has been delivered by Delicious Bong Recipe.',
  },
  {
    id: 3,
    title: 'Out for delivery',
    details: 'Bengali thali will reach to you within 30 minutes.',
  },
  {
    id: 4,
    title: 'Your bengali thali order placed successfully',
    details:
      'Your bengali thali order to Delicious Bong Recipe has been accepted and being processed.',
  },
  {
    id: 5,
    title: 'Money added to your wallet',
    details:
      '₹ 1,000/- has been added to your wallet successfully and remaining balance is ₹ 1,150/-',
  },
  {
    id: 6,
    title: 'Add money to your wallet',
    details:
      'Only ₹ 150/- is left in your wallet. Add some more amount to place your order quickly.',
  },
  {
    id: 7,
    title: 'Check new Pizza Corner within 1 km',
    details: 'A new Pizza Corner is being loved by more people around you.',
  },
  {
    id: 8,
    title: 'Check new Roll Center within 3 km',
    details: 'A new roll center is being loved by more people around you.',
  },
  {
    id: 9,
    title: 'Check new Crispy Chicken within 3 km',
    details: 'A new Crispy Chicken is being loved by more people around you.',
  },
  {
    id: 10,
    title: 'Check new Snacks Corner within 5 km',
    details: 'A new Snacks Corner is being loved by more people around you.',
  },
];
