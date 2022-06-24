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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const user = auth().currentUser;
const Foodpanda = (props) => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView  {...props} contentContainerStyle={{ backgroundColor: 'purple' }} >
          <ImageBackground
            source={{ uri: "https://i.pinimg.com/474x/99/59/24/995924934504adab7c1a9780bad8319c.jpg" }}
            style={{ padding: 20, marginTop: 0, marginBottom: 2, height: 300 }}>
  
  
            <Text style={{ color: '#fff', fontSize: 23, fontFamily: 'Roboto-Medium' }}></Text>
  
          </ImageBackground>
          <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
            <DrawerItemList {...props} />
            <DrawerItem label="Food Delivery" onPress={()=>{props.navigation.navigate('Food Delivery')}}/>
            <DrawerItem label="View Cart" onPress={()=>{props.navigation.navigate('View Cart')}}/>
            <DrawerItem label="Pick Up" onPress={()=>{props.navigation.navigate('pickup')}}/>
            <DrawerItem label="App Setting" onPress={()=>{props.navigation.navigate('appsetting')}}/>
            
            <DrawerItem label="View Pickup Orders" onPress={()=>{props.navigation.navigate('pickupOrder')}}/>
            <DrawerItem label="Delete Pickup Order" onPress={()=>{

              firestore()
              .collection('Order')
              .doc(user.email)
              .delete()
              .then(() => {
                Alert.alert('Your Order deleted!');
              });
              
            }
          }
            />
          </View>
          
  
        </DrawerContentScrollView>
        <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: 'pink' }}>
          <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Avatar.Image style={{ borderRadius: 10, marginRight: 0, backgroundcolor: 'pink' }} size={33} source={{ uri: "https://dnd.com.pk/wp-content/uploads/2021/09/maxresdefault-3.jpg" }} />
              <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 15, marginLeft: 9, fontWeight: 'bold' }}>Customer Service</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  export default Foodpanda;