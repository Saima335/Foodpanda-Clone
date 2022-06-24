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
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
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
import auth from '@react-native-firebase/auth';
function Appsetting({ navigation }) {
  const {logout}=React.useContext(AuthContext);
  const user = auth().currentUser;
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', width: 400, height: 2000 }}>
        <ImageBackground
          source={{
            uri: 'https://imgmedia.lbb.in/media/2020/01/5e2c67518fc8f2036a3f591c_1579968337893.jpg',
          }}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: 'center', width: 400, height: 1000 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 250,
              height: 70,
              flexDirection: 'row',
              marginTop: 0,
              marginLeft: 70,
              marginBottom: 70,
            }}
            onPress={() => {
              navigation.navigate('updateProfile');
            }}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/04/99/21/94/360_F_499219420_kWqammohStKgYBEB2iXuYiybEtNihVmu.jpg',
              }}
              style={{ width: 80, height: 70 }}
            />
            <Text
              style={{
                color: 'pink',
                padding: 25,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              UPDATE PROFILE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 250,
              height: 70,
              flexDirection: 'row',
              marginBottom: 70,
              marginLeft: 70,
            }}
            onPress={() => {
              navigation.navigate('updateAddress');
            }}>
            <Image
              source={{
                uri: 'https://firstsiteguide.com/wp-content/uploads/2020/11/list-of-words-cant-be-used-in-titles-1.jpg',
              }}
              style={{ width: 80, height: 70 }}
            />
            <Text
              style={{
                color: 'pink',
                padding: 25,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              CHANGE ADDRESS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 250,
              height: 70,
              flexDirection: 'row',
              marginBottom: 70,
              marginLeft: 70,
            }}
            onPress={()=>logout()}
            >
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/02/44/59/21/360_F_244592149_w3m292WDQtgZwmRpImjUVd6rC9dufZAS.jpg',
              }}
              style={{ width: 80, height: 70 }}
            />
            <Text
              style={{
                color: 'pink',
                padding: 25,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              LOGOUT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 250,
              height: 70,
              flexDirection: 'row',
              marginBottom: 70,
              marginLeft: 70,
            }}
            onPress={()=>{firestore()
              .collection('Order')
              .doc(user.email)
              .delete()
              .then(() => {
                Alert.alert('Your Order deleted!');
              });}}>
            <Image
              source={{
                uri: 'data:image/png;base64,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',
              }}
              style={{ width: 80, height: 70 }}
            />
            <Text
              style={{
                color: 'pink',
                padding: 25,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              CANCEL ORDER
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
  export default Appsetting;