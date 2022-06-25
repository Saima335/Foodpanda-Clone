import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';

import AdminScreen from '../screens/AdminScreen';
import MainScreen from '../screens/MainScreen';

import AddToCartScreen from '../screens/AddToCartScreen';
import DeleteCartScreen from '../screens/DeleteCartScreen';
import FoodDeliveryScreen from '../screens/FoodDeliveryScreen';
import UpdateDeleteRestaurantsScreen from '../screens/UpdateDeleteRestaurantsScreen';
import ViewCartScreen from '../screens/ViewCartScreen';
import ViewRestaurantsScreen from '../screens/ViewRestaurantsScreen';
import AppStack from './AppStack';
import FoodpandaMain from '../screens/FoodpandaMain';
import AdminStack from './AdminStack'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          drawerActiveBackgroundColor: 'pink',
        }}
        useLegacyImplementation
        drawerContent={(props) => <FoodpandaMain{...props} />}
        >
        <Drawer.Screen
        name="Main Screen"
        component={MainScreen}
        options={{title: 'HOME',
        // headerStyle: {
        //   backgroundColor: 'deeppink',
        // },
        // headerTintColor: 'black',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // }, 
       }}
        />
        {/* <Drawer.Screen
          name="Stack Screen"
          component={AppStack}
          options={{
            title:'HOME',
            // title: 'HOME',
            // headerStyle: {
            //   backgroundColor: 'purple',
            // },
            // headerTintColor: 'black',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}
        /> */}
      </Drawer.Navigator>
    </>
  );
};

export default AppDrawer;
