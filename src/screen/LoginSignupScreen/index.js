import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../Signin';
import Signup from '../Signup';
import HomeScreen from '../HomeScreen';
const LoginStack = createStackNavigator();
const LoginSignupScreen = () => {
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
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};

export default LoginSignupScreen;
