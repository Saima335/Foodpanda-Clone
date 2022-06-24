import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';


import SignIn from '../screens/signin';

import SignUp from '../screens/signup';
import Appsetting from '../screens/appSetting';
import PickupScreen from '../screens/pickup';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'signup';
  } else {
    routeName = 'signin';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
    
      <Stack.Screen
        name="signup"
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitle: (props) => <LogoTitleSignup {...props} />,
          headerRight: () => (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98m80LU0Cm8lBeTzGSZJqZDbhDsF9euVrCRtTkrQtrJ6wvg6fCnqcDcX4QbVtxijaI_0&usqp=CAU',
              }}
              style={{ marginRight: 10, width: 32, height: 30 }}
            />
          ),
        }}
        component={SignUp}
      />
      <Stack.Screen
        name="signin"

        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98m80LU0Cm8lBeTzGSZJqZDbhDsF9euVrCRtTkrQtrJ6wvg6fCnqcDcX4QbVtxijaI_0&usqp=CAU',
              }}
              style={{ marginRight: 10, width: 32, height: 30 }}
            />
          ),
        }}
        component={SignIn}
      />

    </Stack.Navigator>
  );
};
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
export default AuthStack;
