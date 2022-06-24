import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,

} from 'react-native';

import IonicIcon from 'react-native-vector-icons/Ionicons';
import {
  TextInput,
  Caption,
  Button,
  Icon,
  Avatar,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddToCartScreen from '../screens/AddToCartScreen';
import PlaceOrderScreen from '../screens/placeOrder';
import DeleteCartScreen from '../screens/DeleteCartScreen';
import FoodDeliveryScreen from '../screens/FoodDeliveryScreen';
import UpdateDeleteRestaurantsScreen from '../screens/UpdateDeleteRestaurantsScreen';
import ViewCartScreen from '../screens/ViewCartScreen';
import PickupOrderScreen from '../screens/pickupOrder';
//import deleteOrderScreen from '../screens/deleteOrder';
import ViewRestaurantsScreen from '../screens/ViewRestaurantsScreen';
import MainScreen from '../screens/MainScreen';
import AppDrawer from './AppDrawer'; 

// You can import from local files


// or any pure javascript modules available in npm

import Appsetting from '../screens/appSetting';
import PickupScreen from '../screens/pickup';
import SignIn from '../screens/signin';
import UpdateAddress from '../screens/updateAddress';
import UpdateProfile from '../screens/updateProfile';
import SignUp from '../screens/signup';
import WelcomeScreen from '../screens/welcome';
import { append } from 'express/lib/response';
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName='Drawer Screen'>
        <Stack.Screen
          name="Drawer Screen"
          component={AppDrawer}
          options={{
            title: 'HOME',
            headerShown: false,
            // title: 'HOME',
            // headerStyle: {
            //   backgroundColor: 'purple',
            // },
            // headerTintColor: 'black',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}
        />

        {/* <Stack.Screen
        name="Main Screen"
        component={MainScreen}
        options={{ header: () => null }}
      /> */}

        <Stack.Screen
          name="Food Delivery"
          component={FoodDeliveryScreen}
          options={{}}
        />
       
        <Stack.Screen
          name="pickupOrder"
          component={PickupOrderScreen}
          options={{}}
        />
        <Stack.Screen
          name="Add to Cart"
          component={AddToCartScreen}
          options={{}}
        />
        <Stack.Screen
          name="place order"
          component={PlaceOrderScreen}
          options={{}}
        />


        <Stack.Screen
          name="Delete Cart Item"
          component={DeleteCartScreen}
          options={{}}
        />

        <Stack.Screen
          name="View Cart"
          component={ViewCartScreen}
          options={{}}
        />
        



        <Stack.Screen
          name="appsetting"
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: (props) => <LogoTitleAppSetting {...props} />,
            headerRight: () => (
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98m80LU0Cm8lBeTzGSZJqZDbhDsF9euVrCRtTkrQtrJ6wvg6fCnqcDcX4QbVtxijaI_0&usqp=CAU',
                }}
                style={{ marginRight: 10, width: 32, height: 30 }}
              />
            ),
          }}
          component={Appsetting}
        />

        <Stack.Screen
          name="updateProfile"
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: (props) => <LogoTitleUpdateProfile {...props} />,
            headerRight: () => (
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98m80LU0Cm8lBeTzGSZJqZDbhDsF9euVrCRtTkrQtrJ6wvg6fCnqcDcX4QbVtxijaI_0&usqp=CAU',
                }}
                style={{ marginRight: 10, width: 32, height: 30 }}
              />
            ),
          }}
          component={UpdateProfile}
        />
        <Stack.Screen
          name="updateAddress"
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: (props) => <LogoTitleUpdateAddress {...props} />,
            headerRight: () => (
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98m80LU0Cm8lBeTzGSZJqZDbhDsF9euVrCRtTkrQtrJ6wvg6fCnqcDcX4QbVtxijaI_0&usqp=CAU',
                }}
                style={{ marginRight: 10, width: 32, height: 30 }}
              />
            ),
          }}
          component={UpdateAddress}
        />
        <Stack.Screen
          name="pickup"
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: (props) => <LogoTitlePickup {...props} />,
            headerRight: () => (
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98m80LU0Cm8lBeTzGSZJqZDbhDsF9euVrCRtTkrQtrJ6wvg6fCnqcDcX4QbVtxijaI_0&usqp=CAU',
                }}
                style={{ marginRight: 10, width: 32, height: 30 }}
              />
            ),
          }}
          component={PickupScreen}
        />
        <Stack.Screen
          name="welcomescreen"
          options={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTitle: (props) => <LogoTitleHome {...props} />,
          }}
          component={WelcomeScreen}
        />
      </Stack.Navigator>
    </>
  );
}
function LogoTitleUpdateAddress() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blc2nkqwabrditk9bjyg',
        }}
      />
      <Text
        style={{
          color: 'purple',
          marginLeft: 15,
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        {' '}
        UPDATE ADDRESS
      </Text>
    </View>
  );
}
function LogoTitleHome() {
  return (
    <View style={{ flexDirection: 'row' }}>
      {/* <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blc2nkqwabrditk9bjyg',
          }}
        /> */}
      <Text
        style={{
          color: 'white',
          marginLeft: 55,
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 18,
          alignText: "center",

        }}>
        {' '}
        FOODPANDA HOME SCREEN
      </Text>
    </View>
  );
}
function LogoTitlePickup() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blc2nkqwabrditk9bjyg',
        }}
      />
      <Text
        style={{
          color: 'purple',
          marginLeft: 15,
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        {' '}
        FOODPANDA PICKUP
      </Text>
    </View>
  );
}
function LogoTitleSignup() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blc2nkqwabrditk9bjyg',
        }}
      />
      <Text
        style={{
          color: 'purple',
          marginLeft: 15,
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        {' '}
        FOODPANDA SIGNUP
      </Text>
    </View>
  );
}
function LogoTitleAppSetting() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blc2nkqwabrditk9bjyg',
        }}
      />
      <Text
        style={{
          color: 'purple',
          marginLeft: 15,
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        {' '}
        APP SETTING
      </Text>
    </View>
  );
}
function LogoTitleUpdateProfile() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blc2nkqwabrditk9bjyg',
        }}
      />
      <Text
        style={{
          color: 'purple',
          marginLeft: 15,
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        {' '}
        UPDATE MY PROFILE
      </Text>
    </View>
  );
}
function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blc2nkqwabrditk9bjyg',
        }}
      />
      <Text
        style={{
          color: 'purple',
          marginLeft: 15,
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        {' '}
        WELCOME TO FOODPANDA
      </Text>
    </View>
  );
}
export default AppStack;