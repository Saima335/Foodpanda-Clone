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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


function UpdateProfile({ navigation }) {
    const [text, setText] = React.useState('');
    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [Id, setId] = React.useState('');
    const user = auth().currentUser;
    const updateData = () => {
      firestore()
        .collection('Users')
        .doc(user.email)
        .update({
          Customeraddress: text,
          Customerpassword:text1,
          Customerphone:text2
        })
        .then(() => {
          console.log('User updated!');
        });
    }
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#AA336A',
          height: 1000,
        }}>
        <View style={{ margin: 100 }}>
        
          <TextInput
            label="Enter New Username"
            value={text}
            style={{
              backgroundColor: 'white',
              color: 'green',
              fontSize: 20,
              width: 300,
              margin: 10,
            }}
            onChangeText={(text) => setText(text)}
          />
  
          <TextInput
            label="Enter New Password"
            value={text1}
            style={{
              backgroundColor: 'white',
              fontSize: 20,
              margin: 10,
              width: 300,
            }}
            onChangeText={(text1) => setText1(text1)}
          />
          <TextInput
            label="Enter New Phone Number"
            value={text2}
            style={{
              backgroundColor: 'white',
              fontSize: 20,
              margin: 10,
              width: 300,
            }}
            onChangeText={(text2) => setText2(text2)}
          />
          <View style={{ marginVertical: 40 }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: 250,
                height: 50,
                flexDirection: 'row',
                marginLeft: 40,
                marginTop: 50,
              }}
              onPress={() => {
                updateData();
                navigation.navigate('signin');
              }}>
              <Image
                source={{
                  uri: 'https://cdn3.iconfinder.com/data/icons/vector-icons-8/96/389-512.png',
                }}
                style={{ width: 50, height: 50 }}
              />
              <Text
                style={{
                  color: 'pink',
                  padding: 15,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                UPDATE PROFILE INFO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  export default UpdateProfile;