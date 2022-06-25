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
  }, []);
  const Item = ({ title }) => (
    <View style={{height:200}}>
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
        style={{  
          marginLeft:10,
        width: '95%',
        height: '90%',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: '#FFFFFF',
  
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
  
        elevation: 5, }}>
        <View style={{ width: '50%', }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            source={{ uri: title.image }}
          />
        </View>
        <View style={{
          width: '50%',
          height: '60%',
          paddingVertical: 10,
          paddingHorizontal: 18,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <View>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#1c1c1c',
            marginBottom: 5,
          }}>{title.rname}</Text>
          </View>
          <View>
          <Text style={{
            fontSize: 14,
            color: '#757575',
            fontWeight: '500',
            lineHeight: 18,
          }}>{title.recipename}</Text>
          <Text style={{
            fontSize: 14,
            color: '#757575',
            fontWeight: '500',
            lineHeight: 18,
          }}>{title.price}</Text>
          <Text style={{
            fontSize: 14,
            color: '#757575',
            fontWeight: '500',
            lineHeight: 18,
          }}>{title.charges}</Text>
        </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item} />;

  return (
      <View style={{marginTop:10}}>
        <FlatList data={objects} renderItem={renderItem} />
      </View>
  );
}

export default ViewRestaurantsScreen;