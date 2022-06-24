import React from 'react';
import {
  Text,
  View,

  TouchableOpacity,
  Image,
  ImageBackground,


} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {
  TextInput,

} from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';

function SignUp({ navigation }) {
  const[Id,setId]=React.useState('');
  const [name, setName] = React.useState('');
  const [email, setemail] = React.useState('');
  const [address, setaddress] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [phone, setphone] = React.useState('');

  const { register } = React.useContext(AuthContext);
  //reading data ONE-TIME READ
  // const users = await firestore().collection('Users').get();
  // const user = await firestore().collection('Users').doc('ABC').get();
  const user = auth().currentUser;
  const addData = () => {
    firestore()
      .collection('Users')
      .doc(email)
      .set({
        id:Id,
        Customername: name,
        Customeremail: email,
        Customeraddress: address,
        Customerpassword: password,
        Customerphone: phone,
      
      })
      .then(() => {
        console.log('User added!');
      });
  }
  return (
    <View style={{ alignItems: 'center', height: 800 }}>
      <ImageBackground
        source={{
          uri: 'https://www.schemecolor.com/wallpaper?i=25810&desktop',
        }}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'center', width: 400, height: 800 }}>
        <View style={{ marginTop: 0 }}>
        <TextInput
            label="ID"
            value={Id}
            style={{
              backgroundColor: 'white',
              marginLeft: 60,
              margin: 10,
              width: 300,
            }}
            onChangeText={(Id) => setId(Id)}
          />
          <TextInput
            label="Username"
            value={name}
            style={{
              backgroundColor: 'white',
              marginLeft: 60,
              margin: 10,
              width: 300,
            }}
            onChangeText={(name) => setName(name)}
          />

          <TextInput
            label="email"
            value={email}
            style={{
              backgroundColor: 'white',
              marginLeft: 60,
              margin: 10,
              width: 300,
            }}
            onChangeText={(email) => setemail(email)}
          />

          <TextInput
            label="address"
            value={address}
            style={{
              backgroundColor: 'white',
              marginLeft: 60,
              margin: 10,
              width: 300,
            }}
            onChangeText={(address) => setaddress(address)}
          />

          <TextInput
            label="phone no"
            value={phone}
            style={{
              backgroundColor: 'white',
              marginLeft: 60,
              margin: 10,
              width: 300,
            }}
            onChangeText={(phone) => setphone(phone)}
          />

          <TextInput
            label="Password"
            value={password}
            style={{
              backgroundColor: 'white',
              marginLeft: 60,
              margin: 10,
              width: 300,
            }}
            onChangeText={(password) => setpassword(password)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'grey',
              borderRadius: 40,
              width: 200,
              height: 50,
              flexDirection: 'row',
              marginLeft: 100,
              marginTop: 20,
              marginBottom: 0,
            }}
            onPress={() =>{
              register(email, password);
              addData();
              navigation.navigate('signin');
            }}>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={{
                width: 50,
                height: 50,
                marginLeft: 40,
                borderRadius: 20,
              }}
            />
            <Text
              style={{
                color: 'pink',
                padding: 15,
                fontWeight: 'bold',
                fontSize: 15,
                paddingLeft: 30,
              }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SignUp;