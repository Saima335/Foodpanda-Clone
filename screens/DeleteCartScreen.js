import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  Modal,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Header from '../components/Header';

import AntDesign from 'react-native-vector-icons/AntDesign';
// import { FlatList } from 'react-native-gesture-handler';

import auth from '@react-native-firebase/auth';

function DeleteCartScreen({ navigation, route }) {
    const user = auth().currentUser;
    const { title } = route.params;
    const [object, setObject] = useState(route.params.title);
    const [objects, setObjects] = useState([]);
    const deleteObject = async () => {
      const result = await AsyncStorage.getItem(user.email);
      const bill = await AsyncStorage.getItem((user.email+'bill'));
      let objects = [];
      if (result !== null) objects = JSON.parse(result);
      if (bill !== null) { var billAmount = parseInt(JSON.parse(bill)); }
      billAmount -= parseInt(title.amount);
      const newObjects = objects.filter((n) => n.rname !== object.rname || n.recipename!==object.recipename);
      setObject(newObjects);
      await AsyncStorage.setItem(user.email, JSON.stringify(newObjects));
      await AsyncStorage.setItem((user.email+'bill'), JSON.stringify(billAmount));
      Alert.alert("Cart deleted successfully");
      navigation.navigate('Drawer Screen');
    };
  
    const displayDeleteAlert = () => {
      Alert.alert(
        'Are You Sure!',
        'This action will delete your cart permanently!',
        [
          {
            text: 'Delete',
            onPress: deleteObject,
          },
          {
            text: 'No Thanks',
            onPress: () => console.log('no thanks'),
          },
        ],
        {
          cancelable: true,
        }
      );
    };
    return (
      <View>
        <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 100 }}>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: title.image }}
            />
          </View>
          <View style={{ marginLeft: 50 }}>
            <Text>{title.rname}</Text>
            <Text>{title.recipename}</Text>
            <Text>{title.number}</Text>
            <Text>{title.amount}</Text>
          </View>
          <View style={{ position: 'absolute', right: 15, bottom: 50 }}>
            <AntDesign
              name="delete"
              size={24}
              color="red"
              style={{
                backgroundColor: 'pink',
                padding: 15,
                borderRadius: 50,
                elevation: 5, marginBottom: 15,
              }}
              onPress={displayDeleteAlert}
            />
          </View>
        </View>
      </View>
    );
  }

  export default DeleteCartScreen;