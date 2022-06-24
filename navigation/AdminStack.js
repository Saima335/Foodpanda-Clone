import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AddToCartScreen from '../screens/AddToCartScreen';
import DeleteCartScreen from '../screens/DeleteCartScreen';
import FoodDeliveryScreen from '../screens/FoodDeliveryScreen';
import UpdateDeleteRestaurantsScreen from '../screens/UpdateDeleteRestaurantsScreen';
import ViewCartScreen from '../screens/ViewCartScreen';
import ViewRestaurantsScreen from '../screens/ViewRestaurantsScreen';
import MainScreen from '../screens/MainScreen';
import AdminScreen from '../screens/AdminScreen';
import AdminDrawer from './AdminDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AdminStack = () => {

    return (
        <Stack.Navigator initialRouteName='Admin Drawer'>

            <Stack.Screen

                name="Admin Drawer"
                component={AdminDrawer}
                options={{
                    title: 'ADMIN',
                    headerShown:false,

                }}

            />
            <Stack.Screen
                name="Update Delete Restaurants"
                component={UpdateDeleteRestaurantsScreen}
                options={{  }}
            />

            <Stack.Screen
                name="View Restaurants"
                component={ViewRestaurantsScreen}
                options={{  }}
            />


        </Stack.Navigator>
    );
};

export default AdminStack;
