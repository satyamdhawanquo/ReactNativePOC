import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import Detail from '../Detail';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeTabNavigator = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <HomeTabNavigator.Navigator tabBarOptions={{showLabel: false, activeBackgroundColor: '#FCAD47'}} screenOptions={{
    
        }}>
            <HomeTabNavigator.Screen name="HomeStack" component={HomeStackComponent} options={{tabBarIcon: ()=> {
                return <Icon name="rocket" size={30} color="white" />;
            }}}/>
        </HomeTabNavigator.Navigator>
    );
}


const HomeStack = createStackNavigator();
const HomeStackComponent = () => {
    return (
        <HomeStack.Navigator initialRouteName="HomeScreen">
            <HomeStack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}/>
            <HomeStack.Screen name="Details" component={Detail} options={{headerBackTitle: 'Home'}}/>
        </HomeStack.Navigator>
    );
}

export default HomeScreen;