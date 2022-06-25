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
  ScrollView,
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
import Feather from 'react-native-vector-icons/Feather';

import AntDesign from 'react-native-vector-icons/AntDesign';
// import { FlatList } from 'react-native-gesture-handler';

import NotFound from '../components/NotFound';

import Header from '../components/Header';

function FoodDeliveryScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [objects, setObjects] = useState([]);
  const [resultNotFound, setResultNotFound] = useState(false);

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
  }, [resultNotFound]);

  // const NotFound = () => {
  //   return (
  //     <View style={{}}>
  //       <Text style={{ marginTop: 20, fontSize: 20 }}>Result Not Found</Text>
  //     </View>
  //   );
  // };

  const Item = ({ title }) => (
    <View style={{
      borderBottomWidth: 1,borderBottomColor:'#ccc', marginVertical:5 }}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Stack Screen', {
          //   screen: 'Add to Cart',
          //   params: {title: title},
          // });;
          navigation.navigate('Add to Cart', {
            title: title,
          });
        }}
        style={{ flexDirection: 'row',marginBottom: 5, marginTop: 5,marginLeft:0, paddingVertical:20}}>
        <View style={{alignItems:'center', }}>
          <Image
            style={{ marginLeft: 30,width: 200, height: 200 }}
            source={{ uri: title.image }}
          />
        </View>
        <View style={{ }}>
          <Text style={{fontWeight:'bold', fontSize:15}}>Restaurant: {title.rname}</Text>
          <Text style={{fontWeight:'bold', fontSize:10}}>Recipe: {title.recipename}</Text>
          <Text style={{fontWeight:'bold', fontSize:10}}>Price: {title.price}</Text>
          <Text style={{fontWeight:'bold', fontSize:10}}>Delivery Charges: {title.charges}</Text>
        </View>
        
      </TouchableOpacity>
      <View style={{ }}></View>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item} />;

  const handleOnSearchInput = async (text) => {
    setSearch(text);
    if (!text.trim()) {
      setSearch('');
      setResultNotFound(false);
      return await getAdminData();
    }
    const filteredObjects = objects.filter((object) => {
      if (object.rname.toLowerCase().includes(text.toLowerCase())) {
        return object;
      }
    });

    if (filteredObjects.length) {
      setResultNotFound(false);
      setObjects([...filteredObjects]);
    } else {
      setResultNotFound(true);
    }
  };

  const handleOnClear = async () => {
    setSearch('');
    setResultNotFound(false);
    await getAdminData();
  };

  return (
    <View style={{}}>
      <TextInput
        label="Search for Shops and Restaurants"
        style={{
          backgroundColor: 'white',
          height: 50,
          margin: 10, 
          width: 500,
          marginTop: 20,
        }}
        left={<TextInput.Icon name="magnify" />}
        value={search}
        onChangeText={handleOnSearchInput}
      />
      <View style={{marginTop:0}}>
          {resultNotFound ? (
            <NotFound />
          ) : (
            <FlatList data={objects} renderItem={renderItem} />
          )}
        </View>
      </View>
  );
}

export default FoodDeliveryScreen;