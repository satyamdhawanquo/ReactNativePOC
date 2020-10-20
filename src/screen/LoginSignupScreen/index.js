import React, { useState } from 'react';
import {Dimensions, Image, ImageBackground, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../Signin';
import Signup from '../Signup';
import HomeScreen from '../HomeScreen';
import AsyncStorage from '@react-native-community/async-storage';
const LoginStack = createStackNavigator();
const LoginSignupScreen = () => {
  [user, setUser] = useState({});
  return (
    <LoginStack.Navigator initialRouteName="Login">
      <LoginStack.Screen
        name="Login"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen
        name="Signup"
        component={Signup}
        options={{headerBackTitleVisible: false,headerTitle: '', headerBackImage: ()=>{
          return <Image style={styles.backButton} source={{uri: 'https://lh3.googleusercontent.com/proxy/WAAiwXmmEoTp8IeVfW5ixlmrsUxnk7R4aGD-q6iRWKdlOuogMMmkXsJ0o-0bt8PW4ToBoudf5m_sPzRZZ_0FbrlHVl2n2RjRxjLyrruSKF7NwD0Own5Azjj3W4upRZOyBMRcoQa-AeeflNsxsy8xTkFarKWxLbY', width: 30, height:30}}></Image>
        }, headerBackground: ()=><Image source={{uri: 'data:image/jpeg;base64,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', width: Dimensions.get('screen').width, height: Dimensions.get('screen').height *0.11}}></Image>}}
      />
      <LoginStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10
  }
});

export default LoginSignupScreen;
