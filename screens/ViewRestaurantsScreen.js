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

import Header from '../components/Header';

function ViewRestaurantsScreen({ navigation }) {
    const [objects, setObjects] = useState([]);
    const getAdminData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@objects');
        if (jsonValue != null) {
          setObjects(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log('error');
      }
    };
    useEffect(() => {
      getAdminData();
    },[]); 
    const Item = ({ title }) => (
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Admin Stack', {
            //   screen: 'Update Delete Restaurants',
            //   params: { title:title },
            // });
            navigation.navigate('Update Delete Restaurants', {
              title: title,
            });
          }}
          style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: title.image }}
            />
          </View>
          <View style={{ marginLeft: 50 }}>
            <Text>{title.rname}</Text>
            <Text>{title.recipename}</Text>
            <Text>{title.price}</Text>
            <Text>{title.charges}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  
    const renderItem = ({ item }) => <Item title={item} />;
  
    return (
      <View style={{backgroundColor: "pink"}}>
        <View style={{ alignContent: 'center', marginLeft: 100 }}>
          <FlatList data={objects} renderItem={renderItem} />
        </View>
      </View>
    );
  }

  export default ViewRestaurantsScreen;