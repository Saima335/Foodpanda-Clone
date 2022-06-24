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

function PickupScreen({ navigation }) {
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
      borderBottomWidth: 1,borderBottomColor:'#ccc', marginVertical:10 }}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Add to Cart', {
          //   title: title,
          // });
        }}
        style={{ flexDirection: 'row',marginBottom: 20, marginTop: 10,marginLeft:0 }}>
        <Card
              style={{ marginTop: 30 }}
              onPress={() => navigation.navigate('place order', {
                title: title,
              })}>
              <View style={{ flexDirection: 'row' }}>
                <Card.Content style={{ backgroundColor: 'pink', width: 230 }}>
                  <Title style={{ marginLeft: 5 }}>{title.rname}</Title>
                  <Text>Recipe: {title.recipename}</Text>
                  <Text> Price: {title.price}</Text>
                  <Paragraph style={{ marginLeft: 10,marginRight:10 }}>
                  Description: Invariably the food is tasty and well prepared. 
                  The fare is appropriate for the price point and market it’s 
                  aimed at. It’s essential that patrons feel they’ve had a good, 
                  enjoyable meal.
                  </Paragraph>
                </Card.Content>
                <Card.Cover
                  style={{ height: 290, width: 150, marginLeft: 0 }}
                  source={{
                    uri: title.image
                  }}
                />
              </View>
            </Card>
        
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
      <View style={{marginTop:20}}>
          {resultNotFound ? (
            <NotFound />
          ) : (
            <FlatList data={objects} renderItem={renderItem} />
          )}
        </View>
      </View>
  );
}

export default PickupScreen;
// import * as React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
//   ScrollView,
//   SafeAreaView,
  
// } from 'react-native';

// import IonicIcon from 'react-native-vector-icons/Ionicons';
// import {
//   TextInput,
//   Caption,
//   Button,
//   Icon,
//   Avatar,
//   Card,
//   Title,
//   Paragraph,
// } from 'react-native-paper';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function PickupScreen({ navigation }) {
//     const [search, setSearch] = React.useState('');
//     return (
//       <View style={{ backgroundColor: 'grey' }}>
//         <SafeAreaView>
//           <ScrollView>
//             <TextInput
//               label="Search for Shops and Restaurants"
//               style={{
//                 backgroundColor: 'white',
//                 height: 50,
//                 margin: 10,
//                 width: 500,
//                 marginTop: 20,
//               }}
//               left={<TextInput.Icon name="magnify" />}
//               value={search}
//               onChangeText={(rname) => setSearch(search)}
//             />
  
//             <Card
//               style={{ marginTop: 20 }}
//               onPress={() => navigation.navigate('Food Delivery')}>
//               <View style={{ flexDirection: 'row' }}>
//                 <Card.Content style={{ backgroundColor: 'pink', width: 230 }}>
//                   <Title style={{ marginLeft: 5 }}>Atrio Cafe And Grill</Title>
//                   <Paragraph style={{ marginLeft: 15 }}>
//                     An excellent roof top option for steaks, continental, desi and
//                     Chinese cuisines.
//                   </Paragraph>
//                 </Card.Content>
//                 <Card.Cover
//                   style={{ height: 150, width: 150, marginLeft: 0 }}
//                   source={{
//                     uri: 'https://c.tribune.com.pk/2012/11/465055-AtrioCafPHOTOMYRAIQBALEXPRESS-1352819220.JPG',
//                   }}
//                 />
//               </View>
//             </Card>
  
//             <Card
//               style={{ marginTop: 30 }}
//               onPress={() => navigation.navigate('')}>
//               <View style={{ flexDirection: 'row' }}>
//                 <Card.Content style={{ backgroundColor: 'pink', width: 230 }}>
//                   <Title style={{ marginLeft: 5 }}>Howdy</Title>
//                   <Paragraph style={{ marginLeft: 15 }}>
//                     Howdy is an impressive restaurant with great ambiance and
//                     delightful food! 👌
//                   </Paragraph>
//                 </Card.Content>
//                 <Card.Cover
//                   style={{ height: 150, width: 150, marginLeft: 0 }}
//                   source={{
//                     uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgT1m7jPcJdbbBdnBQxElMTOs58CM7GRYM4g&usqp=CAU',
//                   }}
//                 />
//               </View>
//             </Card>
  
//             <Card
//               style={{ marginTop: 30 }}
//               onPress={() => navigation.navigate('')}>
//               <View style={{ flexDirection: 'row' }}>
//                 <Card.Content style={{ backgroundColor: 'pink', width: 230 }}>
//                   <Title style={{ marginLeft: 5 }}>Habibi Restaurant</Title>
//                   <Paragraph style={{ marginLeft: 15 }}>
//                     The ambiance and the food were both fantastic and they didn’t
//                     leave a big whole in the wallet either. Chapli kababs were
//                     spot on.
//                   </Paragraph>
//                 </Card.Content>
//                 <Card.Cover
//                   style={{ height: 180, width: 150, marginLeft: 0 }}
//                   source={{
//                     uri: 'https://www.croozi.com/upload/loc1024/1477424838location390.jpg',
//                   }}
//                 />
//               </View>
//             </Card>
  
//             <Card
//               style={{ marginTop: 30 }}
//               onPress={() => navigation.navigate('')}>
//               <View style={{ flexDirection: 'row' }}>
//                 <Card.Content style={{ backgroundColor: 'pink', width: 230 }}>
//                   <Title style={{ marginLeft: 5 }}>Khyber Darbar</Title>
//                   <Paragraph style={{ marginLeft: 15 }}>
//                     Invariably the food is tasty and well prepared. The fare is
//                     appropriate for the price point and market it’s aimed at. It’s
//                     essential that patrons feel they’ve had a good, enjoyable
//                     meal.
//                   </Paragraph>
//                 </Card.Content>
//                 <Card.Cover
//                   style={{ height: 200, width: 150, marginLeft: 0 }}
//                   source={{
//                     uri: 'https://lh5.googleusercontent.com/p/AF1QipMB4mFR-hSMbfgdkqv_C60Q0m9HUurA2t1p370-=w500-h500-k-no',
//                   }}
//                 />
//               </View>
//             </Card>
//           </ScrollView>
//         </SafeAreaView>
//       </View>
//     );
//   }
//   export default PickupScreen;