import * as React from 'react';
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





function WelcomeScreen({ navigation }) {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          height: 1000,
        }}>
        <View style={{ alignItems: "center", marginTop: 50, marginLeft: 20 }}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blc2nkqwabrditk9bjyg',
            }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{flexDirection:"row" }}>
          <Button
            icon="camera"
            mode="contained"
           
            onPress={() => navigation.navigate('appsetting')}
            color="purple">
            LOGIN
          </Button>
          <IonicIcon name="basket" size={30}></IonicIcon>
        </View>
        <View style={{
          marginTop: 20, marginLeft: 20, backgroundColor: "purple"
        }}>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => {
              navigation.navigate('signup')
            }}
            color="purple"
          >
            SIGNUP
          </Button>
        </View>
        <View style={{marginBottom:0}}>
        <Image
            source={{
              uri: 'https://insideretail.asia/wp-content/uploads/2020/09/Food-Panda-new-logo-1.png',
            }}
            style={{ width: 100, height: 100,marginTop:100 }}
          />  
        </View>
      </View>
    );
  }

  export default WelcomeScreen;