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
import { NavigationContainer,useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Header from '../components/Header';

import AntDesign from 'react-native-vector-icons/AntDesign';
// import { FlatList } from 'react-native-gesture-handler';

function AddToCartScreen({ navigation, route }) {
  const [number, setNumber] = useState(0);
  const { title } = route.params;
  const [amount, setAmount] = useState(0);
  const [objects, setObjects] = useState([]);
  const [bill, setBill] = useState(0);
  const user = auth().currentUser;
  var found = false;

  const storeBill = async (value) => {
    try {
      await AsyncStorage.setItem((user.email+'bill'), value)
      setBill(value);
    } catch (e) {

    }
  }

  const getBill = async () => {
    try {
      const value = await AsyncStorage.getItem((user.email+'bill'));
      if (value !== null) {
        setBill(value);
      }
    }
    catch (e) {

    }
  }

  const storeCartData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(user.email);
      let objectss = [];
      if (jsonValue != null) {
        objectss = JSON.parse(jsonValue);
      }
      for (var i = 0; i < objectss.length; i++) {
        if (title.rname == objectss[i].rname && title.recipename == objectss[i].recipename) {
          found = true;
          objectss[i].amount = (objectss[i].amount + amount) - parseInt(title.charges);
          objectss[i].number = objectss[i].number + number;
          setObjects(objectss);
          await AsyncStorage.setItem(user.email, JSON.stringify(objectss));
          getBill();
          setAmount(amount-parseInt(title.charges));
          storeBill(((amount-parseInt(title.charges)) + parseInt(bill)).toString());
          break;
        }
      }
      if (found == false) {
        const object = {
          rname: title.rname,
          recipename: title.recipename,
          amount: amount,
          number: number,
          image: title.image,
        };
        const updateObjects = [...objectss, object];
        setObjects(updateObjects);
        await AsyncStorage.setItem(user.email, JSON.stringify(updateObjects));
        getBill();
        storeBill((amount + parseInt(bill)).toString());
      }
    } catch (e) { }
  };

  useEffect(() => { setNumber(0); setAmount(0) }, [title.rname])
  useEffect(() => {
    if (number > 0) {
      setAmount((parseInt(title.price) * number) + parseInt(title.charges));
    }
    else {
      setAmount(0);
    }
  }, [number])

  useEffect(()=>{getBill()},[]);

  return (
    <View style={{ marginBottom: 20 }}>
      <View>
        <Image
          style={{ width: 350, height: 300 }}
          source={{ uri: title.image }}
        />
      </View>
      <View style={{ marginLeft: 50 }}>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Number: {number}
          </Text>
          <View style={{ marginLeft: 50 }}>
            <AntDesign
              name="up"
              size={15}
              color="red"
              style={{
              }}
              onPress={() => { setNumber(number + 1) }}
            />
            <AntDesign
              name="down"
              size={15}
              color="red"
              style={{
              }}
              onPress={() => {
                if (number > 0) {
                  setNumber(number - 1);
                }
              }}
            />
          </View>
        </View>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Restaurant: {title.rname}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Recipe: {title.recipename}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Total Amount: {amount}</Text>
      </View>
      <View style={{ marginTop: 50, flexDirection: 'row' }}>
        <TouchableOpacity
        disabled={number==0}
          style={{
            marginLeft: 30,
            borderRadius: 10,
            backgroundColor: 'blue',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderColor: 'black',
          }}
          onPress={() => {
            storeCartData();
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Add To Cart
          </Text> 
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 20,
            borderRadius: 10,
            backgroundColor: 'blue',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderColor: 'black',
          }}
          onPress={() => {
            navigation.navigate('View Cart');
            // navigation.navigate('View Cart');
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddToCartScreen;