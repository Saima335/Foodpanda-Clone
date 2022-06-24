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
  
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


function PickupOrderScreen({ navigation }) {
    const [objects, setObjects] = useState([]);
   
    const [bill,setBill]=useState(0);
    const user = auth().currentUser;
    //const totalprice={title.price};
    const updateBill=()=>{
      firestore()
      .collection('Order')
      .doc(user.email)
      .update({
         bill:bill,
      })
      .then(() => {
        console.log('Order Bill updated!');
      });
    }
    const getCartData = async () => {
      const users = await firestore().collection('Order').get();
      users.forEach(documentSnapshot => {
        if (user.email == documentSnapshot.id){
          var dataGet = documentSnapshot.data();
         console.log(dataGet.orders);
         var bills=dataGet.orders;
         var totalPrice=0;
         for(var i=0;i<bills.length;i++)
         {
             totalPrice=totalPrice+bills[i].price;
              
         }
         setObjects(dataGet.orders);
         setBill(totalPrice);
    }});

      // setObjects(users.data());
      // console.log("Users: ",users.data());
      // console.log("Objects: ",objects)
    };
    useEffect(() => {
      getCartData();
    },[]);
    const Item = ({ title }) => (
      <View style={{marginLeft:0, backgroundColor:'pink'}}>
        <TouchableOpacity
          
          style={{ flexDirection: 'row',marginLeft:0, marginBottom: 20, marginTop: 30 }}>
          <View>
            <Image
              style={{ width: 70, height: 70}}
              source={{ uri: title.image }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text>Restaurant: {title.Restaurant}</Text>
            <Text>Recipe: {title.recipename}</Text>
            <Text>Number: {title.FoodQuantity}</Text>
            <Text>Total amount: {title.price}</Text>
            
          </View>
        </TouchableOpacity>
      </View>
    );
    const renderItem = ({ item }) => <Item title={item} />;
    const billShow = () => {
      getCartData();
        updateBill();
         //console.log("TITLE PRICE-----------",title.price)
        //console.log("BILL--------------------"+title.price);
        Alert.alert('Total bill: ' + bill );
        
    };
  
    return (
      <View style={{}}>
        <View style={{ alignContent: 'center' }}>
          <FlatList data={objects} renderItem={renderItem} />
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'purple',
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
            Place Pickup Order
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default PickupOrderScreen;