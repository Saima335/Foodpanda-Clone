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
import FoodpandaAdmin from '../screens/FoodpandaAdmin';
import AdminStack from './AdminStack'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AdminDrawer = () => {
    return (
        <>
            <Drawer.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    drawerActiveBackgroundColor: 'pink',
                }}
                useLegacyImplementation
                drawerContent={(props) => <FoodpandaAdmin{...props} />}
            >
                <Drawer.Screen
                name="Admin"
                component={AdminScreen}
                options={{
                    title: 'ADMIN',
                    headerStyle: {
                        backgroundColor: 'deeppink',
                      },
                      headerTintColor: 'black',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      }, 
                }}
            />

            </Drawer.Navigator>
        </>
    );
};

export default AdminDrawer;
