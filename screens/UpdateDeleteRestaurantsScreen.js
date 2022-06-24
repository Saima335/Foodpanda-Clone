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

import RoundIconBtn from '../components/RoundIconBts';

function UpdateDeleteRestaurantsScreen({ navigation, route }) {
    const { title } = route.params;
    const [object, setObject] = useState(route.params.title);
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [objects, setObjects] = useState([]);
  
    const deleteObject = async () => {
      const result = await AsyncStorage.getItem('@objects');
      let objects = [];
      if (result !== null) objects = JSON.parse(result);
  
      const newObjects = objects.filter((n) => (n.rname !== object.rname || n.recipename !== object.recipename));
      setObjects(newObjects);
      await AsyncStorage.setItem('@objects', JSON.stringify(newObjects));
      Alert.alert("Item Deleted Successfully");
      navigation.navigate('Admin Drawer');
    };
  
    const displayDeleteAlert = () => {
      Alert.alert(
        'Are You Sure!',
        'This action will delete your restaurant permanently!',
        [
          {
            text: 'Delete',
            onPress: ()=>{deleteObject();},
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
  
    const handleUpdate = async (rname, recipename, price, charges) => {
      const result = await AsyncStorage.getItem('@objects');
      let objects = [];
      if (result !== null) objects = JSON.parse(result);
  
      const newObjects = objects.filter((n) => {
        if (n.rname === object.rname && n.recipename===object.recipename) {
          n.rname = rname;
          n.recipename = recipename;
          n.price = price;
          n.charges = charges;
          n.isUpdated = true;
  
          setObject(n);
        }
        return n;
      });
  
      setObjects(newObjects);
      await AsyncStorage.setItem('@objects', JSON.stringify(newObjects));
    };
    const handleOnClose = () => setShowModal(false);
  
    const openEditModal = () => {
      setIsEdit(true);
      setShowModal(true);
    };
  
    const NoteInputModal = ({ visible, onClose, onSubmit, object, isEdit }) => {
      const [rname, setRname] = useState('');
      const [recipename, setRecipename] = useState('');
      const [price, setPrice] = useState('');
      const [charges, setCharges] = useState('');
      const handleModalClose = () => {
        Keyboard.dismiss();
      };
  
      useEffect(() => {
        if (isEdit) {
          setRname(object.rname);
          setRecipename(object.recipename);
          setPrice(object.price);
          setCharges(object.charges);
        }
      }, [isEdit]);
  
      const handleOnChangeText = (text, valueFor) => {
        if (valueFor === 'rname') setRname(text);
        if (valueFor === 'recipename') setRecipename(text);
        if (valueFor === 'price') setPrice(text);
        if (valueFor === 'charges') setCharges(text);
      };
  
      const handleSubmit = () => {
        if (
          !rname.trim() &&
          !recipename.trim() &&
          !price.trim() &&
          !charges.trim()
        )
          return onClose();
  
        if (isEdit) {
          onSubmit(rname, recipename, price, charges);
          Alert.alert("Item Updated Successfully");
          navigation.navigate('Admin Drawer');
        } else {
          onSubmit(rname, recipename, price, charges);
          setRname('');
          setRecipename('');
          setPrice('');
          setCharges('');
        }
        onClose();
      };
  
      const closeModal = () => {
        if (!isEdit) {
          setRname('');
          setRecipename('');
          setPrice('');
          setCharges('');
        }
        onClose();
      };
  
      return (
        <>
          <Modal visible={visible} animationType="fade">
            <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
              <TextInput
                value={rname}
                onChangeText={(text) => handleOnChangeText(text, 'rname')}
                placeholder="Restraunt Name"
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: 'pink',
                  fontSize: 20,
                  color: 'red',
                  height: 40,
                  marginBottom: 15,
                  fontWeight: 'bold',
                }}
              />
              <TextInput
                value={recipename}
                placeholder="Recipe Name"
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: 'pink',
                  fontSize: 20,
                  color: 'red',
                  height: 100,
                }}
                onChangeText={(text) => handleOnChangeText(text, 'recipename')}
              />
              <TextInput
                value={price}
                placeholder="Price"
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: 'pink',
                  fontSize: 20,
                  color: 'red',
                  height: 100,
                }}
                onChangeText={(text) => handleOnChangeText(text, 'price')}
              />
              <TextInput
                value={charges}
                placeholder="Charges"
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: 'pink',
                  fontSize: 20,
                  color: 'red',
                  height: 100,
                }}
                onChangeText={(text) => handleOnChangeText(text, 'charges')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingVertical: 15,
                }}>
                <AntDesign
                  name="check"
                  size={15}
                  color="red"
                  style={{
                    backgroundColor: 'pink',
                    padding: 15,
                    borderRadius: 50,
                    elevation: 5,
                  }}
                  onPress={handleSubmit}
                />
                {rname.trim() ||
                  recipename.trim() ||
                  price.trim() ||
                  charges.trim() ? (
                  <AntDesign
                    name="close"
                    size={15}
                    color="red"
                    style={{
                      backgroundColor: 'pink',
                      padding: 15,
                      borderRadius: 50,
                      elevation: 5,
                      marginLeft: 15,
                    }}
                    onPress={closeModal}
                  />
                ) : null}
                {/* <RoundIconBtn
                  size={15}
                  antIconName="check"
                  onPress={handleSubmit}
                />
                {rname.trim() ||
                  recipename.trim() ||
                  price.trim() ||
                  charges.trim() ? (
                  <RoundIconBtn
                    size={15}
                    style={{ marginLeft: 15 }}
                    antIconName="close"
                    onPress={closeModal}
                  />
                ) : null} */}
              </View>
            </View>
            <TouchableWithoutFeedback onPress={handleModalClose}>
              <View
                style={{ flex: 1, zIndex: -1 }[StyleSheet.absoluteFillObject]}
              />
            </TouchableWithoutFeedback>
          </Modal>
        </>
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
            <Text>{title.price}</Text>
            <Text>{title.charges}</Text>
          </View>
          <View style={{ position: 'absolute', right: 15, bottom: 50 }}>
            {/* <AntDesign
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
            <AntDesign
              name="edit"
              size={24}
              color="red"
              style={{
                backgroundColor: 'pink',
                padding: 15,
                borderRadius: 50,
                elevation: 5,
              }}
              onPress={openEditModal}
            /> */}
            <RoundIconBtn
              antIconName="delete"
              style={{ backgroundColor: 'red', marginBottom: 15 }}
              onPress={displayDeleteAlert}
            />
            <RoundIconBtn antIconName="edit" onPress={openEditModal} />
          </View>
          <NoteInputModal
            isEdit={isEdit}
            object={object}
            onClose={handleOnClose}
            onSubmit={handleUpdate}
            visible={showModal}
          />
        </View>
      </View>
    );
  }

  export default UpdateDeleteRestaurantsScreen;