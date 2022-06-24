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

function Header({ name, navigation }) {
    return (
        <View style={{backgroundColor: 'purple', flexDirection:'row', height:50}}>
            <AntDesign
                name="arrowleft"
                size={24}
                color="black"
                style={{marginTop:10
                }}
                onPress={() => {navigation.goBack()}}
            />
            <Text style={{marginTop:10, marginLeft:120, fontWeight:'bold', fontSize:20}}>{name}</Text>
        </View>
    );
}

export default Header;