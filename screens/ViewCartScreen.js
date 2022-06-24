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

import auth from '@react-native-firebase/auth';

import Header from '../components/Header';

function ViewCartScreen({ navigation }) {
    const [objects, setObjects] = useState([]);
    const user = auth().currentUser;
  
    const getCartData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(user.email);
        if (jsonValue != null) {
          setObjects(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log('error');
      }
    };
    useEffect(() => {
      getCartData();
    },[]);
    const Item = ({ title }) => (
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Stack Screen', {
            //   screen: 'Delete Cart Item',
            //   params: { title:title },
            // });
            navigation.navigate('Delete Cart Item', {
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
            <Text>Restaurant: {title.rname}</Text>
            <Text>Recipe: {title.recipename}</Text>
            <Text>Number: {title.number}</Text>
            <Text>Total amount: {title.amount}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
    const renderItem = ({ item }) => <Item title={item} />;
    const billShow = async () => {
      const bill = await AsyncStorage.getItem((user.email+'bill'));
      if (bill != null) {
        var billAmount = parseInt(JSON.parse(bill));
        Alert.alert('Total bill: ' + billAmount);
      }
    };
  
    return (
      <View style={{backgroundColor: "pink"}}>
        <View style={{ alignContent: 'center', marginLeft: 100 }}>
          <FlatList data={objects} renderItem={renderItem} />
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'blue',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderColor: 'black',
          }}
          onPress={() => {
            Alert.alert(
              'Are You Sure!',
              'You want to order food!',
              [
                {
                  text: 'Yes',
                  onPress: billShow
                },
                {
                  text: 'No',
                  onPress: () => console.log('canceled order'),
                },
              ],
              {
                cancelable: true,
              }
            );
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Order Food
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default ViewCartScreen;