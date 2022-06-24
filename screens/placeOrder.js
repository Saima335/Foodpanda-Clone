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
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { FlatList } from 'react-native-gesture-handler';

import auth from '@react-native-firebase/auth';
import { toNamespacedPath } from 'path';

function PlaceOrderScreen({ navigation, route }) {
  const [number, setNumber] = useState(0);
  const { title } = route.params;
  const Rest = title.rname;
  const recipe = title.recipename;
  const img = title.image;
  const [amount, setAmount] = useState(0);
  const [objects, setObjects] = useState([]);
  const [bill, setBill] = useState(0);
  var found = false;
  const user = auth().currentUser;

  const getCartData = async () => {
    const users = await firestore().collection('Order').get();
    users.forEach(documentSnapshot => {
      if (user.email == documentSnapshot.id){
        var dataGet = documentSnapshot.data();
        console.log(dataGet.orders);
      setObjects(dataGet.orders);
      console.log('dataGet.bill =', dataGet.bill);
      setBill(dataGet.bill);
      }
    });

    // setObjects(users.data());
    // console.log("Users: ",users.data());
    // console.log("Objects: ",objects)
  };
  const addData = async() => {
    let objectss = objects;
    const users = await firestore().collection('Order').get();
    users.forEach(documentSnapshot => {
      if (user.email == documentSnapshot.id){
        var dataGet = documentSnapshot.data();
        objectss=dataGet.orders
      }
    });
    

    for (var i = 0; i < objectss.length; i++) {
      if (title.rname == objectss[i].Restaurant && title.recipename == objectss[i].recipename) {
        found = true;
        objectss[i].price = (objectss[i].price + amount)
        objectss[i].FoodQuantity = objectss[i].FoodQuantity + number;

        console.log("................Amount: ", objectss[i].FoodQuantity);
        setObjects(objectss);

        firestore()
          .collection('Order')
          .doc(user.email)
          .update({ orders: objectss })
          .then(() => {
            console.log('User updated!');
          });

        break;
      }
    }
    if (found == false) {
      const object = {
        Restaurant: Rest,
        recipename: recipe,
        FoodQuantity: number,
        price: amount,
        image: img,
      };
      setBill((amount + parseInt(bill)));
      const updateObjects = [...objectss, object];
      setObjects(updateObjects);

      firestore()
        .collection('Order')
        .doc(user.email)
        .set({
          orders: updateObjects,
          bill: bill,

        })
        .then(() => {
          console.log('Order data added!');
        });
    }
  }




  useEffect(() => { setNumber(0); setAmount(0) }, [title.rname])
  useEffect(() => {
    if (number > 0) {
      setAmount((parseInt(title.price) * number) + parseInt(title.charges));
    }
    else {
      setAmount(0);
    }
  }, [number])

  return (
    <View style={{ marginBottom: 20, backgroundColor: "pink", height: 800 }}>

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
      <View >
        <Image
          style={{ width: 400, height: 300 }}
          source={{ uri: title.image }}
        />
      </View>
      <View style={{ marginTop: 50, flexDirection: 'row' }}>
        <TouchableOpacity
          disabled={number == 0}
          style={{
            marginLeft: 10,
            borderRadius: 10,
            backgroundColor: 'purple',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderColor: 'black',
          }}
          onPress={() => {
            //storeCartData();
            addData();
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Add Order To Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 25,
            borderRadius: 10,
            backgroundColor: 'purple',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderColor: 'black',
          }}
          onPress={() => {
            //navigation.navigate('pickupOrder');
            navigation.navigate('pickupOrder');
            // navigation.navigate('View Cart');
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            View orders
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PlaceOrderScreen;