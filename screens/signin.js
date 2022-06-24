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
import { AuthContext } from '../navigation/AuthProvider';
import AdminStack from '../navigation/AdminStack';
import AppStack from '../navigation/AppStack';

function SignIn({ navigation }) {
  const [email, setEmail] = React.useState('');
  
  const [password, setPassword] = React.useState('');
  const {login}=React.useContext(AuthContext);
  return (
    <View style={{ alignItems: 'center', height: 800 }}>
      <ImageBackground
        source={{
          uri: 'https://www.schemecolor.com/wallpaper?i=25810&desktop',
        }}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'center', width: 400, height: 800 }}>
        <View style={{ marginLeft: 150, marginTop: 20 }}>
          <Avatar.Image
            size={100}
            source={{
              uri: 'https://i.pinimg.com/474x/e5/aa/ed/e5aaed511619044b915e1ff61ec77da3.jpg',
            }}
          />
          <Text
            style={{
              marginTop: 2,
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {' '}
            Food Panda
          </Text>
        </View>
        <View style={{ marginTop: 0 }}>
          <TextInput
            label="Email"
            value={email}
            style={{
              marginLeft: 60,
              backgroundColor: 'white',
              fontSize: 20,
              width: 300,
              margin: 10,
            }}
            onChangeText={(email) => setEmail(email)}
          />

          <TextInput
            label="Password"
            value={password}
            style={{
              marginLeft: 60,
              backgroundColor: 'white',
              fontSize: 20,
              margin: 10,
              width: 300,
            }}
            onChangeText={(password) => setPassword(password)}
          />
          <View style={{ marginVertical: 40, marginLeft: 30 }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'grey',
                borderRadius: 40,
                width: 200,
                height: 50,
                flexDirection: 'row',
                marginLeft: 70,
                marginTop: 20,
              }}
              onPress={() => {login(email,password)}
                }>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlu3fqSAfBiBXIe0kf1jYsd168XMoTHkaIayQ7F8fgkWAppAlxbfmfmHevLchlUBzzpKE&usqp=CAU',
                }}
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
              />
              <Text
                style={{
                  color: 'purple',
                  padding: 10,
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingLeft: 30,
                }}>
                SIGN IN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('signup')}
              style={{ marginRight: 20 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight:'bold',
                  textAlign: 'center',
                  marginLeft: 0,
                }}>
                Don't have any account? Signup :
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ImageBackground>
    </View>
  );
}
export default SignIn;