import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../Signup';

const LoginStack = createStackNavigator();
const LoginSignupScreen = () => {
    return (
        <LoginStack.Navigator initialRouteName="Login">
            <LoginStack.Screen name="Login" component={Signup} options={{
                headerShown: false
            }} />
        </LoginStack.Navigator>
    );
}

export default LoginSignupScreen;