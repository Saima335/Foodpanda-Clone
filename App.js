import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files


// or any pure javascript modules available in npm



import Providers from './navigation/index';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
const Stack = createNativeStackNavigator();
 const App =()=>{
  return <Providers/>;

 }
 export default App;

