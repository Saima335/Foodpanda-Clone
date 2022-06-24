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

import AntDesign from 'react-native-vector-icons/AntDesign';
// import { FlatList } from 'react-native-gesture-handler';

function AdminScreen({ navigation }) {
    const [rname, setRname] = useState('');
    const [recipename, setRecipename] = useState('');
    const [price, setPrice] = useState('');
    const [charges, setCharges] = useState('');
    const [image, setImage] = useState('');
    const [objects, setObjects] = useState([]);
  
    const storeAdminData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@objects');
        let objectss = [];
        if (jsonValue != null) {
          objectss = JSON.parse(jsonValue);
        }
        var found=false;
        for (var i = 0; i < objectss.length; i++) {
          if (rname == objectss[i].rname && recipename == objectss[i].recipename) {
            found = true;
            break;
          }
        }
        if (found==true){
          Alert.alert("Item Already exists");
        }
        else{
          const object = {
            rname: rname,
            recipename: recipename,
            price: price,
            charges: charges,
            image: image,
          }; 
          const jsonValue = await AsyncStorage.getItem('@objects');
          let objectss=[];
          if (jsonValue != null) {
            objectss=JSON.parse(jsonValue);
          }
          const updateObjects = [...objectss, object];
          setObjects(updateObjects);
          await AsyncStorage.setItem('@objects', JSON.stringify(updateObjects));
      }
     } catch (e) { }
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          label="Enter Restaurant Name"
          mode="outlined"
          style={{
            backgroundColor: 'white',
            height: 50,
            margin: 10,
            width: 250,
          }}
          value={rname}
          onChangeText={setRname}
        />
  
        <TextInput
          label="Enter Recipe Name"
          mode="outlined"
          style={{
            backgroundColor: 'white',
            height: 50,
            margin: 10,
            width: 250,
          }}
          value={recipename}
          onChangeText={setRecipename}
        />
  
        <TextInput
          label="Enter Price"
          mode="outlined"
          style={{
            backgroundColor: 'white',
            height: 50,
            margin: 10,
            width: 250,
          }}
          value={price}
          onChangeText={setPrice}
        />
  
        <TextInput
          label="Enter Delivery Charges"
          mode="outlined"
          style={{
            backgroundColor: 'white',
            height: 50,
            margin: 10,
            width: 250,
          }}
          value={charges}
          onChangeText={setCharges}
        />
  
        <TextInput
          label="Enter Image uri"
          mode="outlined"
          style={{
            backgroundColor: 'white',
            height: 50,
            margin: 10,
            width: 250,
          }}
          value={image}
          onChangeText={setImage}
        />
  
        <View style={{ marginTop: 50, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: 'blue',
              paddingVertical:15,
              paddingHorizontal:20,
              borderColor: 'black',
            }}
            onPress={() => {
              storeAdminData();
            }}>
            <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', fontWeight:'bold' }}>
              Add Product
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={{
              marginHorizontal:10,
              borderRadius: 10,
              backgroundColor: 'blue',
              paddingVertical:15,
              paddingHorizontal:20,
              borderColor: 'black',
            }}
            onPress={() => {
              // navigation.navigate('Admin Stack', {
              //   screen: 'View Restaurants',
              // });
              navigation.navigate('View Restaurants');
            }}>
            <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', fontWeight:'bold' }}>
              View All Products
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  export default AdminScreen;