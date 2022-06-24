import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Alert,

} from 'react-native';
import auth from '@react-native-firebase/auth';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {
  TextInput,
  Caption,
  Button,
  Icon,
  Avatar,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';


function UpdateAddress({ navigation }) {
  const [text, setText] = React.useState('');
  const [Id, setid] = React.useState('');
  const user = auth().currentUser;
  const updateData = () => {
    firestore()
      .collection('Users')
      .doc(user.email)
      .update({
        Customeraddress: "Lahore",
      })
      .then(() => {
        Alert.alert('User updated!');
      });
  }
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#AA336A',
        height: 1000,
      }}>
      <View style={{ marginTop: 250 }}>
     
        <TextInput
          label="Enter New Address"
          value={text}
          style={{
            backgroundColor: 'white',
            color: 'green',
            fontSize: 20,
            width: 300,
            margin: 10,
          }}
          onChangeText={(text) => setText(text)}
        />

        <View style={{ marginVertical: 40 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 250,
              height: 50,
              flexDirection: 'row',
              marginLeft: 40,
              marginTop: 50,
            }}
            onPress={() => {
              updateData();
              Alert.alert("Updated Address Successfully");
            }}>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={{ width: 50, height: 50 }}
            />
            <Text
              style={{
                color: 'pink',
                padding: 15,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              UPDATE MY ADDRESS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default UpdateAddress;