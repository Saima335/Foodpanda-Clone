import React,{useContext,useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack.js';
import AppStack from './AppStack';
import AdminStack from './AdminStack';
const Routes=()=>
{

    const{user,setUser}=useContext(AuthContext);
    const{initializing,setInitializing}=useState(true);

    const onAuthStateChanged=(user)=>{
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        console.log(user);
        return subscriber; // unsubscribe on unmount
    },[]);
    
    if(initializing) return null;
    return(
        <NavigationContainer>
            {user ? (user.email=='admin@gmail.com'  ? <AdminStack/>: <AppStack/> ):<AuthStack/>}
            
        </NavigationContainer>
    )
}
export default Routes;