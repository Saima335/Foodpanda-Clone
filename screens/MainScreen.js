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

function MainScreen({ navigation }) {
    const [search, setSearch] = useState('');
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
          onChangeText={setSearch}
        />
  
        <Card
          style={{ marginTop: 20 }}
          onPress={() =>{ 
            // navigation.navigate('Stack Screen', {
            //   screen: 'Food Delivery',
            // });
            navigation.navigate('Food Delivery')
            }}>
          <View style={{ flexDirection: 'row' }}>
            <Card.Content style={{ backgroundColor: 'pink', width: 230 }}>
              <Title style={{ marginLeft: 5 }}>Food Delivery</Title>
              <Paragraph style={{ marginLeft: 15 }}>
                Order Your Favourite Restaurants and Home Chefs
              </Paragraph>
            </Card.Content>
            <Card.Cover
              style={{ height: 150, width: 150, marginLeft: 20 }}
              source={{
                uri: 'https://www.elluminatiinc.com/wp-content/uploads/2020/05/foodpan/foodpandacloneapp.png',
              }}
            />
          </View>
        </Card>
  
        <Card style={{ marginTop: 30 }} onPress={() => {navigation.navigate('pickup')}}>
          <View style={{ flexDirection: 'row' }}>
            <Card.Content style={{ backgroundColor: 'pink', width: 230 }}>
              <Title style={{ marginLeft: 5 }}>Pick Up</Title>
              <Paragraph style={{ marginLeft: 15 }}>
                Enjoy Upto 50% Off and More
              </Paragraph>
            </Card.Content>
            <Card.Cover
              style={{ height: 150, width: 150, marginLeft: 20 }}
              source={{
                uri: 'https://asia-public.foodpanda.com/marketing/production/hk/images/nl/HK_CNY%20Jan%20-%20Feb_Campaign%20KV_Pick-Up_600x600_EN_EC.png?v=1474950916',
              }}
            />
          </View>
        </Card>
  
        <Card style={{ marginTop: 30 }} onPress={() => {}}>
          <View style={{ flexDirection: 'row' }}>
            <Card.Content style={{ backgroundColor: 'pink', width: 230 }}>
              <Title style={{ marginLeft: 5 }}>Daily Deals</Title>
              <Paragraph style={{ marginLeft: 15 }}>
                Enjoy Summer Discounts
              </Paragraph>
            </Card.Content>
            <Card.Cover
              style={{ height: 150, width: 150, marginLeft: 20 }}
              source={{
                uri: 'https://www.manilastandard.net/panel/_files/image/New_Images/featured_image/2021/March/08/food_panda_deals.jpg',
              }}
            />
          </View>
        </Card>
      </View>
    );
  }

  export default MainScreen;